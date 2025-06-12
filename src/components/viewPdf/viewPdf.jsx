import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Задаем путь к PDF файлу
import samplePdf from './sample.pdf'; // Пример PDF файла

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer(path) {
  const [numPages, setNumPages] = useState(null); // Общее количество страниц
  const [pageNumber, setPageNumber] = useState(1); // Номер текущей страницы

  // Callback для загрузки документа
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Функция для переключения страниц
  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="pdf-viewer">
      <h2>PDF Viewer</h2>
      <Document
        file={path}
        onLoadSuccess={onLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="controls">
        <button onClick={goToPrevPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PdfViewer;
