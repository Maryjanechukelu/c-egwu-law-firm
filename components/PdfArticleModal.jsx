// components/PdfArticleModal.jsx
"use client";
import React, { useEffect } from "react";
import { Download, Eye, X, FileText } from "lucide-react";
import { Button } from "./ui/button";

export default function PdfArticleModal({ article, open, onOpenChange }) {
  // Close on Escape key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onOpenChange(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open || !article) return null;

  const handleView = () => {
    window.open(article.pdfUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = article.pdfUrl;
    link.download = `${article.slug}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => onOpenChange(false)}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md shadow-xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-2 text-amber-600 mb-4">
            <FileText size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">
              PDF Document
            </span>
          </div>

          <h3
            id="pdf-modal-title"
            className="font-serif text-xl font-bold text-slate-900 mb-2 pr-6 leading-snug"
          >
            {article.title}
          </h3>

          <p className="text-sm text-slate-500 mb-6">
            This article is available as a PDF document.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleView}
              variant="outline"
              className="flex-1 border-slate-200 text-slate-900 hover:text-amber-700"
            >
              <Eye className="mr-2 h-4 w-4" /> View PDF
            </Button>
            <Button
              onClick={handleDownload}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
