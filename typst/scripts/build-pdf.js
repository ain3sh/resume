/* eslint-disable no-console */
const path = require('path');
const { spawnSync } = require('child_process');

function parseArgs(argv) {
  const args = {
    profile: 'default',
    theme: 'dark',
    out: null,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--profile') {
      args.profile = argv[i + 1];
      i += 1;
    } else if (arg === '--theme') {
      args.theme = argv[i + 1];
      i += 1;
    } else if (arg === '--out') {
      args.out = argv[i + 1];
      i += 1;
    }
  }
  return args;
}

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', ...opts });
  if (res.status !== 0) {
    throw new Error(`${cmd} failed with exit code ${res.status}`);
  }
}

function main() {
  const { profile, theme, out } = parseArgs(process.argv.slice(2));
  const repoRoot = path.resolve(__dirname, '../..');

  const pdfOut = out ?? `pdfs/ain3sh-typst-${theme}-resume.pdf`;

  run('node', [
    path.join(repoRoot, 'typst/scripts/convert-ts-data-to-typst.js'),
    '--profile',
    profile,
    '--out',
    'typst/generated/resume_data.typ',
  ], { cwd: repoRoot });

  run('typst', [
    'compile',
    'typst/main.typ',
    pdfOut,
    '--font-path',
    'typst/assets/fonts',
    '--input',
    `theme=${theme}`,
  ], { cwd: repoRoot });
}

main();
