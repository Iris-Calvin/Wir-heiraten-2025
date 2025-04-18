// DropboxGallery.tsx
import { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';
import styles from './Fotos.module.css';

const dbx = new Dropbox({ accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN });

interface FileMetadata {
  id: string;
  name: string;
  path_display: string;
  preview_url: string;
}

const DropboxGallery = () => {
  const [files, setFiles] = useState<FileMetadata[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await dbx.filesListFolder({ path: '/your-folder-name' }); // TODO: Ordnername anpassen

        const entries = res.result.entries.filter(
          (entry) => entry['.tag'] === 'file'
        );

        const filesWithLinks: FileMetadata[] = await Promise.all(
          entries.map(async (file: any) => {
            const linkRes = await dbx.filesGetTemporaryLink({ path: file.path_display });
            return {
              id: file.id,
              name: file.name,
              path_display: file.path_display,
              preview_url: linkRes.result.link,
            };
          })
        );

        setFiles(filesWithLinks);
      } catch (error) {
        console.error('Fehler beim Laden der Dropbox-Dateien:', error);
      }
    };

    fetchFiles();
  }, []);

  const downloadFile = async (path: string) => {
    try {
      const res = await dbx.filesGetTemporaryLink({ path });
      window.open(res.result.link, '_blank');
    } catch (error) {
      console.error('Download fehlgeschlagen:', error);
    }
  };

  return (
    <div className={styles.gallery}>
      {files.map((file) => (
        <img
          key={file.id}
          className={styles.image}
          src={file.preview_url}
          alt={file.name}
          onClick={() => downloadFile(file.path_display)}
        />
      ))}
    </div>
  );
};

export default DropboxGallery;


