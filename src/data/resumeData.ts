import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
    metadata: {
        version: "full",
        lastUpdated: "2025-11-29"
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
            institution: "University of Maryland - College Park",
            degrees: [
                "Dual BS in Computer Science (Machine Learning) and Mathematics"
            ],
            graduation: "December 2025",
            gpa: "3.384",
            honors: ["University, Departmental Honors; Dean's List"],
            coursework: [
                {
                    category: "AI/ML",
                    courses: [
                        "Graduate NLP; HRI/Embodied AI; Computer Vision",
                        "Intro to: Multimodal DL, AI, ML, Data Science"
                    ]
                },
                {
                    category: "Math",
                    courses: [
                        "Calc III; Advanced Linear Algebra; Differential Equations",
                        "Advanced Calculus; Abstract Algebra",
                        "Mathematical Finance: Derivatives & Stochastic Models",
                        "Transform Methods; Numerical Analysis"
                    ]
                },
                {
                    category: "CS",
                    courses: [
                        "Quantum Computing; Algorithms; Data Structures",
                        "Computer Systems; Object-Oriented Programming",
                        "Language Design"
                    ]
                },
                {
                    category: "Stat",
                    courses: ["Applied Prob&Stat; Probability Theory"]
                }
            ]
        }
    ],

    experience: [
        {
            company: "Tilli Software",
            role: "AI Engineering MTS",
            department: "Applied Research:Project ISO",
            location: "Hybrid",
            duration: "July 2025 - Present",
            achievements: [
                {
                    action: "Engineered",
                    description: "the Tilli Agent MVP (Kosong + DSPy + lastmileai/mcp-agent) to act autonomously on behalf of users, on any crawled site",
                    metrics: "at < $0.01/task"
                },
                {
                    action: "Developed",
                    description: "site2mcp and leading the effort to extract structured data from arbitrary sites and generated template-derived MCP servers (Kosong + browser-use + Claude Agent SDK)",
                    metrics: ""
                },
                {
                    action: "Architected",
                    description: "a shared, multi-tenant MCP Super-Server as a centralized auth and tool/resource store across usecases; instrumented automated performance logging for post-hoc analysis and GEPA-optimization pipelines,",
                    metrics: "increased cache-hit rate; reduced p50 latency and token cost"
                },
                {
                    action: "Leading",
                    description: "Tilli Agent (tilli.ai) launch for an",
                    metrics: "initial 150k+ users; planned rollout to ~3M"
                }
            ]
        },
        {
            company: "University of Maryland CMNS",
            role: "Student Researcher",
            department: "Crowd Simulation",
            location: "College Park, MD",
            duration: "September 2024 - June 2025",
            achievements: [
                {
                    action: "Investigated",
                    description: "non-Euclidean formulations for crowd navigation and interaction (Hilbert-ball/hyperbolic distance models; curvature-aware interaction costs)",
                    metrics: ""
                },
                {
                    action: "Applied",
                    description: "transformer-based models to language-directed crowd navigation, mapping natural-language instructions to motion goals and primitives",
                    metrics: ""
                }
            ]
        },
        {
            company: "Johns Hopkins University Applied Physics Laboratory",
            role: "Computer Science Intern - Interim Security Clearance",
            department: "Force Projection Sector: Ocean Systems & Engineering Group",
            location: "Laurel, MD",
            duration: "May 2024 - Aug 2024",
            achievements: [
                {
                    action: "Developed",
                    description: "an optimized GAIfO variant leveraging architectural insights that",
                    metrics: "improved long-horizon performance versus prior iterations that already outperformed baselines imitation models"
                },
                {
                    action: "Extended",
                    description: "GTRI's SCRIMMAGE mass-simulation framework with",
                    metrics: "higher scenario complexity and expert controller functionality"
                },
                {
                    action: "Revamped",
                    description: "GitLab CI pipelines to remediate vulnerabilities and achieved a",
                    metrics: "≈25% speedup and efficiency gains; ≈50% faster builds; ≈40% lower memory footprint for project-wide Docker base image"
                },
                {
                    action: "Led",
                    description: "the winning team for the sector Intern Challenge, delivering a secure, non-GPS intra-campus navigation prototype",
                    metrics: ""
                },
                {
                    action: "Authored",
                    description: "literature reviews on state-of-the-art Transformer models to inform future project strategies",
                    metrics: ""
                }
            ]
        },
        {
            company: "University of Maryland MIND Lab",
            role: "Research Intern",
            department: "Breathing Analysis Project",
            location: "College Park, MD",
            duration: "October 2023 - December 2024",
            achievements: [
                {
                    action: "Optimized",
                    description: "dataset loading with Dask and multithreading",
                    metrics: "≈400%+ higher throughput, with real-time dataset visualization capabilities for large-scale analysis and feature extraction"
                },
                {
                    action: "Implemented",
                    description: "supervised learning approaches for improved breath segmentation",
                    metrics: ""
                }
            ]
        },
        {
            company: "University of Maryland CMNS",
            role: "Lead Teaching Assistant",
            department: "CMSC351H (Algorithms Honors)",
            location: "College Park, MD",
            duration: "Spring 2024",
            achievements: [
                {
                    action: "Co-designed and graded",
                    description: "homeworks, exams, and lecture material for 38 honors students; held weekly office hours for advanced topic support",
                    metrics: ""
                }
            ]
        }
    ],

    projects: [
        {
            name: "OpenSkills",
            role: "Solo Developer",
            isActive: true,
            description: [
                "Open-source, agent-framework-agnostic implementation of Anthropic's Skills protocol that achieves full parity with their closed-source, first-party-only version"
            ],
            achievements: [
                {
                    type: "metric",
                    description: "Matches and exceeds baseline skill activation by agents without manual prompting, by replacing the Anthropic `Skill` mcp-style tool approach with a clean CLI tool + AGENTS.md specification"
                }
            ]
        },
        {
            name: "context-mcp",
            role: "Solo Developer",
            isActive: true,
            description: [
                "Open-source context-gathering tools (ask-docs-agent, fetch-docs, fetch-site) for agents that minimize token burn and latency while maximizing relevant information retrieval"
            ],
            achievements: [
                {
                    type: "metric",
                    description: "fetch-docs tool outperforms Context7's MCP by wrapping their API to be more agent-friendly, reducing round-trip invocation to a single call"
                },
                {
                    type: "metric",
                    description: "fetch-site tool achieves 25-50% lower token usage than most agent CLIs default `WebFetch` tools by auto-saving extracted content locally so agents can read what they need vs forcing full reads + re-fetches"
                }
            ]
        },
        {
            name: "climb-cli",
            role: "Solo Developer",
            isActive: true,
            description: [
                "Open-source tool that auto-generates user-friendly TUI interfaces for almost any command-line program by extracting arg info and man pages",
                "Non-interactive mode for LLM agents enables easy learning of complex call-graphs and arg-structures for CLI tools, without guesswork or web searches"
            ],
            achievements: [
                {
                    type: "metric",
                    description: "Eliminates manual lookup of complex CLI arguments, reducing agent/human errors and improving usability"
                }
            ]
        },
        // {
        //     name: "systemzero/rewind",
        //     role: "Solo Developer",
        //     isActive: true,
        //     description: [
        //         "Open-source, agent-framework-agnostic implementation of Anthropic's Checkpointing + /rewind protocol that achieves full parity with their closed-source, first-party-only version"
        //     ],
        //     achievements: [
                
        //     ]
        // },
        {
            name: "CoronaSafe",
            role: "Team Lead/Backend Developer",
            isActive: false,
            description: [
                "Python/Flutter app for global COVID-19 risk assessment using time-weighted foot traffic and urban density analytics"
            ],
            achievements: [
                {
                    type: "award",
                    description: "Congressional App Challenge Winner: 2021 District MD08"
                },
                {
                    type: "recognition",
                    description: "Guest Speaker at USPTO's 2022 APPLY Yourself event"
                }
            ]
        },
        {
            name: "Resourceful",
            role: "Team Lead/Backend Developer",
            isActive: false,
            description: [
                "NLP-driven matching tool connecting underrepresented students to resources (NLTK, spaCy, semantic similarity)"
            ],
            achievements: [
                {
                    type: "award",
                    description: "Best Education @ 2022 Blairhacks_5 Hackathon"
                }
            ]
        }
    ],

    skills: [
        {
            category: "Agent Infrastructure",
            primary: [
                "MCP",
                "Kosong",
                "LMCache",
                "DSPy/GEPA",
                "Claude Code SDK",
                "Google Agent ADK/A2A",
                "Pocketflow",
                "LiteLLM",
                "Context Engineering"
            ]
        },
        {
            category: "ML/AI",
            primary: [
                "Transformers",
                "Agentic LLMs",
                "RAG",
                "Deep RL",
                "Mechanistic Interpretability",
                "GAIfO",
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
                "React"
            ],
            secondary: [
                "Java",
                "MATLAB",
                "ROS",
                "Qiskit"
            ]
        },
        {
            category: "Cloud & Data",
            primary: [
                "AWS (Bedrock, SageMaker, Lambda, Fargate)",
                "PostgreSQL/NeonDB",
                "Neo4j",
                "Dask",
                "Selenium/BeautifulSoup"
            ]
        },
        {
            category: "Quantitative Finance",
            primary: [
                "Stochastic Calculus",
                "Black-Scholes",
                "Delta Hedging"
            ]
        },
        {
            category: "Recognitions",
            primary: [
                "Interim Security Clearance",
                "Congressional App Winner",
                "Eagle Scout",
                "National Merit Scholar",
                "Dean's Scholarship"
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