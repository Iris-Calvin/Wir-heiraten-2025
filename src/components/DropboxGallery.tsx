// DropboxGallery.tsx
import React, { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';
import { SimpleGrid, Image, Text, Loader, Center } from '@mantine/core';

const DropboxGallery = () => {
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Initialisiere Dropbox
  const accessToken = import.meta.env.VITE_DROPBOX_ACCESS_TOKEN;
  console.log("🔐 Access Token ist:", accessToken);

  const dbx = new Dropbox({
  accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN
});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const folderPath = '/hochzeit2025';

        const list = await dbx.filesListFolder({ path: folderPath });
        const entries = list.entries.filter((entry: any) => entry['.tag'] === 'file');

        if (entries.length === 0) {
          console.log('📂 Keine Bilder im Ordner gefunden.');
          setImageLinks([]);
          setLoading(false);
          return;
        }

        const links: string[] = [];

        for (const file of entries) {
          try {
            const link = await dbx.filesGetTemporaryLink({ path: file.path_lower! });
            links.push(link.link);
          } catch (err) {
            console.error("❌ Fehler beim Abrufen des Bild-Links:", err);
          }
        }

        setImageLinks(links);
        setLoading(false);
      } catch (error: any) {
        console.error("❌ Fehler beim Abrufen der Bilder:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <Center mt="md">
        <Loader />
      </Center>
    );
  }

  if (imageLinks.length === 0) {
    return (
      <Center mt="md">
        <Text color="dimmed">Keine Bilder gefunden 😕</Text>
      </Center>
    );
  }

  return (
    <SimpleGrid cols={3} spacing="md" mt="md">
      {imageLinks.map((link, index) => (
        <Image key={index} src={link} alt={`Bild ${index + 1}`} radius="md" />
      ))}
    </SimpleGrid>
  );
};

export default DropboxGallery;
