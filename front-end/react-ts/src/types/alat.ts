export type IconType=
 | "wordToPDF"
 | "mergePDF"
 | "splitPDF"
 | "compressPDF"
 | "jpgToPDF"
 | "excelToPDF"
 | "pdfToWord"
 | "pdfToJPG"
 | "pdfToExcel"
 | "removeBackground"

export type IconKey = keyof typeof import("../assets/icons").ICON_FILE

export type AlatItem = {
    id: string;
    name: string;
    desc: string;
    category?: "PDF" | "Word" | "Excel" | "JPG";
    icon: IconType;
    iconFileInput:  IconKey;
    accept?: string;
};