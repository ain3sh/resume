import { ResumeData } from '../types/resume';

export type ResumeProfile = (data: ResumeData) => ResumeData;

export interface ProfileDefinition {
    name: string;
    description?: string;
    apply: ResumeProfile;
}
