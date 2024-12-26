import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ResumeSectionProps {
    title: string;
    icon: LucideIcon;
    children: ReactNode;
    className?: string;
}


const ResumeSection: React.FC<ResumeSectionProps> = ({ 
    title,
    icon: Icon,
    children,
    className = ""
}) => (
    <div className={`mb-4 ${className}`}>
        <h2 className="text-xl font-bold mb-2 flex items-center">
            <span className="icon mr-2 flex items-center justify-center" style={{ width: '1.5em', height: '1.5em' }}>
                <Icon size={25} />
            </span>
            <span>{title}</span>
        </h2>
        {children}
    </div>
);

export default ResumeSection;