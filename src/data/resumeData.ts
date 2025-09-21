import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
    metadata: {
        version: "full",
        lastUpdated: "2025-09-20"
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
                type: "linkedin",
                url: "https://www.linkedin.com/in/ain3sh/"
            },
            {
                type: "github",
                url: "https://github.com/ain3sh/"
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
            honors: ["University, CS Departmental Honors; BS/MS; Dean's List"],
            coursework: [
                {
                    category: "AI/ML",
                    courses: [
                        "Graduate NLP; HRI/Embodied AI; Computer Vision;",
                        "Intro to: Multimodal DL, AI, ML, Data Science"
                    ]
                },
                {
                    category: "Math",
                    courses: [
                        "Calc III; Advanced Linear Algebra; Differential Equations;",
                        "Advanced Calculus; Abstract Algebra;",
                        "Mathematical Finance: Derivatives & Stochastic Models;",
                        "Transform Methods; Numerical Analysis"
                    ]
                },
                {
                    category: "CS",
                    courses: [
                        "Quantum Computing; Algorithms; Data Structures",
                        "Computer Systems; Object-Oriented Programming",
                        "Organization of Languages"
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
            role: "AI Engineering Intern",
            department: "Edge:XDEX:Agent",
            location: "Remote",
            duration: "July 2025 - Present",
            achievements: [
                {
                    action: "Built",
                    description: "an end-to-end MVP of Tilli Agent using Pocketflow and the Google Agent ADK to act in utility customer web portals",
                    metrics: ""
                },
                {
                    action: "Designed",
                    description: "the Scrape2MCP paradigm to scrape arbitrary sites and extract structured info for API/browser actions, generating template-derived MCP servers with the Claude Code SDK",
                    metrics: ""
                },
                {
                    action: "Architected",
                    description: "the Tilli MCP Super-Server as a shared tool 'store' for user agents",
                    metrics: ""
                },
                {
                    action: "Optimized",
                    description: "agent deployment stack on AWS Bedrock Agentcore,",
                    metrics: "increasing cache-hit rate; lowering p50 latency and token cost"
                },
                {
                    action: "Devised",
                    description: "automated agent performance logging for asynchronous analysis",
                    metrics: ""
                },
                {
                    action: "Leading",
                    description: "launch of Tilli Agent",
                    metrics: "initially serving 150k+ users; planned rollout to ~3M across Tilli Software’s client base"
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
                    action: "Implemented",
                    description: "iteratively enhanced Generative Adversarial Imitation from Observation (GAIfO) agents, substantially outperforming baseline imitation models",
                    metrics: ""
                },
                {
                    action: "Developed",
                    description: "an optimized GAIfO variant leveraging architectural insights that outperformed prior versions over long horizons",
                    metrics: ""
                },
                {
                    action: "Enhanced",
                    description: "GTRI's SCRIMMAGE mass-simulation framework with increased scenario complexity and expert controller functionality",
                    metrics: ""
                },
                {
                    action: "Revamped",
                    description: "GitLab CI pipelines, boosting speed and efficiency",
                    metrics: "25% while addressing security vulnerabilities"
                },
                {
                    action: "Optimized",
                    description: "project-wide Docker image used across repositories, reducing pipeline build times and memory footprint",
                    metrics: "50% faster builds; 40% better memory efficiency"
                },
                {
                    action: "Led",
                    description: "winning team for sector Intern Challenge delivering a secure, non-GPS intra-campus navigation prototype",
                    metrics: ""
                },
                {action: "Authored",
                description: "literature reviews on SoTA Transformer-based models, unlocking",
                metrics: "direct insights for future project strategies"},
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
                    action: "Developed",
                    description: "a visualization dashboard and dataset structures for large-scale breath-data analysis and downstream feature extraction",
                    metrics: ""
                },
                {
                    action: "Optimized",
                    description: "dataset loading with Dask and multithreading",
                    metrics: "400%+ faster throughput"
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
            role: "Student Researcher",
            department: "Crowd Simulation",
            location: "College Park, MD",
            duration: "September 2024 - June 2025",
            achievements: [
                {
                    action: "Explored",
                    description: "applications of non-Euclidean geometries to crowd navigation and interaction",
                    metrics: ""
                },
                {
                    action: "Applied",
                    description: "transformer-based models to language-directed crowd navigation",
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
            name: "Vizier",
            role: "Team Lead/ML Developer",
            isActive: false,
            description: [
                "AI-powered personalized newsletter platform; MVP built for Bitcamp 2025",
                "Test-time MoE agentic architecture improving context retrieval via document-expert LLMs"
            ],
            achievements: []
        },
        {
            name: "QSafe",
            role: "Solo Developer",
            isActive: false,
            description: [
                "Open-source Python/Rust quantum-safe password manager using lattice-based cryptography",
                "Secure Docker manager and end-to-end encrypted CLI–container protocol; MVP for Bitcamp 2023"
            ],
            achievements: []
        },
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
                    description: "Guest Speaker at 2022 US Patent and Trademark Office APPLY Yourself event"
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
                    description: "Best Education Award: 2022 Blairhacks_5 Hackathon"
                }
            ]
        }
    ],

    skills: [
        {
            category: "Programming",
            primary: [
                "Python",
                "C/C++",
                "Fullstack Development",
                "APIs",
                "DevOps",
                "Webhosting",
                "Design Paradigms"
            ],
            secondary: [
                "Java",
                "Rust",
                "Lua",
                "MATLAB",
                "Flutter/Dart",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Assembly"
            ]
        },
        {
            category: "ML/AI",
            primary: [
                "Transformers",
                "Agentic LLMs",
                "MCP",
                "Context Engineering",
                "DSPy",
                "GEPA",
                "GraphRAG",
                "Deep RL",
                "Supervised/Unsupervised Learning",
                "Genetic Algorithms",
                "GANs"
            ]
        },
        {
            category: "Data Science",
            primary: [
                "Statistical Analysis",
                "Data Processing"
            ]
        },
        {
            category: "Finance",
            primary: [
                "Brownian Motion",
                "Black-Scholes",
                "Arbitrage Pricing",
                "Stochastic Calculus",
                "Delta Hedging"
            ]
        },
        {
            category: "Tools & Technologies",
            primary: [
                "Git",
                "GitHub/Lab",
                "Docker",
                "Linux",
                "Bash",
                "WSL2",
                "Python",
                "FastAPI",
                "React",
                "Flask",
                "RESTful",
                "PostgreSQL",
                "NeonDB",
                "Neo4j",
                "LiteLLM",
                "Claude Code SDK",
                "MCP",
                "Google Agent ADK",
                "Google Agent2Agent (A2A)",
                "Pocketflow",
                "OpenAI API",
                "HuggingFace",
                "PyTorch",
                "NumPy",
                "Pandas",
                "Dask",
                "NLTK",
                "SciPy",
                "spaCy",
                "scikit-learn",
                "Seaborn",
                "Matplotlib",
                "TensorBoard",
                "Selenium",
                "BeautifulSoup",
                "LaTeX",
                "PowerShell",
                "Memory Profiler",
                "ROS",
                "IBM Qiskit",
                "AWS EC2",
                "AWS Fargate",
                "AWS Lambda",
                "AWS S3",
                "AWS Bedrock",
                "AWS SageMaker"
            ]
        },
        {
            category: "Soft Skills",
            primary: [
                "First-Principles Problem Solving",
                "Leadership",
                "Technical Writing",
                "Self-teaching",
                "Iterative Experimentation"
            ]
        },
        {
            category: "Certifications",
            primary: [
                "Complete Linear Algebra - Udemy",
                "Algorithmic Toolbox - UCSD",
                "Game Theory - Stanford"
            ]
        },
        {
            category: "Awards",
            primary: [
                "National Merit",
                "Dean's Scholarship",
                "Eagle Scout",
                "Congressional App Challenge Winner",
                "ISKF Black Belt"
            ]
        },
        {
            category: "Languages",
            primary: [
                "English (Native)",
                "Bengali (Native)",
                "Hindi (Intermediate)",
                "Spanish (Intermediate)",
                "French (Beginner)"
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