import { ResumeData } from '../types/resume';

export const smallResumeData: ResumeData = {
    metadata: {
        version: "condensed",
        lastUpdated: "2025-11-29"
    },

    personalInfo: {
        name: "Ainesh Chatterjee",
        email: "ainesh.chatterjee@gmail.com",
        phone: "(301) 820-8957",
        links: [
            { type: "site: ain3sh.com", url: "https://ain3sh.com/" },
            { type: "github: ain3sh", url: "https://github.com/ain3sh/" },
            { type: "linkedin: ain3sh", url: "https://www.linkedin.com/in/ain3sh/" }
        ]
    },

    education: [
        {
            institution: "University of Maryland",
            degrees: ["Dual BS: Computer Science (ML) + Mathematics"],
            graduation: "Dec 2025",
            gpa: "3.38",
            honors: ["University/CS Honors, Dean's List"],
            coursework: []
        }
    ],

    experience: [
        {
            company: "Tilli Software",
            role: "AI Engineering MTS",
            department: "Applied Research:Project ISO",
            location: "Hybrid",
            duration: "Jul 2025 - Present",
            achievements: [
                {
                    action: "Built",
                    description: "autonomous agents for ANY site (Kosong/DSPy/MCP)",
                    metrics: "<$0.01/task, 150k+ users"
                },
                {
                    action: "Created",
                    description: "site2mcp: structured extraction → MCP servers",
                    metrics: "3M user rollout planned"
                },
                {
                    action: "Architected",
                    description: "multi-tenant MCP super-server + GEPA optimization",
                    metrics: "↓50% latency, ↓40% tokens"
                }
            ]
        },
        {
            company: "Johns Hopkins APL",
            role: "CS Intern - Interim Security Clearance",
            department: "",
            location: "Laurel, MD",
            duration: "May - Aug 2024",
            achievements: [
                {
                    action: "Developed",
                    description: "GAIfO variant outperforming imitation learning baselines",
                    metrics: ""
                },
                {
                    action: "Optimized",
                    description: "CI/Docker pipelines",
                    metrics: "50% faster builds, 40% less memory"
                }
            ]
        }
    ],

    projects: [
        {
            name: "context-mcp",
            role: "Creator",
            isActive: true,
            description: [
                "Agent context tools: 25-50% lower tokens vs standard WebFetch, single-call API vs Context7's multi-round trips"
            ],
            achievements: []
        }
    ],

    skills: [
        {
            category: "Tech",
            primary: ["MCP", "Kosong", "DSPy/GEPA", "LiteLLM", "Claude SDK", "PyTorch", "Python", "C++", "Docker", "AWS", "PostgreSQL"]
        },
        {
            category: "Impact",
            primary: ["2 Publications (SoCG'24, arXiv)", "Interim Clearance", "Congressional App Winner", "Eagle Scout"]
        }
    ],

    publications: [
        { title: "Ipelets for Convex Polygonal Geometry", url: "https://doi.org/10.4230/LIPIcs.SoCG.2024.92", venue: "SoCG", year: "2024" },
        { title: "AgreeMate: Teaching LLMs to Haggle", url: "https://arxiv.org/abs/2412.18690", venue: "arXiv", year: "2024" }
    ]
};

export default smallResumeData;