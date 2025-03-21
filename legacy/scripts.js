document.addEventListener("DOMContentLoaded", function () {
    // Passwortschutz
    function checkPassword() {
        let enteredPassword = document.getElementById("password-input").value;
        let correctPassword = "0609";  // Passwort "0609"

        if (enteredPassword === correctPassword) {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        } else {
            document.getElementById("error-message").style.display = "block";
        }
    }

    // Login-Button Funktionalität
    document.getElementById("login-button").addEventListener("click", checkPassword);

    // Countdown Timer
    const countdownDate = new Date("2025-09-06T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance <= 0) {
            document.getElementById("countdown-timer").innerHTML = "Die Hochzeit ist heute!";
        } else {
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown-timer").innerHTML = `
                <p>Verbleibende Zeit:</p>
                <p>${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden</p>
            `;
        }
    }

    setInterval(updateCountdown, 1000);

    // Menü-Öffnen/Schließen
    function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.classList.toggle("open");
    }

    // Event-Listener für den Menü-Button
    const menuButton = document.querySelector(".menu-btn");
    menuButton.addEventListener("click", toggleMenu);

    // Foto Upload Handling
    const uploadForm = document.getElementById("upload-form");
    const fileInput = document.getElementById("file-input");
    const uploadedPhotoContainer = document.getElementById("uploaded-photo-container");

    uploadForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Verhindert das Absenden des Formulars

        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
                const img = document.createElement("img");
                img.src = event.target.result;
                uploadedPhotoContainer.innerHTML = ''; // Leert den Container
                uploadedPhotoContainer.appendChild(img); // Fügt das hochgeladene Bild hinzu
            };

            reader.readAsDataURL(file);
        } else {
            alert("Bitte wähle ein Bild aus.");
        }
    });
});
