import React from 'react';
import { ResumeData } from '../../types/resume';
import { ThemeMode, getThemeStyles } from '../utils/themeStyles';
import {
    EducationSection,
    ExperienceSection,
    ProjectsSection,
    SkillsSection,
    PublicationsSection,
    AdditionalQualificationsSection,
} from './index';

interface ResumeProps {
    data: ResumeData;
    theme: ThemeMode;
}


const Resume: React.FC<ResumeProps> = ({ data, theme }) => {
    const themeStyles = getThemeStyles(theme);
    const {
        personalInfo, education, experience,
        projects, skills, publications,
        additionalQualifications
    } = data;

    const isMin = personalInfo.links.some(link => link.type.includes(':'));


    return (
        <div
            className="max-w-5xl mx-auto p-8 shadow-lg"
            style={{
                backgroundColor: themeStyles.background,
                color: themeStyles.text,
                ...({ "--bullet-color": themeStyles.bullet } as React.CSSProperties),
            }}
        >
            <style>
            {`
                .bold {
                    font-weight: bold;
                }
                ul {
                    list-style: none;
                    padding-left: 1.5em;
                }
                ul li {
                    position: relative;
                    margin-bottom: 0.5em;
                }
                ul li::before {
                    content: '';
                    position: absolute;
                    left: -1.5em;
                    top: 0.84em;
                    width: 6px;
                    height: 6px;
                    background-color: ${themeStyles.bullet};
                    border-radius: 50%;
                    transform: translateY(-50%);
                }
                ul ul li::before {
                    background-color: transparent;
                    border: 1px solid ${themeStyles.bullet};
                }
            `}
            </style>

            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
                <p className="text-sm">
                    <a 
                        href={`mailto:${personalInfo.email}`} 
                        style={{ color: themeStyles.link }} 
                        className="hover:underline"
                    >
                        {personalInfo.email}
                    </a> | {personalInfo.phone}
                    {personalInfo.location && `| ${personalInfo.location}`}
                    {personalInfo.clearance && ` | ${personalInfo.clearance}`} |{' '}
                    {personalInfo.links.map((link, index) => (
                        <React.Fragment key={link.url}>
                            <a
                                href={link.url}
                                style={{ color: themeStyles.link }}
                                className="hover:underline"
                            >
                                {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                            </a>
                            {index < personalInfo.links.length - 1 ? ' | ' : ''}
                        </React.Fragment>
                    ))}
                </p>
            </header>

            <div className={`grid grid-cols-1 md:grid-cols-2
                            ${isMin ? 'gap-20' : 'gap-14'}`}>
                <div>
                    <EducationSection
                        education={education}
                        theme={theme}
                    />
                    {isMin && (
                        <PublicationsSection
                            publications={publications}
                            theme={theme}
                        />
                    )}
                    <ProjectsSection
                        projects={projects}
                        theme={theme}
                    />
                    <SkillsSection
                        skills={skills}
                        theme={theme}
                    />
                    {!isMin && (
                        <AdditionalQualificationsSection
                            qualifications={additionalQualifications}
                            theme={theme}
                        />
                    )}
                </div>
                <div>
                    <ExperienceSection
                        experience={experience}
                        theme={theme}
                    />
                    {!isMin && (
                        <PublicationsSection
                            publications={publications}
                            theme={theme}
                        />
                    )}
                    {isMin && (
                        <AdditionalQualificationsSection
                            qualifications={additionalQualifications}
                            theme={theme}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Resume;