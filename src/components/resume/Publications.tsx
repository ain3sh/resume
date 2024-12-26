import React from 'react';
import { Book } from 'lucide-react';
import ResumeSection from './Section';
import { Publication as PublicationType } from '../../types/resume';
import { ThemeMode, getThemeStyles } from '../utils/themeStyles';

interface PublicationsSectionProps {
    publications: PublicationType[];
    theme: ThemeMode;
}


const PublicationsSection: React.FC<PublicationsSectionProps> = ({ publications, theme }) => {
    const themeStyles = getThemeStyles(theme);

    return (
        <ResumeSection title="Publications" icon={Book}>
            <ul className="list-inside">
                {publications.map((pub, index) => (
                    <li key={index}>
                        <a 
                            href={pub.url}
                            className="hover:underline italic"
                            style={{ color: themeStyles.link }}
                        >
                            {pub.title}
                        </a>
                        , published at {pub.venue}, {pub.year}
                    </li>
                ))}
            </ul>
        </ResumeSection>
    );
};

export default PublicationsSection;