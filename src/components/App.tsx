import { useRef, useState, useEffect } from 'react';
import '../index.css';
import ResumeMeasureWrapper from './ResumeMeasureWrapper';
import Controls from './utils/Controls';
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

    useEffect(() => { // update state from URL params
        // check URL params
        const params = new URLSearchParams(window.location.search);

        // set states from URL if present
        const theme = params.get('theme');
        const version = params.get('version');
        const compressed = params.get('compressed');

        if (theme) {
            setIsDarkMode(theme === 'dark');
        } else if (window.__REACT_THEME__) {
            // fall back to window theme if no URL param
            setIsDarkMode(window.__REACT_THEME__ === 'dark');
        }
        if (version) {
            setIsFullResume(version === 'full');
        }
        if (compressed) {
            setIsCompressed(compressed === 'true');
        }
    }, []); // run once on mount

    // init data
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
            const pdfFileName = `ain3sh-${isCompressed ? 'compressed' : 'raw'}-${isFullResume ? 'full' : 'min'}-${isDarkMode ? 'dark' : 'light'}-resume.pdf`;
            generatePDF(targetRef.current, currentData, pdfFileName, {
                scale: currentScale,
                compress: isCompressed, // compress pdf
                linkYOffset: 18, // link offset to align clickable area with text (larger = lower)
                //debug: true, // set to true to show red link bounding boxes in PDF
            })
                .then(() => console.log("PDF generated successfully"))
                .catch((error: Error) => console.error("Error generating PDF: ", error));
        }
    };

    const generateAllPDFs = async () => { // generate all PDFs with Ctrl/Cmd + Shift + P
        if (!isPDFReady || !targetRef.current || !contentRect) return;

        const configs = [ // format combinations to generate
            { isDark: true, isFull: true, isCompressed: true },
            { isDark: false, isFull: true, isCompressed: true },
            { isDark: true, isFull: false, isCompressed: true },
            { isDark: false, isFull: false, isCompressed: true }
        ];

        // store original states
        const originalStates = {
            isDark: isDarkMode,
            isFull: isFullResume,
            isCompressed: isCompressed
        };

        try { // generate each PDF variant
            for (const config of configs) {
                // update states
                setIsDarkMode(config.isDark);
                setIsFullResume(config.isFull);
                setIsCompressed(config.isCompressed);

                // wait for render
                await new Promise(resolve => setTimeout(resolve, 100));

                // generate PDF
                generatePDFHandler();
            }

        } catch (error) {
            console.error("Error generating PDFs: ", error);
        } finally { // restore original states
            setIsDarkMode(originalStates.isDark);
            setIsFullResume(originalStates.isFull);
            setIsCompressed(originalStates.isCompressed);
        }
    };


    return (
        <div className={currentTheme}>
            <Controls
                isDarkMode={isDarkMode}
                isFullResume={isFullResume}
                isCompressed={isCompressed}
                toggleTheme={toggleTheme}
                toggleResumeVersion={toggleResumeVersion}
                setIsCompressed={setIsCompressed}
                generatePDFHandler={generatePDFHandler}
                isPDFReady={isPDFReady}
                generateAllPDFs={generateAllPDFs}
            />

            <div ref={targetRef} id="resume-container" className="pt-24 md:pt-20">
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