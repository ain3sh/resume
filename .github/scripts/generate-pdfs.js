const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

const VERCEL_URL = process.env.VERCEL_URL || 'http://localhost:3000';
console.log('URL:', VERCEL_URL);
const PDF_CONFIGS = [
    { isDark: true, isFull: true, isCompressed: true },
    { isDark: false, isFull: true, isCompressed: true },
    { isDark: true, isFull: false, isCompressed: true },
    { isDark: false, isFull: false, isCompressed: true }
];


async function generatePDFs() {
    console.log('Starting PDF generation...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox']
    });

    try {
        const page = await browser.newPage();
        // console log listener
        page.on('console', msg => console.log('Browser console:', msg.text()));

        const pdfDir = path.join(process.cwd(), 'pdfs');
        console.log('PDF directory:', pdfDir);

        // ensure pdfs directory exists
        await fs.mkdir(pdfDir, { recursive: true });

        // set up download behavior to save to pdfs dir
        await page._client.send('Page.setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: pdfDir
        });

        for (const config of PDF_CONFIGS) {
            const url = `${VERCEL_URL}?theme=${config.isDark ? 'dark' : 'light'}&version=${config.isFull ? 'full' : 'min'}&compressed=${config.isCompressed}`;
            console.log('Processing Variant:', url);

            await page.goto(url, { waitUntil: 'networkidle0' });
            console.log('Page loaded');

            // wait for the resume to be ready
            await page.waitForSelector('#resume-container');
            await page.waitForFunction('document.querySelector("#resume-container").getBoundingClientRect().height > 0');
            console.log('Resume container ready');

            // click the download button to trigger PDF generation
            await page.evaluate(() => {
                const downloadButton = document.querySelector('button[aria-label*="Download"]');
                if (downloadButton) downloadButton.click();
            });

            // wait for PDF to be generated
            const expectedFileName = `${config.isCompressed ? 'compressed' : 'raw'}-${config.isFull ? 'full' : 'min'}-${config.isDark ? 'dark' : 'light'}-resume.pdf`;
            await new Promise(r => setTimeout(r, 3000));

            console.log(`Generated ${expectedFileName}`);
        }
    } catch (error) {
        console.error('Error in PDF generation:', error);
        throw error;
    } finally {
        await browser.close();
        console.log('Browser closed');
    }
}

generatePDFs().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});