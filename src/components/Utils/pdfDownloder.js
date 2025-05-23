import { PDFDocument } from "pdf-lib";
import { toPng } from "html-to-image";

export const handleDownloadPDF = async (contentRef, fileName) => {
  const element = contentRef.current;
  if (!element) return;
  try {
    const dataUrl = await toPng(element, {
      filter: (node) =>
        !(node.classList && node.classList.contains("no-print")),
      pixelRatio: 2,
    });
    const pdfDoc = await PDFDocument.create();
    const pngImageBytes = await fetch(dataUrl).then((res) => res.arrayBuffer());
    const pngImage = await pdfDoc.embedPng(pngImageBytes);
    const pngDims = pngImage.scale(1);
    const page = pdfDoc.addPage([pngDims.width, pngDims.height]);
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: pngDims.width,
      height: pngDims.height,
    });
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0];
    const cleanName = fileName.replace(/\s+/g, "");
    link.download = `${cleanName}-${dateStr}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Failed to create PDF:", error);
  }
};
