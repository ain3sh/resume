import React from 'react';
import { Briefcase } from 'lucide-react';
import ResumeSection from './Section';
import { Experience as ExperienceType } from '../../types/resume';
import { ThemeMode } from '../utils/themeStyles';

interface ExperienceSectionProps {
    experience: ExperienceType[];
    theme: ThemeMode;
}


const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, theme }) => (
    <ResumeSection title="Experience" icon={Briefcase}>
        {experience.map((exp, index) => (
            <div key={index} className={index > 0 ? 'mt-3' : ''}>
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <p className="italic">{exp.role}</p>
                {exp.department && (
                    <p className="italic">{exp.department}</p>
                )}
                <p>{exp.duration} | {exp.location}</p>
                <ul className="list-inside mt-2">
                    {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>
                            <span className="bold">{achievement.action}</span>{' '}
                            {achievement.description}
                            {achievement.metrics && (
                                <span className="bold italic">
                                    {' '}{achievement.metrics}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </ResumeSection>
);

export default ExperienceSection;