## Query-based Profile Composition API

### Design Philosophy
Profiles become **ephemeral compositions** built from URL query params (React) or CLI flags (Typst). No files to manage per job - just bookmark/save the URL or command.

---

### URL API (React Preview)

Query params map directly to rule functions:

```
https://ain3sh.github.io/resume?tagBoost=ml,agents&limitTotal=10&keep=exp:tilli,exp:jhu-apl
```

| Param | Maps to | Example |
|-------|---------|---------|
| `base` | Start from named profile | `base=compact` |
| `tagBoost` | `tagBoost(tags)` | `tagBoost=ml,agents,backend` |
| `tagFilter` | `tagFilter(tags)` | `tagFilter=shipping,enterprise` |
| `keep` | `includeExperienceIds` + `includeProjectIds` | `keep=exp:tilli,proj:openskills` |
| `drop` | **new** `excludeIds` | `drop=exp:umd-mind,ach:tilli:bridge` |
| `limitTotal` | `limitExperienceTotalBullets` | `limitTotal=10` |
| `limitPer` | `limitAllExperienceBullets` | `limitPer=3` |
| `rewrite` | `rewriteText` | `rewrite=ERP:enterprise resource planning` |

**Composition order**: `base` → `keep/drop` → `tagBoost/tagFilter` → `limit*` → `rewrite`

---

### CLI API (Typst PDF)

Same params as flags:

```bash
# Full example
npm run typst:pdf -- --theme dark \
  --tagBoost ml,agents \
  --limitTotal 10 \
  --keep exp:tilli,exp:jhu-apl

# Quick one-liner for a job app
npm run typst:pdf -- --theme light --tagBoost backend,api --limitTotal 8
```

---

### New Primitives to Add

```typescript
// Exclude by ID (inverse of include*)
export function excludeIds(ids: string[]) {
  const drop = normalizeSet(ids);
  return (data: ResumeData): ResumeData => {
    const next = clone(data);
    next.experience = next.experience
      .filter(exp => !exp.id || !drop.has(exp.id))
      .map(exp => ({
        ...exp,
        achievements: exp.achievements.filter(a => !a.id || !drop.has(a.id)),
      }));
    next.projects = next.projects
      .filter(proj => !proj.id || !drop.has(proj.id))
      .map(proj => ({
        ...proj,
        achievements: proj.achievements.filter(a => !a.id || !drop.has(a.id)),
      }));
    return next;
  };
}
```

---

### Implementation Changes

**1. `src/profiles/queryParser.ts`** (new)
```typescript
export function parseProfileQuery(params: URLSearchParams): ResumeProfile {
  const rules: ResumeProfile[] = [];
  
  // Base profile first
  const base = params.get('base');
  if (base && profileRegistry[base]) {
    rules.push(profileRegistry[base].apply);
  }
  
  // Keep/drop (filtering)
  const keep = params.get('keep')?.split(',');
  if (keep?.length) {
    const expIds = keep.filter(id => id.startsWith('exp:'));
    const projIds = keep.filter(id => id.startsWith('proj:'));
    if (expIds.length) rules.push(includeExperienceIds(expIds));
    if (projIds.length) rules.push(includeProjectIds(projIds));
  }
  
  const drop = params.get('drop')?.split(',');
  if (drop?.length) rules.push(excludeIds(drop));
  
  // Boosting/filtering
  const boost = params.get('tagBoost')?.split(',');
  if (boost?.length) rules.push(tagBoost(boost));
  
  const filter = params.get('tagFilter')?.split(',');
  if (filter?.length) rules.push(tagFilter(filter));
  
  // Limits
  const limitTotal = parseInt(params.get('limitTotal') ?? '', 10);
  if (limitTotal > 0) rules.push(limitExperienceTotalBullets({ total: limitTotal }));
  
  const limitPer = parseInt(params.get('limitPer') ?? '', 10);
  if (limitPer > 0) rules.push(limitAllExperienceBullets(limitPer));
  
  // Rewrites (format: "from1:to1,from2:to2")
  const rewrite = params.get('rewrite');
  if (rewrite) {
    const replacements = Object.fromEntries(
      rewrite.split(',').map(pair => pair.split(':'))
    );
    rules.push(rewriteText(replacements));
  }
  
  return composeProfiles(...rules);
}
```

**2. `src/components/App.tsx`** - Replace profile lookup with query parsing
```typescript
// Before
const currentData = getProfile(profileName).apply(resumeData);

// After
const params = new URLSearchParams(window.location.search);
const profileTransform = parseProfileQuery(params);
const currentData = profileTransform(resumeData);
```

**3. `typst/scripts/build-pdf.js`** - Add CLI flag parsing
```javascript
// Parse --tagBoost, --limitTotal, etc. from process.argv
// Build equivalent query string, reuse parseProfileQuery logic
```

**4. Keep `registry.ts`** - Named profiles remain for common presets (`compact`, `iso-erp`)

---

### Usage Examples

**ML/AI role at startup**:
```
?tagBoost=ml,agents,transformers&limitTotal=10&drop=exp:umd-crowd
```

**Backend SWE at enterprise**:
```
?base=compact&tagBoost=backend,api,ci,docker&rewrite=ERP:enterprise resource planning
```

**Quick PDF for specific job**:
```bash
npm run typst:pdf -- --theme light --tagBoost=ml,rl --keep=exp:jhu-apl,exp:tilli --limitTotal=8
```

---

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/profiles/queryParser.ts` | Create - URL/CLI param parsing |
| `src/profiles/rules.ts` | Add `excludeIds()` |
| `src/components/App.tsx` | Use `parseProfileQuery` instead of named lookup |
| `typst/scripts/build-pdf.js` | Add CLI flag parsing, pass to data generator |
| `typst/scripts/convert-ts-data-to-typst.js` | Accept profile query as input |

---

### Why This is Clean

1. **Zero config files per job** - URL/command is the config
2. **Idempotent** - Same params = same output, always
3. **Composable** - Add/remove params freely
4. **Human readable** - No base64/JSON encoding in URLs
5. **Bookmarkable** - Save the URL, share it, revisit it
6. **DRY** - Same parsing logic for React + Typst CLI