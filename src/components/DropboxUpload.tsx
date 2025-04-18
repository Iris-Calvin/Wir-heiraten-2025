import { Dropbox } from 'dropbox';

// Debug: Logge den Access Token (nur lokal verwenden!)
console.log("🔐 VITE_DROPBOX_ACCESS_TOKEN:", import.meta.env.VITE_DROPBOX_ACCESS_TOKEN);

// Erstelle die Dropbox-Instanz ohne explizite Übergabe von fetch
const dbx = new Dropbox({
  accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,
});

dbx.usersGetCurrentAccount()
  .then((res) => {
    if (res?.name?.display_name) {
      console.log("✅ Access Token OK. Angemeldet als:", res.name.display_name);
    } else {
      console.warn("⚠️ Antwort ohne Namen:", res);
    }
  })
  .catch(err => {
    console.error("❌ Ungültiger Access Token oder Berechtigungsfehler:", err);
  });

const DropboxUpload = async (file: File) => {
  const UPLOAD_PATH = `/hochzeit2025/${file.name}`;

  try {
    const response = await dbx.filesUpload({
      path: UPLOAD_PATH,
      contents: await file.arrayBuffer(),
      mode: { '.tag': 'add' },
      autorename: true
    });

    console.log('✅ Datei erfolgreich hochgeladen:', response);
    alert(`✅ "${file.name}" wurde erfolgreich hochgeladen!`);

  } catch (error: any) {
    if (error.response) {
      console.error("❌ Fehler beim Hochladen (Details):", error.response);
      console.error("Fehlercode:", error.status);
      console.error("Fehlermeldung:", error.message);
      console.error("Fehlerdetails:", error);
    } else {
      console.error("❌ Fehler beim Hochladen (Details):", error);
    }

    alert(`❌ Fehler beim Hochladen von "${file.name}". Bitte versuche es erneut.`);
  }
};

export default DropboxUpload;


