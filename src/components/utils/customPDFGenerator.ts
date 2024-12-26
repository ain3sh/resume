import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ResumeData } from '../../types/resume';

interface PDFGeneratorOptions {
    scale?: number;
    debug?: boolean;
    compress?: boolean;
    linkYOffset?: number;
}

interface LinkRect {
    x: number;
    y: number;
    width: number;
    height: number;
    url: string;
}

const DEFAULT_OPTIONS: PDFGeneratorOptions = {
    scale: 2, // render scale for html2canvas
    compress: false, // set to true to compress PDF output
    linkYOffset: 10, // helps align link bounding box with text (larger = lower)
    debug: false, // set to true to show red link bounding boxes in PDF
};


/**
 * Recursively find all <a> elements, compute link bounding boxes
 * relative to 'element' (the cloned container), and expand the bounding
 * box on all sides by a few units for better clickability.
 */
async function findLinkPositions(
    element: HTMLElement,
    scale: number,
    linkYOffset: number,
    boxPadding = 6 // padding around link bounding boxes
): Promise<LinkRect[]> {
    const links: LinkRect[] = [];
    const containerRect = element.getBoundingClientRect();

    function processNode(node: Element) {
        if (node.tagName === 'A') {
            const anchor = node as HTMLAnchorElement;
            const rect = anchor.getBoundingClientRect();

            // 1. convert DOM rect to PDF coordinates (scaled)
            // 2. subtract container's top/left to get local coordinates
            // 3. expand the bounding box slightly on all sides
            // 4. add y-offset to align bounding boxes with text more accurately
            links.push({
                x: (rect.left - containerRect.left)*scale - boxPadding,
                y: (rect.top - containerRect.top)*scale + linkYOffset - boxPadding,
                width: rect.width * scale + 2*boxPadding,
                height: rect.height * scale + 2*boxPadding,
                url: anchor.href,
            });
        }

        // 5. recurse into children if any
        node.childNodes.forEach((child) => {
            if (child.nodeType === Node.ELEMENT_NODE) {
                processNode(child as Element);
            }
        });
    }

    processNode(element);
    return links;
}

/**
 * Add style overrides to the cloned element to fix bullet
 * and icon positioning for consistent PDF rendering.
 */
function adjustIconsAndBullets(clonedElement: HTMLElement) {
    const style = document.createElement('style');
    style.textContent = `
            /* Scope everything to #resume-container-clone to avoid polluting original DOM */
            #resume-container-clone .icon {
                position: relative;
                top: 0.5em !important;
                margin-right: 0.5em !important;
            }
            #resume-container-clone ul {
                list-style: none !important;
                padding-left: 1.5em !important;
            }
            #resume-container-clone ul li {
                position: relative !important;
                margin-bottom: 0.5em !important;
            }
            #resume-container-clone ul li::before {
                content: '' !important;
                position: absolute !important;
                left: -1.5em !important;
                top: 1.3em !important; /* larger = lower relative to list item */
                width: 6px !important;
                height: 6px !important;
                border-radius: 50% !important;
                transform: translateY(-50%) !important;
            }
            #resume-container-clone {
                margin: 0 !important;
                padding: 0 !important;
                box-sizing: border-box !important;
            }
    `;
    clonedElement.appendChild(style);
}


/**
 * Main function to generate PDF with:
 *  - no automatic margins => no white borders
 *  - hidden ATS text layer
 *  - clickable links
 */
export async function generatePDF(
    element: HTMLElement,
    resumeData: ResumeData,
    filename: string,
    options: Partial<PDFGeneratorOptions> = {}
): Promise<void> {
    // 0. merge user options with defaults
    const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
    const { scale, debug, compress, linkYOffset } = mergedOptions;


    // 1. clone resume container so we can safely manipulate it
                            // without affecting the displayed DOM
    const clonedElement = element.cloneNode(true) as HTMLElement;
    clonedElement.id = 'resume-container-clone';

    // position the clone at top-left, no margin/padding, so everything
                                        // lines up exactly for html2canvas
    clonedElement.style.position = 'absolute';
    clonedElement.style.top = '0';
    clonedElement.style.left = '0';
    clonedElement.style.margin = '0';
    clonedElement.style.padding = '0';
    clonedElement.style.boxSizing = 'border-box';


    // 2. add an invisible ATS layer to the cloned element
        // hide it off-screen so it doesn't affect the layout
    const atsLayer = document.createElement('div');
    atsLayer.style.position = 'absolute';
    atsLayer.style.left = '-99999px';
    atsLayer.style.opacity = '0';
    atsLayer.style.pointerEvents = 'none';
    atsLayer.textContent = JSON.stringify(resumeData, null, 2);
    clonedElement.appendChild(atsLayer);


    // 3. append the cloned element to the document so it can be measured/rendered
    document.body.appendChild(clonedElement);


    // 4. adjust icons, bullets, etc. inside the clone only
    adjustIconsAndBullets(clonedElement);


    try {
        // 5. capture the entire cloned element with html2canvas
                    // rely on getBoundingClientRect for the size
        const rect = clonedElement.getBoundingClientRect();
        const effectiveScale = scale ?? 2; // default to 2x scale
        const canvas = await html2canvas(clonedElement, {
            scale: effectiveScale,
            useCORS: true,
            logging: false,
            width: rect.width,
            height: rect.height,
        });


        // 6. find link positions to make them clickable in PDF
                                // apply small y-offset if needed
        const linkPositions = await findLinkPositions(
            clonedElement,
            effectiveScale,
            linkYOffset ?? 2 // default to 2px offset
        );


        // 7. create the PDF exactly the same size as the rendered canvas
            // => no margins => no white borders
        const pdfWidth = canvas.width; // (px)
        const pdfHeight = canvas.height;// (px)
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [pdfWidth, pdfHeight],
            compress: compress, // compress PDF output (optional)
        });


        // 8. insert the ATS text in a minuscule font so that it doesn't distract
                // if PDF readers show fallback text, placing behind the main image
        pdf.setFontSize(2);
        pdf.setTextColor(0, 0, 0);
        pdf.text(atsLayer.textContent || '', 1, 1);


        // 9. place the screenshot (PNG) on top [(0,0) => no border]
        pdf.addImage(
            canvas.toDataURL('image/png', 1.0),
            'PNG',
            0,
            0,
            pdfWidth,
            pdfHeight
        );


        // 10. debugging: draw red boxes around each link if debug is true
        if (debug) {
            pdf.setDrawColor(255, 0, 0);
            pdf.setLineWidth(2);
            linkPositions.forEach((link) => {
                pdf.rect(link.x, link.y, link.width, link.height);
            });
        }


        // 11. make links clickable
        linkPositions.forEach((link) => {
            pdf.link(link.x, link.y, link.width, link.height, {
                url: link.url,
            });
        });


        // 12. save PDF
        pdf.save(filename);
    }
    catch (err) {
        console.error('Error generating PDF:', err);
        throw err;
    } finally { // remove cloned element from the DOM to clean up
        document.body.removeChild(clonedElement);
    }
}