// DropboxGallery.tsx
// DropboxGallery.tsx
import React, { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';
import { Image } from '@mantine/core';
import { Box } from '@mantine/core';

const DropboxGallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const dbx = new Dropbox({ accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN });

  useEffect(() => {
    // Lade die Dateien von Dropbox
    const fetchImages = async () => {
      try {
        const response = await dbx.filesListFolder({ path: '/hochzeit2025' });
        const imageUrls = response.entries
          .filter((entry: any) => entry['.tag'] === 'file')
          .map((file: any) => dbx.filesGetTemporaryLink({ path: file.path_lower }));
        
        const links = await Promise.all(imageUrls);
        setImages(links.map(link => link.link));
      } catch (error) {
        console.error("Fehler beim Abrufen der Bilder:", error);
      }
    };

    fetchImages();
  }, [dbx]);

  return (
    <Box>
      {images.length === 0 ? (
        <p>Keine Bilder gefunden.</p>
      ) : (
        images.map((url, index) => (
          <Image key={index} src={url} alt={`Image ${index + 1}`} />
        ))
      )}
    </Box>
  );
};

export default DropboxGallery;
