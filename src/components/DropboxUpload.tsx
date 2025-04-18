import { Dropbox } from 'dropbox';

const accessToken = "sl.123abc456xyz"; //// Dein tatsächlicher Dropbox Token hier, nur zu Testzwecken! import.meta.env.VITE_DROPBOX_ACCESS_TOKEN;

// DEBUG: Zeige den Token im Dev-Modus
if (!accessToken) {
  console.error("❌ Kein Dropbox-Token gefunden. Hast du `.env` korrekt eingerichtet?");
} else {
  console.log("🔐 Token geladen:", accessToken);
}

// Initialisiere Dropbox
const dbx = new Dropbox({
  accessToken: accessToken,
  fetch, // 👈 wichtig! sonst gibt es Fehler in modernen Browsern/Vite
});

// Test: Token prüfen
dbx.usersGetCurrentAccount()
  .then(response => console.log("✅ Access Token OK. Angemeldet als:", response.name.display_name))
  .catch(err => console.error("❌ Ungültiger Access Token oder Berechtigungsfehler:", err));

// Upload-Funktion
const DropboxUpload = async (file: File) => {
  const UPLOAD_PATH = `/hochzeit2025/${file.name}`;

  try {
    const response = await dbx.filesUpload({
      path: UPLOAD_PATH,
      contents: await file.arrayBuffer(), // ⬅️ richtig!
      mode: { '.tag': 'add' },            // ⬅️ wichtig für Konfliktvermeidung
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
