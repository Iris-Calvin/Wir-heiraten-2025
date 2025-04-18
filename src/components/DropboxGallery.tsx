// DropboxGallery.tsx
import { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';  // Dropbox SDK
import { Image, Box, Grid, Loader } from '@mantine/core';

const DropboxGallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      const dbx = new Dropbox({
        accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,  // Sicherstellen, dass der Token richtig geladen wird
        fetch: window.fetch,  // fetch explizit übergeben
      });

      try {
        // Liste der Ordner und Dateien abrufen
        const response = await dbx.filesListFolder({ path: '/hochzeit2025' });

        // Nur Bilder extrahieren
        const imageUrls = response.entries
          .filter((entry: any) => entry['.tag'] === 'file' && entry.name.match(/\.(jpg|jpeg|png|gif)$/i))
          .map((entry: any) => `https://www.dropbox.com/s/${entry.id}?dl=1`);

        setImages(imageUrls);
      } catch (error) {
        console.error("❌ Fehler beim Abrufen der Bilder:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <Text size="lg" weight={500}>
        Fotos aus Dropbox:
      </Text>
      <Grid gutter="sm">
        {images.map((url, index) => (
          <Grid.Col span={4} key={index}>
            <Image src={url} alt={`Foto ${index + 1}`} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default DropboxGallery;
