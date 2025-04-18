// DropboxGallery.tsx
import React, { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';
import { Image, Box, Text } from '@mantine/core';

const DropboxGallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const dbx = new Dropbox({ accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN });

  useEffect(() => {
    // Lade die Dateien von Dropbox
    const fetchImages = async () => {
      try {
        const response = await dbx.filesListFolder({ path: '/hochzeit2025' });

        // Sicherstellen, dass 'entries' existiert
        if (response.entries && Array.isArray(response.entries)) {
          const imageUrls = response.entries
            .filter((entry: any) => entry['.tag'] === 'file')
            .map((file: any) => dbx.filesGetTemporaryLink({ path: file.path_lower }));

          const links = await Promise.all(imageUrls);
          setImages(links.map(link => link.link));
        } else {
          setError("Keine Bilder im Ordner gefunden.");
        }
      } catch (err) {
        setError("Fehler beim Abrufen der Bilder: " + err.message);
        console.error("Fehler beim Abrufen der Bilder:", err);
      }
    };

    fetchImages();
  }, [dbx]);

  return (
    <Box>
      {error ? (
        <Text color="red">{error}</Text>
      ) : images.length === 0 ? (
        <Text>Keine Bilder gefunden.</Text>
      ) : (
        images.map((url, index) => (
          <Image key={index} src={url} alt={`Image ${index + 1}`} />
        ))
      )}
    </Box>
  );
};

export default DropboxGallery;
