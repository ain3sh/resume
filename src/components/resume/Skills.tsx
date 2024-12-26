import React from 'react';
import { Wrench } from 'lucide-react';
import ResumeSection from './Section';
import { Skill as SkillType } from '../../types/resume';
import { ThemeMode } from '../utils/themeStyles';

interface SkillsSectionProps {
    skills: SkillType[];
    theme: ThemeMode;
}


const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, theme }) => (
    <ResumeSection title="Skills" icon={Wrench}>
        <ul className="list-inside">
            {skills.map((skillGroup, index) => (
                <li key={index}>
                    <span className="bold">{skillGroup.category}</span>:{' '}
                    {skillGroup.primary.join(', ')}
                    {skillGroup.secondary && (
                        <ul className="list-inside ml-4">
                            <li>
                                Familiar: {skillGroup.secondary.join(', ')}
                            </li>
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    </ResumeSection>
);

export default SkillsSection;