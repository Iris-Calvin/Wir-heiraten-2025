import { Dropbox } from 'dropbox';

// Erstelle die Dropbox-Instanz ohne explizite Übergabe von fetch
const dbx = new Dropbox({
  accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,
});

dbx.usersGetCurrentAccount()
  .then(response => console.log("✅ Access Token OK. Angemeldet als:", response.name.display_name))
  .catch(err => console.error("❌ Ungültiger Access Token oder Berechtigungsfehler:", err));

const DropboxUpload = async (file: File) => {
  const UPLOAD_PATH = `/hochzeitsfotos2025/${file.name}`;

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

      // Hier kannst du das komplette Error-Objekt untersuchen
      console.error("Fehlerdetails:", error);
    } else {
      console.error("❌ Fehler beim Hochladen (Details):", error);
    }
    alert(`❌ Fehler beim Hochladen von "${file.name}". Bitte versuche es erneut.`);
  }
};

export default DropboxUpload;

