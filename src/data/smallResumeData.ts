import { ResumeData } from '../types/resume';

export const smallResumeData: ResumeData = {
    metadata: {
        version: "condensed",
        lastUpdated: "2025-09-20"
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
            location: "Remote",
            duration: "July 2025 - Present",
            achievements: [
                {
                    action: "Built",
                    description: "end-to-end MVP of Tilli Agent using Pocketflow + Google Agent ADK for utility customer web portals"
                },
                {
                    action: "Designed",
                    description: "Scrape2MCP for structured extraction from arbitrary sites; generated template-derived MCP servers (Claude Code SDK)"
                },
                {
                    action: "Optimized",
                    description: "deployment on AWS Bedrock Agentcore",
                    metrics: "higher token-cache hit rate; reduced p50 latency and token cost"
                },
                {
                    action: "Leading",
                    description: "product launch",
                    metrics: "serving 150k+ users with planned rollout to ~3M"
                }
            ]
        },
        {
            company: "Johns Hopkins University Applied Physics Laboratory",
            role: "Computer Science Intern - Interim Clearance",
            department: "Force Projection Sector: Ocean Systems & Engineering Group",
            location: "Laurel, MD",
            duration: "May 2024 - Aug 2024",
            achievements: [
                { action: "Developed", description: "enhanced GAIfO agents outperforming baselines over long horizons" },
                { action: "Revamped", description: "GitLab CI pipelines", metrics: "≈25% faster and more secure" },
                { action: "Optimized", description: "shared Docker image across repos", metrics: "≈50% faster builds; ≈40% lower memory" },
                { action: "Enhanced", description: "SCRIMMAGE simulation with added complexity and expert controllers" }
            ]
        },
        {
            company: "University of Maryland MIND Lab",
            role: "Data Science/ML Research Intern",
            department: "Breathing Analysis Project",
            location: "College Park, MD",
            duration: "October 2023 - December 2024",
            achievements: [
                { action: "Created", description: "visualization dashboard + data structures for large-scale breath analysis" },
                { action: "Optimized", description: "dataset loading with Dask + multithreading", metrics: "400%+ throughput improvement" },
                { action: "Implemented", description: "supervised methods for improved breath segmentation" }
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
            primary: ["Transformers", "Agentic LLMs", "MCP", "Claude Code SDK", "Context Engineering", "GraphRAG", "PyTorch", "LiteLLM"]
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