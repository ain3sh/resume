import React, { useEffect, useState } from 'react';
import { Sun, Moon, Maximize2, Minimize2, Shrink, Expand, FileDown } from 'lucide-react';

interface ControlsProps {
    isDarkMode: boolean;
    isFullResume: boolean;
    isCompressed: boolean;
    toggleTheme: () => void;
    toggleResumeVersion: () => void;
    setIsCompressed: (compressed: boolean) => void;
    generatePDFHandler: () => void;
    isPDFReady: boolean;
    generateAllPDFs?: () => void;
}


const useScrollBehavior = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return isVisible;
};


const Controls: React.FC<ControlsProps> = ({ 
    isDarkMode,
    isFullResume,
    isCompressed,
    toggleTheme,
    toggleResumeVersion,
    setIsCompressed,
    generatePDFHandler,
    isPDFReady,
    generateAllPDFs,
}) => {
    const isVisible = useScrollBehavior(); // hide controls on scroll down

    useEffect(() => { // keyboard shortcut to generate all PDFs
        const handleKeyPress = (e: KeyboardEvent) => { // Ctrl/Cmd + Shift + P
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
                e.preventDefault(); // prevent browser print dialog
                generateAllPDFs?.();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [generateAllPDFs]);


    return (
        <div
            className={`
                fixed top-0 left-0 right-0 z-50
                transform transition-transform duration-300 ease-in-out
                
            `}
        >
            <div className="w-full overflow-x-auto hide-scrollbar">
                <div className="min-w-fit px-6 py-4">
                    <div className="flex items-center justify-end space-x-8">
                        {/* Theme Toggle */}
                        <div className="flex flex-col items-center">
                            <button
                                className="relative w-20 h-10 rounded-full p-1 bg-gray-100 dark:bg-gray-800 transition-colors duration-200 ease-in-out"
                                onClick={toggleTheme}
                                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                            >
                                <div
                                    className={`absolute top-1 left-1 flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transform transition-transform duration-200 ease-in-out ${
                                        isDarkMode ? 'translate-x-10' : 'translate-x-0'
                                    }`}
                                >
                                    {isDarkMode ? (
                                        <Moon size={18} className="text-gray-100" />
                                    ) : (
                                        <Sun size={18} className="text-gray-800" />
                                    )}
                                </div>
                            </button>
                            <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {isDarkMode ? 'Dark' : 'Light'} Theme
                            </span>
                        </div>

                        {/* Resume Content Toggle */}
                        <div className="flex flex-col items-center">
                            <button
                                className="relative w-20 h-10 rounded-full p-1 bg-gray-100 dark:bg-gray-800 transition-colors duration-200 ease-in-out"
                                onClick={toggleResumeVersion}
                                aria-label={`Currently showing ${isFullResume ? 'full' : 'condensed'} resume`}
                            >
                                <div
                                    className={`absolute top-1 left-1 flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transform transition-transform duration-200 ease-in-out ${
                                        isFullResume ? 'translate-x-10' : 'translate-x-0'
                                    }`}
                                >
                                    {isFullResume ? (
                                        <Maximize2 size={18} className="text-gray-800 dark:text-gray-100" />
                                    ) : (
                                        <Minimize2 size={18} className="text-gray-800 dark:text-gray-100" />
                                    )}
                                </div>
                            </button>
                            <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {isFullResume ? 'Full' : 'Min'} Resume
                            </span>
                        </div>

                        {/* Compression Toggle */}
                        <div className="flex flex-col items-center">
                            <button
                                className="relative w-20 h-10 rounded-full p-1 bg-gray-100 dark:bg-gray-800 transition-colors duration-200 ease-in-out"
                                onClick={() => setIsCompressed(!isCompressed)}
                                aria-label={`Currently ${isCompressed ? 'compressed' : 'uncompressed'} PDF`}
                            >
                                <div
                                    className={`absolute top-1 left-1 flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transform transition-transform duration-200 ease-in-out ${
                                        isCompressed ? 'translate-x-0' : 'translate-x-10'
                                    }`}
                                >
                                    {isCompressed ? (
                                        <Shrink size={18} className="text-gray-800 dark:text-gray-100" />
                                    ) : (
                                        <Expand size={18} className="text-gray-800 dark:text-gray-100" />
                                    )}
                                </div>
                            </button>
                            <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 min-w-[110px] text-center">
                                {isCompressed ? 'Compressed' : 'Raw'} PDF
                            </span>
                        </div>

                        {/* Download Button */}
                        <div className="flex flex-col items-center">
                            <button
                                className="relative w-11 h-11 flex items-center justify-center bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 rounded-full transition-colors duration-200 ease-in-out"
                                onClick={generatePDFHandler}
                                disabled={!isPDFReady}
                                aria-label="Download Resume PDF"
                            >
                                <FileDown size={25} />
                            </button>
                            <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Download
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Controls;