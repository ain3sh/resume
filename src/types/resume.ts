export interface ResumeData {
    personalInfo: PersonalInfo;
    education: Education[];
    experience: Experience[];
    projects: Project[];
    skills: Skill[];
    publications: Publication[];
    additionalQualifications: AdditionalQualification[];
    metadata: {
        version: 'full' | 'condensed';
        lastUpdated: string;
    };
}

export interface ResumeVersion {
    id: string;
    name: string;
    data: ResumeData;
}

export interface Education {
    institution: string;
    degrees: string[];
    graduation: string;
    gpa: string;
    honors: string[];
    coursework: {
        category: string;
        courses: string[];
    }[];
}

export interface Experience {
    company: string;
    role: string;
    department?: string;
    location: string;
    duration: string;
    achievements: {
        action: string;
        description: string;
        metrics?: string;
    }[];
}

export interface Project {
    name: string;
    role: string;
    isActive: boolean;
    description: string[];
    achievements: {
        type: 'award' | 'recognition' | 'metric';
        description: string;
    }[];
    technologies?: string[];
}

export interface Skill {
    category: string;
    primary: string[];
    secondary?: string[];
}

export interface Publication {
    title: string;
    url: string;
    venue: string;
    year: string;
}

export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    location: string;
    clearance?: string;
    links: {
        type: 'site' | 'linkedin' | 'github' | 'other' |
                'site: ainesh.com' | 'linkedin: ain3sh' |
                                'github: GeneralCoder365';
        url: string;
        label?: string;
    }[];
}

export interface AdditionalQualification {
    category: 'Certifications' | 'Awards' | 'Languages' | 'Other';
    items: {
        name: string;
        level?: string;
        issuer?: string;
    }[];
}