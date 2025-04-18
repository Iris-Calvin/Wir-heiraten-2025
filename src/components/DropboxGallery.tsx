// DropboxGallery.tsx
import { useState, useEffect } from 'react';
import { Dropbox } from 'dropbox';

const dbx = new Dropbox({ accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN });

const DropboxGallery = () => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    dbx.filesListFolder({ path: '/your-folder-name' }) // Ordnername anpassen
      .then(response => {
        const fileList = response.entries.filter(file => file['.tag'] === 'file');
        setFiles(fileList);
      })
      .catch(error => {
        console.error('Error fetching files from Dropbox:', error);
      });
  }, []);

  const downloadFile = (path: string) => {
    dbx.filesGetTemporaryLink({ path }).then(response => {
      const link = response.link;
      window.open(link, '_blank');
    }).catch(error => {
      console.error('Error downloading file:', error);
    });
  };

  return (
    <div>
      <h2>Fotos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {files.map((file: any) => (
          <div key={file.id} style={{ margin: '10px' }}>
            <img 
              src={file.preview_url}  // Vorschau-Bild
              alt={file.name} 
              width="150" 
              height="150" 
              style={{ cursor: 'pointer' }}
              onClick={() => downloadFile(file.path_display)} // Klick für Download
            />
            <p>{file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropboxGallery;

