import { Dropbox } from 'dropbox';

// Hole das Access Token aus deiner .env-Datei (funktioniert mit Vite)
const dbx = new Dropbox({ accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN });

const DropboxUpload = async (file: File) => {
  const UPLOAD_PATH = `/Hochzeit2025/${file.name}`; // <-- Du kannst diesen Ordnernamen ändern

  try {
    const response = await dbx.filesUpload({
      path: UPLOAD_PATH,
      contents: file,
      mode: 'add', // 'add' = nicht überschreiben, sondern umbenennen falls vorhanden
      autorename: true
    });

    console.log('✅ Datei erfolgreich hochgeladen:', response);
    console.log("🔍 Datei:", file);
    console.log("📂 Upload-Pfad:", `/Hochzeit2025/${file.name}`);
    alert(`✅ "${file.name}" wurde erfolgreich hochgeladen!`);
  } catch (error) {
    console.error('❌ Fehler beim Hochladen:', error);
    alert(`❌ Fehler beim Hochladen von "${file.name}". Bitte versuche es erneut.`);
  }
};

export default DropboxUpload;
