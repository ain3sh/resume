import { ProfileDefinition } from './types';
import {
    composeProfiles,
    includeExperienceIds,
    includeProjectIds,
    limitExperienceTotalBullets,
    limitExperienceBullets,
    rewriteText,
    tagBoost,
} from './rules';

export const DEFAULT_PROFILE_NAME = 'default';

export const profileRegistry: Record<string, ProfileDefinition> = {
    default: {
        name: 'default',
        description: 'Unmodified base resume data.',
        apply: (data) => data,
    },

    compact: {
        name: 'compact',
        description: 'Condense content (e.g., for 1-page Typst/ATS output).',
        apply: composeProfiles(
            // Trim from the bottom-most roles first until we hit the budget.
            limitExperienceTotalBullets({ total: 10, minPerExperience: 2 }),
        ),
    },

    'iso-erp': {
        name: 'iso-erp',
        description: 'Emphasize MCP/automation/ERP experience for Project ISO / Bridge-type roles.',
        apply: composeProfiles(
            includeExperienceIds([
                'exp:tilli',
                'exp:jhu-apl',
                'exp:umd-crowd',
                'exp:umd-mind',
            ]),
            includeProjectIds([
                'proj:openskills',
                'proj:context-mcp',
                'proj:climb-cli',
            ]),
            tagBoost(['mcp', 'automation', 'erp', 'agents', 'shipping']),
            limitExperienceBullets({
                'exp:tilli': 4,
                'exp:jhu-apl': 4,
            }),
            rewriteText({
                'ERP': 'enterprise resource planning',
            }),
        ),
    },
};

export function getProfile(name?: string): ProfileDefinition {
    if (!name) return profileRegistry[DEFAULT_PROFILE_NAME];
    return profileRegistry[name] ?? profileRegistry[DEFAULT_PROFILE_NAME];
}
