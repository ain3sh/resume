import { ResumeData } from '../types/resume';
import { profileRegistry } from './registry';
import {
    composeProfiles,
    includeExperienceIds,
    includeProjectIds,
    excludeIds,
    tagBoost,
    tagFilter,
    limitExperienceTotalBullets,
    limitAllExperienceBullets,
    rewriteText,
} from './rules';

export type ResumeProfile = (data: ResumeData) => ResumeData;

interface QueryParams {
    get(key: string): string | null;
}

export function parseProfileQuery(params: QueryParams): ResumeProfile {
    const rules: ResumeProfile[] = [];

    // Base profile first
    const base = params.get('base');
    if (base && profileRegistry[base]) {
        rules.push(profileRegistry[base].apply);
    }

    // Keep (whitelist by ID)
    const keep = params.get('keep')?.split(',').map(s => s.trim()).filter(Boolean);
    if (keep?.length) {
        const expIds = keep.filter(id => id.startsWith('exp:'));
        const projIds = keep.filter(id => id.startsWith('proj:'));
        if (expIds.length) rules.push(includeExperienceIds(expIds));
        if (projIds.length) rules.push(includeProjectIds(projIds));
    }

    // Drop (blacklist by ID)
    const drop = params.get('drop')?.split(',').map(s => s.trim()).filter(Boolean);
    if (drop?.length) rules.push(excludeIds(drop));

    // Tag boosting (reorder by relevance)
    const boost = params.get('tagBoost')?.split(',').map(s => s.trim()).filter(Boolean);
    if (boost?.length) rules.push(tagBoost(boost));

    // Tag filtering (keep only matching)
    const filter = params.get('tagFilter')?.split(',').map(s => s.trim()).filter(Boolean);
    if (filter?.length) rules.push(tagFilter(filter));

    // Limit total bullets across all experiences
    const limitTotal = parseInt(params.get('limitTotal') ?? '', 10);
    if (limitTotal > 0) rules.push(limitExperienceTotalBullets({ total: limitTotal }));

    // Limit bullets per experience
    const limitPer = parseInt(params.get('limitPer') ?? '', 10);
    if (limitPer > 0) rules.push(limitAllExperienceBullets(limitPer));

    // Text rewrites (format: "from1:to1,from2:to2")
    const rewrite = params.get('rewrite');
    if (rewrite) {
        const replacements: Record<string, string> = {};
        rewrite.split(',').forEach(pair => {
            const colonIdx = pair.indexOf(':');
            if (colonIdx > 0) {
                const from = pair.slice(0, colonIdx).trim();
                const to = pair.slice(colonIdx + 1).trim();
                if (from) replacements[from] = to;
            }
        });
        if (Object.keys(replacements).length) rules.push(rewriteText(replacements));
    }

    // Return identity if no rules
    if (rules.length === 0) {
        return (data) => data;
    }

    return composeProfiles(...rules);
}

// Helper to create QueryParams from CLI args (--key=value or --key value)
export function parseCliArgs(args: string[]): QueryParams {
    const map = new Map<string, string>();

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith('--')) {
            const eqIdx = arg.indexOf('=');
            if (eqIdx > 2) {
                // --key=value format
                const key = arg.slice(2, eqIdx);
                const value = arg.slice(eqIdx + 1);
                map.set(key, value);
            } else {
                // --key value format
                const key = arg.slice(2);
                const nextArg = args[i + 1];
                if (nextArg && !nextArg.startsWith('--')) {
                    map.set(key, nextArg);
                    i++;
                }
            }
        }
    }

    return {
        get(key: string) {
            return map.get(key) ?? null;
        },
    };
}
