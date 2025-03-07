document.addEventListener("DOMContentLoaded", function () {
    // Passwortschutz
    function checkPassword() {
        let enteredPassword = document.getElementById("password-input").value;
        let correctPassword = "0609";

        if (enteredPassword === correctPassword) {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        } else {
            document.getElementById("error-message").style.display = "block";
        }
    }

    document.querySelector("button").addEventListener("click", checkPassword);

    // Countdown zur Hochzeit
    function updateCountdown() {
        const weddingDate = new Date("2025-09-06T14:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML =
            `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();

    // Menü-Funktion
    function toggleMenu() {
        let menu = document.getElementById("menu");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
});
