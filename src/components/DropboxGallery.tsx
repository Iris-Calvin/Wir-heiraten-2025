// DropboxGallery.tsx
import { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';
import { Modal, Image, Box } from '@mantine/core';
import classes from '../css/Fotos.module.css';

const dbx = new Dropbox({ accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN });

const DropboxGallery = () => {
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const [opened, setOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const folderPath = '/hochzeitsfotos2025'; // ❗️Ordnernamen hier setzen
        const response = await dbx.filesListFolder({ path: folderPath });

        const links = await Promise.all(
          response.entries
            .filter((file) => file[".tag"] === "file")
            .map(async (file: any) => {
              const res = await dbx.filesGetTemporaryLink({ path: file.path_display });
              return res.link;
            })
        );

        setImageLinks(links);
      } catch (error) {
        console.error('Fehler beim Laden der Bilder:', error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (link: string) => {
    setSelectedImage(link);
    setOpened(true);
  };

  return (
    <Box className={classes.gallery}>
      {imageLinks.map((link, index) => (
        <Box
          key={index}
          className={classes.imageWrapper}
          onClick={() => handleImageClick(link)}
        >
          <Image src={link} className={classes.image} alt={`Bild ${index + 1}`} />
        </Box>
      ))}

      <Modal opened={opened} onClose={() => setOpened(false)} size="xl" centered>
        {selectedImage && <Image src={selectedImage} alt="Großansicht" />}
      </Modal>
    </Box>
  );
};

export default DropboxGallery;
