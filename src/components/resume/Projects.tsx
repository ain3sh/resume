import React from 'react';
import { Code } from 'lucide-react';
import ResumeSection from './Section';
import { Project as ProjectType } from '../../types/resume';
import { ThemeMode } from '../utils/themeStyles';

interface ProjectsSectionProps {
    projects: ProjectType[];
    theme: ThemeMode;
}


const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, theme }) => (
    <ResumeSection title="Projects" icon={Code}>
        {projects.map((project, index) => (
            <div key={index}>
                <h3 className="font-semibold">
                    {project.name} {project.isActive && '(active)'} | {project.role}
                </h3>
                <ul className="list-inside mt-2">
                    {project.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                    ))}
                    {project.achievements.map((achievement, idx) => (
                        <li key={`achievement-${idx}`}>
                            <span className="bold">
                                {achievement.type === 'award' && 'Award: '}
                                {achievement.type === 'recognition' && 'Recognition: '}
                            </span>
                            {achievement.description}
                        </li>
                    ))}
                    {project.technologies && (
                        <li>
                            <span className="bold">Technologies: </span>
                            {project.technologies.join(', ')}
                        </li>
                    )}
                </ul>
            </div>
        ))}
    </ResumeSection>
);

export default ProjectsSection;