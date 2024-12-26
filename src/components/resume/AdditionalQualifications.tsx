import React from 'react';
import { Award } from 'lucide-react';
import ResumeSection from './Section';
import { AdditionalQualification } from '../../types/resume';
import { ThemeMode } from '../utils/themeStyles';

interface AdditionalQualificationsSectionProps {
    qualifications: AdditionalQualification[];
    theme: ThemeMode;
}


const AdditionalQualificationsSection: React.FC<AdditionalQualificationsSectionProps> = ({
    qualifications,
    theme
}) => (
    <ResumeSection title="Additional Qualifications" icon={Award}>
        <ul className="list-inside">
            {qualifications.map((qual, index) => (
                <li key={index}>
                    <span className="bold">{qual.category}</span>:{' '}
                    {qual.items.map((item, idx) => (
                        <span key={idx}>
                            {item.name}
                            {item.level && ` (${item.level})`}
                            {item.issuer && ` - ${item.issuer}`}
                            {idx < qual.items.length - 1 ? '; ' : ''}
                        </span>
                    ))}
                </li>
            ))}
        </ul>
    </ResumeSection>
);

export default AdditionalQualificationsSection;