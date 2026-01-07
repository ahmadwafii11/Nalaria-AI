import wordToPDF from "./icon word to pdf.svg"
import mergePDF from "./icon merge pdf.svg"
import splitPDF from "./icon split pdf.svg"
import compressPDF from "./icon compress pdf.svg"
import jpgToPDF from "./icon jpg to pdf.svg"
import excelToPDF from "./icon excel to pdf.svg"
import pdfToWord from "./icon  pdf to word.svg"
import pdfToJPG from "./icon pdf to jpg.svg"
import pdfToExcel from "./icon pdf to excel.svg"
import removeBackground from "./icon remove background.svg"

import word from "./icon word.svg"
import pdf from "./icon pdf.svg"
import jpg from "./icon jpg.svg"
import excel from "./icon excel.svg"

export const ICON_MAP = {
    wordToPDF           : wordToPDF,
    mergePDF            : mergePDF,
    splitPDF            : splitPDF,
    compressPDF         : compressPDF,
    jpgToPDF            : jpgToPDF,
    excelToPDF          : excelToPDF,
    pdfToWord           : pdfToWord,
    pdfToJPG            : pdfToJPG,
    pdfToExcel          : pdfToExcel,
    removeBackground    : removeBackground
}

export const ICON_FILE = {
    word,
    pdf,
    jpg,
    excel
} as const 