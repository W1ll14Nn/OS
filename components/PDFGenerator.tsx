'use client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default async function generatePDF(elementId: string, fileName = 'os.pdf'){
  const el = document.getElementById(elementId) as HTMLElement | null;
  if(!el) return;
  const canvas = await html2canvas(el, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = 190;
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, pdfHeight);
  pdf.save(fileName);
}
