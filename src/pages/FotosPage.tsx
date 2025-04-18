// Fotos.tsx
import React from 'react';
import DropboxUpload from './DropboxUpload'; // Importiere die Upload-Komponente
import DropboxGallery from './DropboxGallery'; // Importiere die Galerie-Komponente

const Fotos = () => {
  return (
    <div>
      <h1>Fotos hochladen und herunterladen</h1>
      
      {/* Upload-Komponente */}
      <DropboxUpload />

      {/* Galerie anzeigen */}
      <DropboxGallery />
    </div>
  );
};

export default Fotos;
