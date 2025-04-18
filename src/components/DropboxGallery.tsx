// DropboxGallery.tsx
import React, { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch';
import { SimpleGrid, Image, Text, Loader, Center } from '@mantine/core';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const DropboxGallery = () => {
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const accessToken = import.meta.env.VITE_DROPBOX_ACCESS_TOKEN;

  const dbx = new Dropbox({
    accessToken,
    fetch,
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const folderPath = '/hochzeit2025';
      const list = await dbx.filesListFolder({ path: folderPath });

        if (!list.entries || !Array.isArray(list.entries)) {
          console.error("❌ Unerwartete Antwort von Dropbox:", list);
          setLoading(false);
          return;
        }
        
        const entries = list.entries.filter((entry: any) => entry['.tag'] === 'file');

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
      } catch (error) {
        console.error("❌ Fehler beim Abrufen der Bilder:", error);
      } finally {
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
    <>
      <SimpleGrid cols={3} spacing="md" mt="md">
        {imageLinks.map((link, index) => (
          <Image
            key={index}
            src={link}
            alt={`Bild ${index + 1}`}
            radius="md"
            fit="cover"
            height={200}
            style={{ cursor: 'pointer', objectFit: 'cover' }}
            onClick={() => setOpenedIndex(index)}
          />
        ))}
      </SimpleGrid>

      {openedIndex !== null && (
        <Lightbox
          open
          close={() => setOpenedIndex(null)}
          index={openedIndex}
          slides={imageLinks.map((src) => ({ src }))}
        />
      )}
    </>
  );
};

export default DropboxGallery;
