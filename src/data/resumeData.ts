import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
    metadata: {
        lastUpdated: "2026-01-12"
    },

    personalInfo: {
        name: "Ainesh Chatterjee",
        email: "ainesh.chatterjee@gmail.com",
        phone: "(301) 820-8957",
        location: "Rockville, MD",
        links: [
            {
                type: "site",
                url: "https://ain3sh.com/"
            },
            {
                type: "github",
                url: "https://github.com/ain3sh/"
            },
            {
                type: "linkedin",
                url: "https://www.linkedin.com/in/ain3sh/"
            }
        ]
    },

    education: [
        {
            id: "edu:umd",
            institution: "University of Maryland - College Park",
            degrees: [
                "Dual BS in Computer Science (Machine Learning) and Mathematics"
            ],
            graduation: "December 2025",
            honors: ["University, Departmental Honors; Dean's List"],
            coursework: []
        }
    ],

    experience: [
        {
            id: "exp:tilli",
            company: "Tilli Software",
            role: "AI Engineering MTS",
            department: "Applied Research:Project ISO",
            location: "Hybrid",
            duration: "July 2025 - Present (Full-time since Jan 2026)",
            achievements: [
                {
                    id: "ach:tilli:agent-mvp",
                    tags: ["agents", "mcp", "dspy", "cost"],
                    action: "Engineered",
                    description: "the Tilli Agent MVP (Kosong + DSPy + lastmileai/mcp-agent) to act autonomously on behalf of users, on any crawled site",
                    metrics: "at < $0.01/task"
                },
                {
                    id: "ach:tilli:site2mcp",
                    tags: ["mcp", "web", "automation", "extraction"],
                    action: "Developed",
                    description: "site2mcp and leading the effort to extract structured data from arbitrary sites and generated template-derived MCP servers (Kosong + browser-use + Claude Agent SDK)",
                    metrics: ""
                },
                {
                    id: "ach:tilli:super-server",
                    tags: ["architecture", "auth", "caching", "observability"],
                    action: "Architected",
                    description: "a shared, multi-tenant MCP Super-Server as a centralized auth and tool/resource store across usecases; instrumented automated performance logging for post-hoc analysis and GEPA-optimization pipelines,",
                    metrics: "increased cache-hit rate; reduced p50 latency and token cost"
                },
                {
                    id: "ach:tilli:bridge",
                    tags: ["shipping", "enterprise", "erp"],
                    action: "Driving",
                    description: "Project ISO into closed beta and shipping Bridge, an enterprise ERP-automation offering",
                    metrics: "~100k users; rolling out for Oracle, SAP, QuickBooks, FreshBooks"
                }
            ]
        },
        {
            id: "exp:umd-crowd",
            company: "University of Maryland CMNS",
            role: "Student Researcher",
            department: "Crowd Simulation",
            location: "College Park, MD",
            duration: "September 2024 - June 2025",
            achievements: [
                {
                    id: "ach:umd-crowd:non-euclidean",
                    tags: ["research", "simulation", "geometry"],
                    action: "Investigated",
                    description: "non-Euclidean crowd navigation + interaction (Hilbert-ball/hyperbolic distances; curvature-aware costs)",
                    metrics: ""
                },
                {
                    id: "ach:umd-crowd:transformers",
                    tags: ["transformers", "navigation", "nlp"],
                    action: "Applied",
                    description: "transformer models for language-directed crowd navigation: map natural-language instructions to motion goals and primitives",
                    metrics: ""
                }
            ]
        },
        {
            id: "exp:jhu-apl",
            company: "Johns Hopkins University Applied Physics Laboratory",
            role: "Computer Science Intern - Interim Security Clearance",
            department: "Force Projection Sector: Ocean Systems & Engineering Group",
            location: "Laurel, MD",
            duration: "May 2024 - Aug 2024",
            achievements: [
                {
                    id: "ach:jhu-apl:gaifo",
                    tags: ["ml", "rl", "optimization"],
                    action: "Developed",
                    description: "an optimized GAIfO variant leveraging architectural insights",
                    metrics: "improved long-horizon performance versus prior iterations already outperforming baseline imitation models"
                },
                {
                    id: "ach:jhu-apl:scrimmage",
                    tags: ["simulation", "controllers"],
                    action: "Extended",
                    description: "GTRI's SCRIMMAGE mass-simulation framework with",
                    metrics: "higher scenario complexity and expert controller functionality"
                },
                {
                    id: "ach:jhu-apl:ci",
                    tags: ["ci", "docker", "security", "performance"],
                    action: "Revamped",
                    description: "GitLab CI + Docker pipelines: remediated vulnerabilities and improved build efficiency",
                    metrics: "≈25% faster CI; ≈50% faster builds; ≈40% lower memory footprint (project-wide Docker base image)"
                },
                {
                    id: "ach:jhu-apl:intern-challenge",
                    tags: ["leadership", "security", "navigation"],
                    action: "Led",
                    description: "the winning team for the sector Intern Challenge, delivering a secure, non-GPS intra-campus navigation prototype",
                    metrics: ""
                },
                {
                    id: "ach:jhu-apl:memos",
                    tags: ["transformers", "research", "writing"],
                    action: "Synthesized",
                    description: "state-of-the-art Transformer literature into internal design memos guiding downstream model selection and project roadmap",
                    metrics: ""
                }
            ]
        },
        {
            id: "exp:umd-mind",
            company: "University of Maryland MIND Lab",
            role: "Research Intern",
            department: "Breathing Analysis Project",
            location: "College Park, MD",
            duration: "October 2023 - December 2024",
            achievements: [
                {
                    id: "ach:umd-mind:dask",
                    tags: ["data", "dask", "performance"],
                    action: "Optimized",
                    description: "dataset ingestion + loading with Dask and multithreading for longitudinal breathing datasets",
                    metrics: "≈400%+ higher throughput on high-tens-of-GB/patient-day data; enabled real-time visualization for analysis and feature extraction"
                },
                {
                    id: "ach:umd-mind:segmentation",
                    tags: ["ml", "timeseries"],
                    action: "Evaluated",
                    description: "breath-segmentation baselines and sequence models (XGBoost, random forests, CRF, LSTM) to improve segmentation consistency",
                    metrics: ""
                }
            ]
        }
    ],

    projects: [
        {
            id: "proj:openskills",
            name: "OpenSkills",
            role: "Solo Developer",
            isActive: true,
            description: [
                "Open-source, agent-framework-agnostic implementation of Anthropic's Skills protocol with full parity vs their first-party version — github.com/ain3sh/openskills"
            ],
            achievements: [
                {
                    type: "metric",
                    id: "ach:openskills:parity",
                    tags: ["open-source", "agents"],
                    description: "Only open-source implementation with full parity; improves skill activation without manual prompting via a CLI + AGENTS.md-driven spec"
                }
            ]
        },
        {
            id: "proj:codecanvas",
            name: "CodeCanvas",
            role: "Solo Developer",
            isActive: true,
            description: [
                "MCP tool for code-editing agents that emits image-based architecture/impact maps + a persistent Evidence Board — github.com/ain3sh/codecanvas"
            ],
            achievements: [
                {
                    type: "metric",
                    id: "ach:codecanvas:backtracking",
                    tags: ["agents", "performance", "observability"],
                    description: "Reduced average agent backtracking from 4.57→2.14 vs text-only baseline across a 7-task Terminal-Bench 2.0 eval subset"
                },
                {
                    type: "metric",
                    id: "ach:codecanvas:impact-evidence",
                    tags: ["mcp", "architecture", "automation"],
                    description: "Built LSP-first + tree-sitter fallback call-graph analysis, returning all agent-facing artifacts as PNG images (architecture, impact slices, task board); added hooks to auto-init on session start and auto-impact after file reads"
                }
            ]
        },
        {
            id: "proj:context-mcp",
            name: "context-mcp",
            role: "Solo Developer",
            isActive: true,
            description: [
                "Context tooling for agents (ask-docs-agent, fetch-docs, fetch-site) optimized for low latency + token efficiency — github.com/ain3sh/context-mcp"
            ],
            achievements: [
                {
                    type: "metric",
                    id: "ach:context-mcp:fetch-docs",
                    tags: ["mcp", "latency"],
                    description: "fetch-docs wraps Context7 into a single agent-friendly call, avoiding multi-round tool trips"
                },
                {
                    type: "metric",
                    id: "ach:context-mcp:caching",
                    tags: ["token-efficiency", "caching"],
                    description: "Cuts token usage by persisting fetched context locally and avoiding full re-fetches"
                }
            ]
        },
        {
            id: "proj:climb-cli",
            name: "climb-cli",
            role: "Solo Developer",
            isActive: true,
            description: [
                "Auto-generates TUIs for CLIs by extracting arg info + manpages; includes a non-interactive mode for LLM agents — github.com/ain3sh/climb-cli"
            ],
            achievements: [
                {
                    type: "metric",
                    id: "ach:climb-cli:tui",
                    tags: ["cli", "agents"],
                    description: "Eliminates manual CLI argument lookup and reduces agent/human errors"
                }
            ]
        },
        {
            id: "proj:coronasafe",
            name: "CoronaSafe",
            role: "Team Lead/Backend Developer",
            isActive: false,
            description: [
                "Python/Flutter app for global COVID-19 risk assessment using time-weighted foot traffic + urban density analytics — github.com/ain3sh/coronasafe"
            ],
            achievements: [
                {
                    type: "award",
                    id: "ach:coronasafe:congressional",
                    tags: ["award", "mobile"],
                    description: "Congressional App Challenge Winner (MD08)"
                }
            ]
        }
    ],

    skills: [
        {
            category: "Agents/LLMs",
            primary: [
                "MCP",
                "Kosong",
                "LMCache",
                "DSPy/GEPA",
                "Claude Code SDK",
                "Google Agent ADK/A2A",
                "LiteLLM",
                "Context Engineering"
            ]
        },
        {
            category: "ML",
            primary: [
                "Transformers",
                "Agentic LLMs",
                "RAG",
                "Mechanistic Interpretability",
                "Deep RL (GAIfO)",
                "PyTorch",
                "HuggingFace"
            ]
        },
        {
            category: "Engineering",
            primary: [
                "Python",
                "C/C++",
                "Rust",
                "Docker",
                "Git/GitLab CI",
                "FastAPI",
                "React",
                "AWS",
                "PostgreSQL/NeonDB"
            ],
            secondary: [
                "Neo4j",
                "Dask",
                "Java"
            ]
        },
        {
            category: "Recognitions",
            primary: [
                "Congressional App Challenge Winner (MD08)",
                "Eagle Scout",
                "National Merit Scholar"
            ]
        }
    ],

    publications: [
        {
            title: "Ipelets for the Convex Polygonal Geometry",
            url: "https://doi.org/10.4230/LIPIcs.SoCG.2024.92",
            venue: "SoCG 2024",
            year: "2024"
        },
        {
            title: "AgreeMate: Teaching LLMs to Haggle",
            url: "https://arxiv.org/abs/2412.18690",
            venue: "arXiv",
            year: "2024"
        }
    ]
};

export default resumeData;