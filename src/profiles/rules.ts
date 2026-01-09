import { ResumeData, Experience, Project } from '../types/resume';

function clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value)) as T;
}

function normalizeSet(values: string[]): Set<string> {
    return new Set(values.map(v => v.trim()).filter(Boolean));
}

function stableSortByScore<T>(items: T[], score: (item: T) => number): T[] {
    return items
        .map((item, index) => ({ item, index, score: score(item) }))
        .sort((a, b) => (b.score - a.score) || (a.index - b.index))
        .map(x => x.item);
}

export function composeProfiles(...profiles: Array<(data: ResumeData) => ResumeData>) {
    return (data: ResumeData) => profiles.reduce((acc, p) => p(acc), data);
}

export function includeExperienceIds(ids: string[]) {
    const keep = normalizeSet(ids);
    return (data: ResumeData): ResumeData => {
        const next = clone(data);
        next.experience = next.experience.filter(exp => exp.id && keep.has(exp.id));
        return next;
    };
}

export function includeProjectIds(ids: string[]) {
    const keep = normalizeSet(ids);
    return (data: ResumeData): ResumeData => {
        const next = clone(data);
        next.projects = next.projects.filter(proj => proj.id && keep.has(proj.id));
        return next;
    };
}

export function includeAchievementIds(ids: string[]) {
    const keep = normalizeSet(ids);
    return (data: ResumeData): ResumeData => {
        const next = clone(data);

        next.experience = next.experience.map(exp => ({
            ...exp,
            achievements: exp.achievements.filter(a => a.id && keep.has(a.id)),
        }));

        next.projects = next.projects.map(proj => ({
            ...proj,
            achievements: proj.achievements.filter(a => a.id && keep.has(a.id)),
        }));

        return next;
    };
}

export function limitExperienceBullets(byExperienceId: Record<string, number>) {
    return (data: ResumeData): ResumeData => {
        const next = clone(data);
        next.experience = next.experience.map(exp => {
            const limit = exp.id ? byExperienceId[exp.id] : undefined;
            if (!limit || limit < 1) return exp;
            return {
                ...exp,
                achievements: exp.achievements.slice(0, limit),
            };
        });
        return next;
    };
}

export function limitAllExperienceBullets(limit: number) {
    return (data: ResumeData): ResumeData => {
        if (!limit || limit < 1) return data;
        const next = clone(data);
        next.experience = next.experience.map(exp => ({
            ...exp,
            achievements: exp.achievements.slice(0, limit),
        }));
        return next;
    };
}

export function limitExperienceTotalBullets(options: {
    total: number;
    minPerExperience?: number;
}) {
    const { total, minPerExperience = 1 } = options;

    return (data: ResumeData): ResumeData => {
        if (!total || total < 1) return data;

        const next = clone(data);
        const experiences = next.experience;
        const minPer = Math.max(0, Math.floor(minPerExperience));

        let currentTotal = experiences.reduce((acc, exp) => acc + exp.achievements.length, 0);
        if (currentTotal <= total) return next;

        for (let i = experiences.length - 1; i >= 0 && currentTotal > total; i -= 1) {
            const exp = experiences[i];
            while (currentTotal > total && exp.achievements.length > minPer) {
                exp.achievements = exp.achievements.slice(0, exp.achievements.length - 1);
                currentTotal -= 1;
            }
        }

        return next;
    };
}

export function limitAllProjectBullets(limit: number) {
    return (data: ResumeData): ResumeData => {
        if (!limit || limit < 1) return data;
        const next = clone(data);
        next.projects = next.projects.map(proj => ({
            ...proj,
            description: proj.description.slice(0, limit),
            achievements: proj.achievements.slice(0, limit),
        }));
        return next;
    };
}

export function tagFilter(tags: string[]) {
    const keep = normalizeSet(tags);
    const hasAny = (itemTags?: string[]) => (itemTags ?? []).some(t => keep.has(t));

    return (data: ResumeData): ResumeData => {
        const next = clone(data);
        next.experience = next.experience.map(exp => ({
            ...exp,
            achievements: exp.achievements.filter(a => hasAny(a.tags)),
        }));
        next.projects = next.projects.map(proj => ({
            ...proj,
            achievements: proj.achievements.filter(a => hasAny(a.tags)),
        }));
        return next;
    };
}

export function tagBoost(tags: string[]) {
    const boost = normalizeSet(tags);

    const scoreExperienceAchievement = (a: Experience['achievements'][number]): number => {
        const tagMatches = (a.tags ?? []).filter(t => boost.has(t)).length;
        const text = `${a.action} ${a.description} ${a.metrics ?? ''}`.toLowerCase();
        const keywordMatches = Array.from(boost).filter(t => text.includes(t.toLowerCase())).length;
        return tagMatches * 10 + keywordMatches;
    };

    const scoreProjectAchievement = (a: Project['achievements'][number]): number => {
        const tagMatches = (a.tags ?? []).filter(t => boost.has(t)).length;
        const text = `${a.type} ${a.description}`.toLowerCase();
        const keywordMatches = Array.from(boost).filter(t => text.includes(t.toLowerCase())).length;
        return tagMatches * 10 + keywordMatches;
    };

    return (data: ResumeData): ResumeData => {
        const next = clone(data);
        next.experience = next.experience.map(exp => ({
            ...exp,
            achievements: stableSortByScore(exp.achievements, scoreExperienceAchievement),
        }));
        next.projects = next.projects.map(proj => ({
            ...proj,
            achievements: stableSortByScore(proj.achievements, scoreProjectAchievement),
        }));
        return next;
    };
}

export function rewriteText(replacements: Record<string, string>) {
    const entries = Object.entries(replacements)
        .map(([from, to]) => [from, to] as const)
        .filter(([from]) => from.length > 0);

    const apply = (text: string) => entries.reduce((acc, [from, to]) => acc.split(from).join(to), text);

    return (data: ResumeData): ResumeData => {
        const next = clone(data);
        next.experience = next.experience.map(exp => ({
            ...exp,
            achievements: exp.achievements.map(a => ({
                ...a,
                action: apply(a.action),
                description: apply(a.description),
                metrics: a.metrics ? apply(a.metrics) : a.metrics,
            })),
        }));
        next.projects = next.projects.map(proj => ({
            ...proj,
            description: proj.description.map(apply),
            achievements: proj.achievements.map(a => ({
                ...a,
                description: apply(a.description),
            })),
            technologies: proj.technologies ? proj.technologies.map(apply) : proj.technologies,
        }));
        next.skills = next.skills.map(group => ({
            ...group,
            category: apply(group.category),
            primary: group.primary.map(apply),
            secondary: group.secondary ? group.secondary.map(apply) : group.secondary,
        }));
        next.publications = next.publications.map(pub => ({
            ...pub,
            title: apply(pub.title),
            venue: apply(pub.venue),
            year: apply(pub.year),
            url: pub.url,
        }));
        next.education = next.education.map(edu => ({
            ...edu,
            institution: apply(edu.institution),
            degrees: edu.degrees.map(apply),
            graduation: apply(edu.graduation),
            gpa: edu.gpa ? apply(edu.gpa) : edu.gpa,
            honors: edu.honors.map(apply),
            coursework: edu.coursework.map(c => ({
                ...c,
                category: apply(c.category),
                courses: c.courses.map(apply),
            })),
        }));
        next.personalInfo = {
            ...next.personalInfo,
            name: apply(next.personalInfo.name),
            email: next.personalInfo.email,
            phone: next.personalInfo.phone,
            location: next.personalInfo.location ? apply(next.personalInfo.location) : next.personalInfo.location,
            clearance: next.personalInfo.clearance ? apply(next.personalInfo.clearance) : next.personalInfo.clearance,
            links: next.personalInfo.links.map(l => ({
                ...l,
                type: l.type,
                url: l.url,
                label: l.label ? apply(l.label) : l.label,
            })),
        };
        return next;
    };
}
