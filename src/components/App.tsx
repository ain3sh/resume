import React, { useRef, useState, useEffect } from 'react';
import { Sun, Moon, Maximize2, Minimize2, Shrink, Expand, FileDown } from 'lucide-react';
import '../index.css';
import ResumeMeasureWrapper from './ResumeMeasureWrapper';
import { generatePDF } from './utils/customPDFGenerator';
import { ThemeMode } from './utils/themeStyles';
import resumeData from '../data/resumeData';
import smallResumeData from '../data/smallResumeData';


const App = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [isDarkMode, setIsDarkMode] = useState(true); // default to dark mode
    const [isFullResume, setIsFullResume] = useState(true); // default to full resume
    const [isCompressed, setIsCompressed] = useState(true); // default to compressed
    const [contentRect, setContentRect] = useState<DOMRect | null>(null);
    const [isPDFReady, setIsPDFReady] = useState(false);

    useEffect(() => {
        if (window.__REACT_THEME__) {
            setIsDarkMode(window.__REACT_THEME__ === 'dark');
        }
    }, []);

    const currentTheme: ThemeMode = isDarkMode ? 'dark' : 'light';
    const currentData = isFullResume ? resumeData : smallResumeData;
    const currentScale = isCompressed ? 2 : 5; // adjust scale (2 = compressed, 5 = raw)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleResumeVersion = () => {
        setIsFullResume(!isFullResume);
    };

    const handleMeasure = (rect: DOMRect) => {
        setContentRect(rect);
        setIsPDFReady(true);
    };


    const generatePDFHandler = () => {
        if (isPDFReady && targetRef.current && contentRect) {
            const pdfFileName = `${isCompressed ? 'compressed' : 'raw'}-${isFullResume ? 'full' : 'min'}-${isDarkMode ? 'dark' : 'light'}-resume.pdf`;
            generatePDF(targetRef.current, currentData, pdfFileName, {
                scale: currentScale,
                compress: isCompressed, // compress pdf
                linkYOffset: 18, // link offset to align clickable area with text (larger = lower)
                //debug: true, // set to true to show red link bounding boxes in PDF
            })
                .then(() => console.log("PDF generated successfully"))
                .catch((error: Error) => console.error("Error generating PDF:", error));
        }
    };


    return (
        <div className={currentTheme}>
            <div className="w-full flex justify-end px-6 space-x-4">
                <div className="flex space-x-4">
                    {/* Theme Toggle */}
                    <button
                        className="relative w-20 h-10 mt-4 rounded-full p-1 bg-gray-100 dark:bg-gray-800 transition-colors duration-200 ease-in-out"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    >
                        <div
                            className={`absolute top-1 left-1 flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transform transition-transform duration-200 ease-in-out ${
                                isDarkMode ? 'translate-x-10' : 'translate-x-0'
                            }`}
                        >
                            {isDarkMode ? (
                                <Moon size={16} className="text-gray-100" />
                            ) : (
                                <Sun size={16} className="text-gray-800" />
                            )}
                        </div>
                        <span className="sr-only">Toggle theme</span>
                    </button>

                    {/* Version Toggle */}
                    <button
                        className="relative w-20 h-10 mt-4 rounded-full p-1 bg-gray-100 dark:bg-gray-800 transition-colors duration-200 ease-in-out"
                        onClick={toggleResumeVersion}
                        aria-label={`Currently showing ${isFullResume ? 'full' : 'condensed'} resume`}
                    >
                        <div
                            className={`absolute top-1 left-1 flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transform transition-transform duration-200 ease-in-out ${
                                isFullResume ? 'translate-x-10' : 'translate-x-0'
                            }`}
                        >
                            {isFullResume ? (
                                <Maximize2 size={16} className="text-gray-800 dark:text-gray-100" />
                            ) : (
                                <Minimize2 size={16} className="text-gray-800 dark:text-gray-100" />
                            )}
                        </div>
                        <span className="sr-only">Toggle resume version</span>
                    </button>
                </div>

                {/* Spacer */}
                <div className="mx-6"></div>

                <div className="flex space-x-4">
                    {/* Compression Toggle */}
                    <button
                        className="relative w-20 h-10 mt-4 rounded-full p-1 bg-gray-100 dark:bg-gray-800 transition-colors duration-200 ease-in-out"
                        onClick={() => setIsCompressed(!isCompressed)}
                        aria-label={`Currently ${isCompressed ? 'compressed' : 'uncompressed'} PDF`}
                    >
                        <div
                            className={`absolute top-1 left-1 flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transform transition-transform duration-200 ease-in-out ${
                                isCompressed ? 'translate-x-0' : 'translate-x-10'
                            }`}
                        >
                            {isCompressed ? (
                                <Shrink size={16} className="text-gray-800 dark:text-gray-100" />
                            ) : (
                                <Expand size={16} className="text-gray-800 dark:text-gray-100" />
                            )}
                        </div>
                        <span className="sr-only">Toggle PDF compression</span>
                    </button>

                    {/* PDF Generation */}
                    <button
                        className="flex mt-4 items-center px-3 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 rounded-full transition-colors duration-200 ease-in-out"
                        onClick={generatePDFHandler}
                        disabled={!isPDFReady}
                    >
                        <FileDown size={18} />
                    </button>
                </div>
            </div>


            <div ref={targetRef} id="resume-container">
                <ResumeMeasureWrapper
                    theme={currentTheme}
                    onMeasure={handleMeasure}
                    data={currentData}
                />
            </div>
        </div>
    );
};

export default App;