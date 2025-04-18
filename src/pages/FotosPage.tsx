// Fotos.tsx
import React from 'react';
import DropboxUpload from './DropboxUpload';
import DropboxGallery from './DropboxGallery';
import styles from './Fotos.module.css'; // NEU

const Fotos = () => {
  return (
    <div>
      <h1>Fotos hochladen und herunterladen</h1>

      {/* Upload-Bereich mit Style */}
      <div className={styles.uploadContainer}>
        <p className={styles.uploadText}>Teile deine schönsten Erinnerungen!</p>
        <DropboxUpload />
      </div>

      {/* Galerie mit Style */}
      <div className={styles.gallery}>
        <DropboxGallery />
      </div>
    </div>
  );
};

export default Fotos;
