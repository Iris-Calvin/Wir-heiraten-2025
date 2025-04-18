// DropboxGallery.tsx
import React, { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch';
import { SimpleGrid, Image, Text, Loader, Center } from '@mantine/core';

const DropboxGallery = () => {
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const accessToken = import.meta.env.VITE_DROPBOX_ACCESS_TOKEN;

  const dbx = new Dropbox({
    accessToken,
    fetch,
  });

  useEffect(() => {
    // Teste die Dropbox-Verbindung
    dbx.usersGetCurrentAccount()
      .then((res) => {
        console.log("✅ Angemeldet als:", res.name?.display_name ?? "Unbekannt");
      })
      .catch((err) => {
        console.error("❌ Access Token ungültig oder abgelaufen:", err);
      });

const fetchImages = async () => {
  try {
    const folderPath = '/hochzeit2025';
    const list = await dbx.filesListFolder({ path: folderPath });

    // Logge die gesamte Antwort, um mehr Details zu erhalten
    console.log('Antwort von Dropbox:', list);

    // Überprüfe, ob "entries" vorhanden sind
    if (!list || !list.entries) {
      console.error('❌ Fehlende "entries" in der Antwort:', list);
      setImageLinks([]);
      setLoading(false);
      return;
    }

    // Filtere nur die Dateien heraus
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
    console.error("❌ Fehler beim Abrufen der Bilder:", error.message || error);
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

