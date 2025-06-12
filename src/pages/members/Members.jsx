import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';  // Импортируем необходимые компоненты
import '@react-pdf-viewer/core/lib/styles/index.css';  // Импортируем стили для компонента Viewer

const EditorialBoard = ({ language }) => {
  const lang = window.localStorage.getItem("selectedLanguage") || "ru"; // Проверка выбранного языка

  return (
    <div className="max-w-6xl mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
      {/* Используем Worker для загрузки PDF.js worker */}
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={'/public/pdf/About.pdf'} />
      </Worker>
    </div>
  );
};

export default EditorialBoard;
