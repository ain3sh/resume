/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ts = require('typescript');

// Known profile query params (for CLI parsing)
const PROFILE_PARAMS = ['base', 'keep', 'drop', 'tagBoost', 'tagFilter', 'limitTotal', 'limitPer', 'rewrite'];

function parseArgs(argv) {
  const args = { out: 'typst/generated/resume_data.typ', query: new Map() };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--out') {
      args.out = argv[i + 1];
      i += 1;
    } else if (arg === '--profile') {
      // Legacy: --profile maps to --base
      args.query.set('base', argv[i + 1]);
      i += 1;
    } else if (arg.startsWith('--')) {
      const key = arg.slice(2);
      if (PROFILE_PARAMS.includes(key)) {
        args.query.set(key, argv[i + 1]);
        i += 1;
      }
    }
  }
  return args;
}

// Adapter to make Map work with parseProfileQuery's QueryParams interface
function mapToQueryParams(map) {
  return {
    get(key) {
      return map.get(key) ?? null;
    },
  };
}

function transpileTsToCjs(sourceText, fileName) {
  const result = ts.transpileModule(sourceText, {
    fileName,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
    },
  });
  return result.outputText;
}

function resolveModulePath(request, fromFile) {
  if (!request.startsWith('.') && !path.isAbsolute(request)) {
    return null;
  }

  const base = request.startsWith('.')
    ? path.resolve(path.dirname(fromFile), request)
    : request;

  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    `${base}.json`,
    path.join(base, 'index.ts'),
    path.join(base, 'index.tsx'),
    path.join(base, 'index.js'),
  ];

  for (const candidate of candidates) {
    try {
      if (fs.statSync(candidate).isFile()) return candidate;
    } catch {
      // continue
    }
  }
  return null;
}

function loadTsModule(entryFile) {
  const cache = new Map();

  function _load(filePath) {
    const absPath = path.resolve(filePath);
    if (cache.has(absPath)) return cache.get(absPath).exports;

    const ext = path.extname(absPath);
    if (ext === '.json') {
      const json = JSON.parse(fs.readFileSync(absPath, 'utf8'));
      const mod = { exports: json };
      cache.set(absPath, mod);
      return mod.exports;
    }

    const sourceText = fs.readFileSync(absPath, 'utf8');
    const compiled = (ext === '.ts' || ext === '.tsx')
      ? transpileTsToCjs(sourceText, absPath)
      : sourceText;

    const mod = { exports: {} };
    cache.set(absPath, mod);

    function localRequire(request) {
      const resolved = resolveModulePath(request, absPath);
      if (resolved) {
        return _load(resolved);
      }
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(request);
    }

    const wrapper = `(function (exports, require, module, __filename, __dirname) {\n${compiled}\n})`;
    const script = new vm.Script(wrapper, { filename: absPath });
    const fn = script.runInThisContext();
    fn(mod.exports, localRequire, mod, absPath, path.dirname(absPath));
    return mod.exports;
  }

  return _load(entryFile);
}

function typstEscapeString(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
}

function toTypst(value) {
  if (value === null || value === undefined) return 'none';
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : 'none';
  if (typeof value === 'string') return `"${typstEscapeString(value)}"`;
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return `(${toTypst(value[0])},)`;
    }
    return `(${value.map(toTypst).join(', ')})`;
  }
  if (typeof value === 'object') {
    const entries = Object.entries(value);
    if (entries.length === 0) {
      return '(:)';
    }
    const parts = entries.map(([k, v]) => {
      if (!/^[_a-zA-Z][_a-zA-Z0-9]*$/.test(k)) {
        throw new Error(`Cannot encode object key as Typst field: ${k}`);
      }
      return `${k}: ${toTypst(v)}`;
    });
    return `(${parts.join(', ')})`;
  }
  return 'none';
}

function main() {
  const { out, query } = parseArgs(process.argv.slice(2));
  const repoRoot = path.resolve(__dirname, '../..');

  const resumeModule = loadTsModule(path.join(repoRoot, 'src/data/resumeData.ts'));
  const baseResume = resumeModule.resumeData ?? resumeModule.default;
  if (!baseResume) {
    throw new Error('Could not load resume data from src/data/resumeData.ts');
  }

  const queryParserModule = loadTsModule(path.join(repoRoot, 'src/profiles/queryParser.ts'));
  const parseProfileQuery = queryParserModule.parseProfileQuery;
  if (typeof parseProfileQuery !== 'function') {
    throw new Error('Could not load parseProfileQuery from src/profiles/queryParser.ts');
  }

  const profileTransform = parseProfileQuery(mapToQueryParams(query));
  const applied = profileTransform(baseResume);

  // Build query description for header
  const queryDesc = query.size > 0
    ? Array.from(query.entries()).map(([k, v]) => `${k}=${v}`).join('&')
    : 'default';

  const outputAbs = path.resolve(repoRoot, out);
  fs.mkdirSync(path.dirname(outputAbs), { recursive: true });

  const header = [
    '// This file is auto-generated. Do not edit by hand.',
    `// query: ${queryDesc}`,
    '',
  ].join('\n');

  const body = `#let resume = ${toTypst(applied)}\n`;
  fs.writeFileSync(outputAbs, header + body, 'utf8');
  console.log(`Wrote ${path.relative(repoRoot, outputAbs)}`);
}

main();
