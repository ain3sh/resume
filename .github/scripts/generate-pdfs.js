const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

const VERCEL_URL = process.env.VERCEL_URL || 'http://localhost:3000';
const PDF_CONFIGS = [
  { isDark: true, isFull: true, isCompressed: true },
  { isDark: false, isFull: true, isCompressed: true },
  { isDark: true, isFull: false, isCompressed: true },
  { isDark: false, isFull: false, isCompressed: true }
];


async function generatePDFs() {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox']
    });

    try {
        const page = await browser.newPage();
        const pdfDir = path.join(process.cwd(), 'pdfs');

        // ensure pdfs directory exists
        await fs.mkdir(pdfDir, { recursive: true });

        for (const config of PDF_CONFIGS) {
            const url = `${VERCEL_URL}?theme=${config.isDark ? 'dark' : 'light'}&version=${config.isFull ? 'full' : 'min'}&compressed=${config.isCompressed}`;

            await page.goto(url, { waitUntil: 'networkidle0' });
            await page.waitForSelector('#resume-container');

            // give extra time for animations/transitions
            await new Promise(r => setTimeout(r, 1000));

            const pdfName = `compressed-${config.isFull ? 'full' : 'min'}-${config.isDark ? 'dark' : 'light'}-resume.pdf`;
            const pdfPath = path.join(pdfDir, pdfName);

            await page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true,
                scale: config.isCompressed ? 2 : 5
            });

            console.log(`Generated ${pdfName}`);
        }
    } finally {
        await browser.close();
    }
}

generatePDFs().catch(console.error);