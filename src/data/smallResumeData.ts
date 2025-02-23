import { ResumeData } from '../types/resume';

export const smallResumeData: ResumeData = {
    metadata: {
        version: "condensed",
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
                url: "https://github.com/GeneralCoder365",
            }
        ]
    },

    education: [
        {
            institution: "University of Maryland (College Park)",
            degrees: [
                "Dual BS in Computer Science (Machine Learning+Quantum Information) and Mathematics"
            ],
            graduation: "December 2025",
            gpa: "3.5",
            honors: ["University + CS Departmental Honors, Dean's List"],
            coursework: [
                {
                category: "AI/ML",
                courses: ["Intro to: AI, Data Science, ML, Graduate NLP"]
                },
                {
                category: "Math",
                courses: ["Calculus III, Advanced Linear Algebra, Differential Equations, Abstract Algebra, Financial Modeling"]
                },
                {
                category: "CS",
                courses: ["Algorithms, Data Structures, Computer Systems, OOP, Programming Languages"]
                },
                {
                category: "Stat",
                courses: ["Applied Prob&Stat, Probability Theory"]
                }
            ]
        }
    ],

    experience: [
        {
            company: "Johns Hopkins University Applied Physics Laboratory",
            role: "Computer Science Intern - Interim Security Clearance",
            department: "Force Projection Sector: KMT Group",
            location: "Laurel, MD",
            duration: "May 2024 - Aug 2024",
            achievements: [
                {
                action: "Developed",
                description: "Generative Adversarial Imitation from Observation (GAIfO) agents, outperforming baseline models"
                },
                {
                action: "Authored",
                description: "literature reviews on GAIfO and Generative AI, shaping project strategies"
                },
                {
                action: "Enhanced",
                description: "SCRIMMAGE simulation framework with advanced controller functionalities"
                },
                {
                action: "Revamped",
                description: "GitLab CI pipelines, boosting efficiency by",
                metrics: "25% and improving security"
                },
                {
                action: "Optimized",
                description: "core Docker Image, reducing build times by",
                metrics: "50% and increasing memory efficiency by 40%"
                },
                {
                action: "Led",
                description: "winning team for the sector-wide Intern Challenge, in developing a prototype secure, non-GPS intra-campus navigation system"
                }
            ]
        },
        {
            company: "University of Maryland MIND Lab",
            role: "Data Science/ML Research Intern",
            department: "Breathing Analysis Project",
            location: "College Park, MD",
            duration: "Fall 2023 - Present",
            achievements: [
                {
                action: "Created",
                description: "a visualization dashboard for mass breath data analysis, and optimized dataset loading by over",
                metrics: "400%"
                },
                {
                action: "Implemented",
                description: "supervised learning techniques to enhance breath segmentation accuracy"
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
            name: "CoronaSafe",
            role: "Team Lead/Developer",
            isActive: false,
            description: [
                "Python/Flutter app for global COVID-19 risk assessment",
                "Won the 2021 Congressional App Challenge for district MD08",
                "Analyzed real-time foot traffic and urban density using a novel time-weighted algorithm for predictive accuracy",
                "Featured as a guest speaker at the US Patent and Trademark Office's 2022 APPLY Yourself event"
            ],
            achievements: []
        },
        {
            name: "Resourceful",
            role: "Team Lead/Developer",
            isActive: false,
            description: [
                "Python/Flutter app that connected underrepresented students to resources using NLP-driven searches",
                "Won the Best Education Award at the 2022 Blairhacks_5 Hackathon",
                "Implemented advanced NLP techniques including NLTK, Spacy, and Cosine/Wu-Palmer similarities"
            ],
            achievements: []
        }
    ],

    skills: [
        {
        category: "Programming & Tools/Tech",
        primary: ["Python", "Java", "C/C++", "Fullstack Development", "DevOps",
                    "API Design", "Git", "Docker", "CI/CD", "Linux", "PyTorch",
                                        "Flask", "REST APIs", "NumPy", "Pandas"]
        },
        {
        category: "ML/AI/Data Science",
        primary: ["Un/Supervised Learning", "Deep RL", "GANs", "Statistical Analysis",
                                    "Data Structures", "Algorithms", "Data Processing"]
        },
        {
        category: "Soft Skills",
        primary: ["Research", "Technical Writing", "Problem-Solving", "Team Leadership"]
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
                { name: "National Merit Scholarship" },
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

export default smallResumeData;