// Funktion zum Ein- und Ausblenden des Menüs
function toggleMenu() {
    const menu = document.getElementById("menu");
    // Wenn das Menü links außerhalb des Bildschirms ist, dann schiebe es nach rechts
    if (menu.style.left === "-250px") {
        menu.style.left = "0";
    } else {
        menu.style.left = "-250px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const countdownDate = new Date("September 6, 2025 14:00:00").getTime();

    const countdownFunction = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML =
            days + "T " + hours + "H " + minutes + "M " + seconds + "S ";

        if (timeLeft < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown-timer").innerHTML = "Die Hochzeit hat begonnen! 🎉";
        }
    }, 1000);
});
