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

    document.querySelector("button").addEventListener("click", checkPassword);

    // Countdown bis zum 6. September 2025, 14:00 Uhr
    const countdownDate = new Date("Sep 6, 2025 14:00:00").getTime();

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

    // Foto-Upload (optional, wenn benötigt)
    const photoUploadInput = document.getElementById("photo-upload");
    if (photoUploadInput) {
        photoUploadInput.addEventListener("change", function (event) {
            const photoPreview = document.getElementById("photo-preview");
            photoPreview.innerHTML = "";

            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const img = document.createElement("img");
                    img.src = e.target.result;
                    photoPreview.appendChild(img);
                };
                reader.readAsDataURL(files[i]);
            }
        });
    }
});
