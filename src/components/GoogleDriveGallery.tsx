// GoogleDriveGallery.tsx
import React, { useEffect, useState } from "react";
import { SimpleGrid, Image, Text, Loader, Center } from "@mantine/core";

const GoogleDriveGallery = () => {
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔑 Google API Key und Folder-ID aus .env
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const folderId = import.meta.env.VITE_GOOGLE_FOLDER_ID;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Dateien im Ordner auflisten
        const res = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`
        );

        const data = await res.json();
        console.log("Google Drive API Antwort:", data);

        if (!data.files || data.files.length === 0) {
          setImageLinks([]);
          setLoading(false);
          return;
        }

        // Nur Bilder zulassen
        const images = data.files.filter((f: any) =>
          f.mimeType.startsWith("image/")
        );

        // Public-View-Links bauen
        const links = images.map(
          (file: any) =>
            `https://drive.google.com/uc?id=${file.id}&export=view`
        );

        setImageLinks(links);
        setLoading(false);
      } catch (err) {
        console.error("❌ Fehler beim Abrufen der Bilder:", err);
        setLoading(false);
      }
    };

    fetchImages();
  }, [apiKey, folderId]);

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

export default GoogleDriveGallery;
