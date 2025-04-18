import { Dropbox } from 'dropbox';

// Globaler Fetch (sicherstellen, dass fetch verfügbar ist)
const fetch = window.fetch;

// Testweise: Hardcode des Tokens direkt im Code
const accessToken = "sl.123abc456xyz"; // Dein tatsächlicher Dropbox Token hier, nur zu Testzwecken!

// Initialisiere Dropbox mit dem Hardcode-Token und fetch
const dbx = new Dropbox({
  accessToken: accessToken,
  fetch: fetch,  // Übergib den globalen fetch hier
});

// Teste, ob das Token gültig ist
dbx.usersGetCurrentAccount()
  .then(response => console.log("✅ Access Token OK. Angemeldet als:", response.name.display_name))
  .catch(err => console.error("❌ Ungültiger Access Token oder Berechtigungsfehler:", err));

// Deine Upload-Funktion bleibt unverändert
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
  } catch (error) {
    console.error("❌ Fehler beim Hochladen (Details):", error);
    alert(`❌ Fehler beim Hochladen von "${file.name}". Bitte versuche es erneut.`);
  }
};

export default DropboxUpload;

