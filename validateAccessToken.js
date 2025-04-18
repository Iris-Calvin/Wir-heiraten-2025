// Beispiel für eine einfache Node.js-Anwendung zur Token-Validierung

const fetch = require('node-fetch');  // Stelle sicher, dass `node-fetch` installiert ist
const ACCESS_TOKEN = 'DEIN_DROPBOX_ACCESS_TOKEN';  // Ersetze mit deinem tatsächlichen Access Token

fetch('https://api.dropboxapi.com/2/users/get_current_account', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log('Antwort von Dropbox:', data);
    // Wenn der Token gültig ist, solltest du hier Informationen zu deinem Dropbox-Konto sehen
  })
  .catch(error => {
    console.error('Fehler bei der Token-Validierung:', error);
  });
