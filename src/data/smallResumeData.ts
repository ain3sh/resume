import { ResumeData } from '../types/resume';

export const smallResumeData: ResumeData = {
    metadata: {
        version: "condensed",
        lastUpdated: "2025-09-28"
    },

    personalInfo: {
        name: "Ainesh Chatterjee",
        email: "ainesh.chatterjee@gmail.com",
        phone: "(301) 820-8957",
        links: [
            { type: "site: ain3sh.com", url: "https://ain3sh.com/" },
            { type: "linkedin: ain3sh", url: "https://www.linkedin.com/in/ain3sh/" },
            { type: "github: ain3sh", url: "https://github.com/ain3sh/" }
        ]
    },

    education: [
        {
            institution: "University of Maryland (College Park)",
            degrees: ["Dual BS in Computer Science (Machine Learning) and Mathematics"],
            graduation: "December 2025",
            gpa: "3.384",
            honors: ["University + CS Honors, Dean's List"],
            coursework: [
                {
                    category: "AI/ML",
                    courses: ["Graduate NLP; Computer Vision; HRI/Embodied AI; Intro to: Multimodal DL, AI, ML, Data Science"]
                },
                {
                    category: "Math",
                    courses: ["Calculus III; Advanced Linear Algebra; Differential Equations; Abstract Algebra; Transform Methods; Numerical Analysis; Financial Models"]
                },
                {
                    category: "CS",
                    courses: ["Algorithms; Data Structures; Computer Systems; OOP; Programming Languages; Quantum Computing"]
                },
                { category: "Stat", courses: ["Applied Prob&Stat; Probability Theory"] }
            ]
        }
    ],

    experience: [
        {
            company: "Tilli Software",
            role: "AI Engineering Intern",
            department: "Edge:XDEX:Agent",
            location: "Hybrid",
            duration: "July 2025 - Present",
            achievements: [
                {
                action: "Engineered",
                description: "end-to-end Tilli Agent MVP (Pocketflow, Google Agent ADK) for utility customer web portals"
                },
                {
                action: "Developed",
                description: "Scrape2MCP for site → structured API/browser actions; generated template-derived MCP servers (Claude Code SDK)"
                },
                {
                action: "Architected",
                description: "shared, multi-tenant MCP Super-Server (tool store) and Bedrock Agentcore deployment; instrumented automated performance logging",
                metrics: "↑ cache-hit; ↓ p50 latency & token cost"
                },
                {
                action: "Launched",
                description: "Tilli Agent",
                metrics: "served 150k+ initially; rollout planned to ~3M"
                }
            ]
        },
        {
            company: "Johns Hopkins University Applied Physics Laboratory",
            role: "Computer Science Intern — Interim Clearance",
            department: "Force Projection Sector: Ocean Systems & Engineering Group",
            location: "Laurel, MD",
            duration: "May 2024 - Aug 2024",
            achievements: [
                {
                action: "Developed",
                description: "enhanced GAIfO agents and an optimized variant outperforming baselines over long horizons"
                },
                {
                action: "Enhanced",
                description: "SCRIMMAGE mass-simulation with higher scenario complexity and expert controllers"
                },
                {
                action: "Revamped",
                description: "GitLab CI pipelines",
                metrics: "≈25% faster with vulnerability remediation"
                },
                {
                action: "Optimized",
                description: "shared Docker base image across repos",
                metrics: "≈50% faster builds; ≈40% lower memory"
                }
            ]
        },
        {
            company: "University of Maryland MIND Lab",
            role: "Data Science/ML Research Intern",
            department: "Breathing Analysis Project",
            location: "College Park, MD",
            duration: "October 2023 - December 2024",
            achievements: [
                {
                action: "Created",
                description: "visualization dashboard and dataset structures for large-scale breath-data analysis"
                },
                {
                action: "Optimized",
                description: "dataset loading with Dask + multithreading",
                metrics: "≈400%+ throughput improvement"
                },
                {
                action: "Implemented",
                description: "supervised methods for improved breath segmentation"
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
                "AI newsletter MVP (Bitcamp 2025) using test-time MoE + document-expert LLMs for improved retrieval"
            ],
            achievements: []
        },
        {
            name: "CoronaSafe",
            role: "Team Lead/Developer",
            isActive: false,
            description: [
                "Python/Flutter risk assessment using time-weighted foot-traffic + density analytics",
                "Congressional App Challenge Winner (2021 MD-08); Guest Speaker, USPTO APPLY Yourself (2022)"
            ],
            achievements: []
        }
    ],

    skills: [
        {
            category: "Languages & Platforms",
            primary: ["Python", "C/C++", "Java", "Linux", "Docker", "Git", "CI/CD", "FastAPI", "React", "Flask", "PostgreSQL"]
        },
        {
            category: "AI/Agents",
            primary: ["Transformers", "Agentic LLMs", "DSPy:GEPA", "MCP", "Claude Code SDK", "Context Engineering", "Mechanistic Interpretability", "RAG", "PyTorch"]
        },
        {
            category: "Cloud & Data",
            primary: ["AWS (EC2, Fargate, Lambda, S3, Bedrock, SageMaker)", "Neo4j", "Pandas", "NumPy", "Dask", "Selenium", "BeautifulSoup"]
        },
        {
            category: "Awards",
            primary: ["Congressional App Challenge Winner", "Dean's Scholarship", "Eagle Scout"]
        }
    ],

    publications: [
        { title: "Ipelets for the Convex Polygonal Geometry", url: "https://doi.org/10.4230/LIPIcs.SoCG.2024.92", venue: "SoCG 2024", year: "2024" },
        { title: "AgreeMate: Teaching LLMs to Haggle", url: "https://arxiv.org/abs/2412.18690", venue: "arXiv", year: "2024" }
    ]
};

export default smallResumeData;