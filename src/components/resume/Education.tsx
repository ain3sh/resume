import React from 'react';
import { GraduationCap } from 'lucide-react';
import ResumeSection from './Section';
import { Education as EducationType } from '../../types/resume';
import { ThemeMode } from '../utils/themeStyles';

interface EducationSectionProps {
    education: EducationType[];
    theme: ThemeMode;
}


const EducationSection: React.FC<EducationSectionProps> = ({ education, theme }) => (
    <ResumeSection title="Education" icon={GraduationCap}>
        {education.map((edu, index) => (
            <div key={index} className={index > 0 ? 'mt-4' : ''}>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                {edu.degrees.map((degree, idx) => (
                    <p key={idx} className="italic">{degree}</p>
                ))}
                <p>{edu.graduation} | GPA: {edu.gpa}</p>
                {edu.honors.length > 0 && (
                    <p>{edu.honors.join('; ')}</p>
                )}
                <ul className="list-inside mt-2">
                    {edu.coursework.map((category, idx) => (
                        <li key={idx}>
                            <span className="bold">{category.category}</span>:{' '}
                            {category.courses.join('; ')}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </ResumeSection>
);

export default EducationSection;