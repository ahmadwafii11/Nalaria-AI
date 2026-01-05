import type { AlatItem } from "../types/alat";


export const alatList: AlatItem[] = [
    {
            id: "1", 
            name: "Word to PDF",
            desc: "Membantu Anda dalam mengkonversi dokumen format Word ke dalam bentuk dokumen format PDF.",
            category: "PDF",
            icon: "wordToPDF"

        },
        {
            id: '2', 
            name: 'Merge PDF',
            desc: "Membantu Anda dalam menyatukan halaman pada dokumen berformat PDF yang terpisah.",
            category: "PDF", 
            icon : "mergePDF"
        },
        {
            id: '3', 
            name: 'Split PDF',
            desc: "Membantu Anda dalam memisahkan halaman pada dokumen berformat PDF yang terdapat dalam satu file.",
            category: "PDF", 
            icon : "splitPDF"
        },
        {
            id: '4', 
            name: 'Compress PDF',
            desc: "Membantu Anda dalam mengurangi ukuran file dalam bentuk dokumen format PDF.",
            category: "PDF", 
            icon : "compressPDF"

        },
        {
            id: "5", 
            name: "JPG to PDF",
            desc: "Membantu Anda dalam mengkonversi dokumen format JPG ke dalam bentuk dokumen format PDF.",
            category: "PDF", 
            icon: "jpgToPDF"
        },
        {
            id: "6", 
            name: "Excel to PDF",
            desc: "Membantu Anda dalam mengkonversi dokumen format Excel ke dalam bentuk dokumen format PDF.",
            category: "PDF",
            icon: "excelToPDF"
        },
        {
            id: "7", 
            name: "PDF to Word",
            desc: "Membantu Anda dalam mengkonversi dokumen format PDF ke dalam bentuk dokumen format Word.",
            category: "Word",
            icon: "pdfToWord"
        },
        {
            id: "8", 
            name: "PDF to JPG",
            desc: "Membantu Anda dalam mengkonversi dokumen format PDF ke dalam bentuk dokumen format JPG.",
            category: "JPG",
            icon : "pdfToJPG"
        },
        {
            id: "9", 
            name: "PDF to Excel",
            desc: "Membantu Anda dalam mengkonversi dokumen format PDF ke dalam bentuk dokumen format Excel.",
            category: "Excel",
            icon: "pdfToExcel"
        },
        {
            id: "10", 
            name: "Remove Background",
            desc: "Membantu Anda dalam menghapus background atau latar belakang pada file berformat JPG, PNG.",
            category: "JPG",
            icon: "removeBackground"
        }
];