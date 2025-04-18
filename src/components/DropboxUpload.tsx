import { Dropbox } from 'dropbox';

const dbx = new Dropbox({ accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN });

// Teste, ob Token gültig ist (optional für Debug)
dbx.usersGetCurrentAccount()
  .then(response => console.log("✅ Access Token OK. Angemeldet als:", response.name.display_name))
  .catch(err => console.error("❌ Ungültiger Access Token oder Berechtigungsfehler:", err));

const DropboxUpload = async (file: File) => {
  const UPLOAD_PATH = `/Hochzeit2025/${file.name}`;

  try {
    const response = await dbx.filesUpload({
      path: UPLOAD_PATH,
      contents: await file.arrayBuffer(),      // <- WICHTIG!
      mode: { '.tag': 'add' },                 // <- WICHTIG!
      autorename: true
    });

    console.log('✅ Datei erfolgreich hochgeladen:', response);
    console.log("🔍 Datei:", file);
    console.log("📂 Upload-Pfad:", UPLOAD_PATH);
    alert(`✅ "${file.name}" wurde erfolgreich hochgeladen!`);
  } catch (error) {
    console.error("❌ Fehler beim Hochladen (Details):", error);
    alert(`❌ Fehler beim Hochladen von "${file.name}". Bitte versuche es erneut.`);
  }
};

export default DropboxUpload;
