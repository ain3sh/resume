# AGENTS.md

Instructions for LLM agents automating resume customization per job application.

---

## Quick Start

Generate a tailored PDF for a job:

```bash
npm run typst:pdf -- --theme light \
  --tagBoost ml,agents,backend \
  --limitTotal 10
```

Or preview in browser:
```
https://ain3sh.com/resume?tagBoost=ml,agents&limitTotal=10
```

---

## Profile Query Parameters

| Param | Type | Description | Example |
|-------|------|-------------|---------|
| `base` | string | Start from named profile (`default`, `compact`) | `base=compact` |
| `keep` | comma-sep IDs | Whitelist experiences/projects by ID | `keep=exp:tilli,proj:openskills` |
| `drop` | comma-sep IDs | Blacklist by ID (experiences, projects, achievements) | `drop=exp:umd-mind,ach:tilli:bridge` |
| `tagBoost` | comma-sep tags | Reorder achievements by tag relevance (first tag = highest priority) | `tagBoost=ml,agents,backend` |
| `tagFilter` | comma-sep tags | Keep only achievements with matching tags | `tagFilter=ml,research` |
| `limitTotal` | number | Max bullets across all experiences | `limitTotal=10` |
| `limitPer` | number | Max bullets per experience | `limitPer=3` |
| `rewrite` | from:to pairs | Text replacements | `rewrite=ERP:enterprise resource planning` |

---

## ID Reference

### Experiences
| ID | Company |
|----|---------|
| `exp:tilli` | Tilli Software |
| `exp:umd-crowd` | UMD Crowd Intelligence Lab |
| `exp:jhu-apl` | Johns Hopkins APL |
| `exp:umd-mind` | UMD MIND Lab |

### Projects
| ID | Project |
|----|---------|
| `proj:openskills` | OpenSkills Contribution |
| `proj:context-mcp` | Context MCP Server |
| `proj:climb-cli` | Climb CLI |
| `proj:coronasafe` | CoronaSafe |

### Achievements (partial - use pattern `ach:<parent>:<slug>`)
- `ach:tilli:agent-mvp` - Agentic MCP + DSPy
- `ach:tilli:site2mcp` - Site-to-MCP extraction
- `ach:tilli:super-server` - Multi-tenant architecture
- `ach:tilli:bridge` - ERP integration
- `ach:jhu-apl:gaifo` - GA-IFO reinforcement learning
- `ach:jhu-apl:scrimmage` - SCRIMMAGE simulation
- `ach:openskills:parity` - Open-source contribution
- `ach:context-mcp:fetch-docs` - MCP server tool

---

## Tag Reference

Use these tags with `tagBoost` or `tagFilter`:

| Category | Tags |
|----------|------|
| AI/ML | `ml`, `rl`, `transformers`, `agents`, `dspy`, `navigation` |
| Infrastructure | `architecture`, `auth`, `caching`, `observability`, `ci`, `docker` |
| Data | `data`, `dask`, `timeseries`, `performance` |
| Web/API | `web`, `mcp`, `api`, `automation`, `extraction` |
| Domain | `research`, `simulation`, `security`, `enterprise`, `erp`, `shipping` |
| Meta | `open-source`, `leadership`, `writing`, `award` |

---

## Workflow for Job Applications

1. **Identify keywords** from job description
2. **Map to tags** using the tag reference above
3. **Build query** with `tagBoost` for relevance ordering
4. **Optionally drop** irrelevant experiences with `drop`
5. **Set limits** with `limitTotal` to fit one page
6. **Generate PDF**:
   ```bash
   npm run typst:pdf -- --theme light \
     --tagBoost <tags> \
     --limitTotal 10 \
     --out pdfs/<company>-resume.pdf
   ```

---

## Example Profiles

### ML/AI Research Role
```bash
npm run typst:pdf -- --theme light \
  --tagBoost ml,rl,transformers,research,agents \
  --drop exp:umd-mind \
  --limitTotal 10
```

### Backend/Infrastructure Role
```bash
npm run typst:pdf -- --theme light \
  --tagBoost architecture,caching,ci,docker,performance \
  --limitTotal 10
```

### Startup / Generalist
```bash
npm run typst:pdf -- --theme light \
  --tagBoost shipping,agents,mcp,web \
  --limitTotal 12
```

---

## Skills Reference

@.agent/SKILLS.md
