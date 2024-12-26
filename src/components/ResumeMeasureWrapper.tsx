import React, { useRef, useEffect } from 'react';
import { ThemeMode } from './utils/themeStyles';
import { ResumeData } from '../types/resume';
import Resume from './resume/Resume';

interface ResumeMeasureWrapperProps {
    theme: ThemeMode;
    onMeasure: (rect: DOMRect) => void;
    data: ResumeData;
}


const ResumeMeasureWrapper: React.FC<ResumeMeasureWrapperProps> = ({ 
        theme,
        onMeasure,
        data 
    }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const measureResume = () => {
            if (wrapperRef.current) {
                const rect = wrapperRef.current.getBoundingClientRect();
                onMeasure(rect);
            }
        };

        // initial measurement
        measureResume();

        // add resize listener
        window.addEventListener('resize', measureResume);

        // set up mutation observer for content changes
        const observer = new MutationObserver(measureResume);
        if (wrapperRef.current) {
            observer.observe(wrapperRef.current, { 
                childList: true, 
                subtree: true,
                characterData: true,
                attributes: true 
            });
        }

        // cleanup
        return () => {
            window.removeEventListener('resize', measureResume);
            observer.disconnect();
        };
    }, [onMeasure]); // no need for data dependency as it's handled by React's reconciliation

    return (
        <div
            ref={wrapperRef}
            style={{
                width: 'fit-content',
                margin: '0 auto',
                padding: '0'
            }}
        >
            <Resume theme={theme} data={data} />
        </div>
    );
};

export default ResumeMeasureWrapper;