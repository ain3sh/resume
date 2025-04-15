import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
    metadata: {
        version: "full",
        lastUpdated: "2025-01-23"
    },

    personalInfo: {
        name: "Ainesh Chatterjee",
        email: "ainesh.chatterjee@gmail.com",
        phone: "(301) 820-8957",
        location: "Rockville, MD",
        links: [
            {
                type: "site",
                url: "https://ain3sh.com/",
            },
            {
                type: "linkedin",
                url: "https://www.linkedin.com/in/ain3sh/",
            },
            {
                type: "github",
                url: "https://github.com/ain3sh/",
            }
        ]
    },

    education: [
        {
            institution: "University of Maryland - College Park",
            degrees: [
                "Dual BS in Computer Science (Machine Learning & Quantum Information) and Mathematics"
            ],
            graduation: "December 2025",
            gpa: "3.5",
            honors: ["University, CS Departmental Honors; BS/MS; Dean's List"],
            coursework: [
                    {
                    category: "AI/ML",
                    courses: ["Intro to: AI, ML, Data Science; Graduate NLP"]
                    },
                    {
                    category: "Math",
                    courses: ["Calc III; Advanced Linear Algebra; Differential Equations",
                            "Advanced Calculus; Abstract Algebra",
                            "Mathematical Finance: Derivatives & Stochastic Models",
                            "Transform Methods"]
                    },
                    {
                    category: "CS",
                    courses: ["Quantum Computing; Algorithms; Data Structures",
                            "Computer Systems; Object-Oriented Programming",
                            "Organization of Languages"]
                    },
                    {
                    category: "Stat",
                    courses: ["Applied Prob&Stat; Probability Theory"]
                    }
                ]
        },
    ],

    experience: [
        {
            company: "Johns Hopkins University Applied Physics Laboratory",
            role: "Computer Science Intern - Interim Security Clearance",
            department: "Force Projection Sector: Ocean Systems & Engineering Group",
            location: "Laurel, MD",
            duration: "May 2024 - Aug 2024",
            achievements: [
                {
                action: "Implemented",
                description: "iteratively enhanced Generative Adversarial Imitation from Observation (GAIfO) agents",
                metrics: "substantially outperforming baseline imitation models"
                },
                {
                action: "Authored",
                description: "critical literature reviews on GAIfO and Generative AI, providing",
                metrics: "direct insights for future project strategies"
                },
                {
                action: "Developed",
                description: "an optimized GAIfO variant, using core-architectural insights from a literature review, which outperformed all prior versions over long timeframes"
                },
                {
                action: "Enhanced",
                description: "GTRI's SCRIMMAGE mass-simulation framework with increased complexity and expert controller functionality"
                },
                {
                action: "Revamped",
                description: "GitLab Continuous Integration pipelines, boosting speed and efficiency by",
                metrics: "25% while addressing security vulnerabilities"
                },
                {
                action: "Optimized",
                description: "project-wide Docker Image, used across all repositories, reducing pipeline build times by",
                metrics: "50% and increasing memory efficiency by 40%"
                },
                {
                action: "Led",
                description: "winning team for sector Intern Challenge in developing a secure, non-GPS intra-campus navigation prototype"
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
                action: "Developed",
                description: "an advanced visualization dashboard for efficient analysis of mass breath data"
                },
                {
                action: "Designed",
                description: "dataset structures for visualization and feature extraction in future work"
                },
                {
                action: "Optimized",
                description: "massive dataset-loading using Dask and multithreading by over",
                metrics: "400%"
                },
                {
                action: "Implemented",
                description: "and evaluated supervised learning techniques for improved breath segmentation"
                }
            ]
        },
        {
            company: "University of Maryland CMNS",
            role: "Student Researcher",
            department: "Crowd Simulation",
            location: "College Park, MD",
            duration: "September 2024 - Present",
            achievements: [
                    {
                    action: "Exploring",
                    description: "application of non-Euclidean geometries"
                    },
                    {
                    action: "Applying",
                    description: "Transformers to crowd navigation, with focus on natural language goal-direction"
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
                description: "homeworks, exams, and lecture material for 38 honours students"
                },
                {
                action: "Conducted",
                description: "weekly office hours, providing personalized guidance on advanced topics"
                }
            ]
        }
    ],

    projects: [
        {
            name: "Vizier",
            role: "Team Lead/ML Developer",
            isActive: true,
            description: [
                "AI-powered platform for personalized newsletters",
                "(Full Pipeline: Content Aggregation → Monetization)",
                "Test-Time MoE agentic architecture for improved context retrieval via specialized document-expert LLM models"
            ],
            achievements: []
        },
        {
            name: "QSafe",
            role: "Solo Developer",
            isActive: true,
            description: [
                "Open-Source Python/Rust Quantum-Safe password manager with lattice-based cryptography",
                "Secure Docker container core manager",
                "End-to-end encrypted CLI-container comm protocol"
            ],
            achievements: []
        },
        {
            name: "CoronaSafe",
            role: "Team Lead/Backend Developer",
            isActive: false,
            description: [
                "Python/Flutter app for global COVID-19 risk assessment",
                "Analyzed real-time foot traffic and urban density using a time-weighted algorithm for predictive accuracy"
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
                "Python/Flutter app that connected underrepresented students to resources using NLP-driven searches",
                "Implemented advanced NLP techniques (e.g. NLTK, Spacy, and Cosine/Wu-Palmer similarities)"
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
            primary: ["Python", "C/C++", "DevOps", "Webhosting", "Fullstack Development", "API-creation", "Design Paradigms"],
            secondary: ["Java", "Rust", "Lua", "MATLAB", "Flutter/Dart", "HTML5", "CSS3", "JavaScript", "Assembly"]
        },
        {
            category: "ML/AI",
            primary: ["Un/Supervised Learning", "Deep RL", "GANs"]
        },
        {
            category: "Data Science",
            primary: ["Statistical Analysis", "Data Processing"]
        },
        {
            category: "Finance",
            primary: ["Brownian Motion", "Black-Scholes", "Arbitrage Pricing", "Stochastic Calculus", "Delta Hedging"]
        },
        {
            category: "Tools & Technologies",
            primary: [
                "Git", "GitHub/Lab", "Docker", "SQL", "Linux", "Bash", "WSL2",
                "PyTorch", "NumPy", "Pandas", "NLTK", "Dask", "Scipy", "Plotly",
                "Matplotlib", "Spacy", "Scikit-learn", "Seaborn", "TensorBoard",
                "AWS SageMaker", "BeautifulSoup", "React", "Flask", "RESTful",
                "ROS", "PostgreSQL", "Firebase", "NeonDB", "IBM Qiskit",
                "Postman", "Selenium", "LaTeX", "Powershell", "Memory Profiler"
            ]
        },
        {
            category: "Soft Skills",
            primary: ["First-Principles Problem Solving", "Leadership", "Technical Writing", "Self-teaching", "Iterative Experimentation"]
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
        },
    ],

    additionalQualifications: [
        {
            category: "Certifications",
            items: [
                {
                name: "Complete Linear Algebra",
                issuer: "Udemy"
                },
                {
                name: "Algorithmic Toolbox",
                issuer: "UCSD"
                },
                {
                name: "Game Theory",
                issuer: "Stanford"
                }
            ]
        },
        {
            category: "Awards",
            items: [
                { name: "National Merit" },
                { name: "Dean's Scholarship" },
                { name: "Eagle Scout" },
                { name: "Congressional App Challenge Winner" },
                { name: "ISKF Black Belt" }
            ]
        },
        {
            category: "Languages",
            items: [
                { name: "English", level: "Native" },
                { name: "Bengali", level: "Native" },
                { name: "Hindi", level: "Intermediate" },
                { name: "Spanish", level: "Intermediate" },
                { name: "French", level: "Beginner" }
            ]
        }
    ],
};

export default resumeData;