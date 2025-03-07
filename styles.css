// Passwortschutz
function checkPassword() {
    const enteredPassword = document.getElementById("password-input").value;
    const correctPassword = "06092025";

    if (enteredPassword === correctPassword) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

// Menü ein- und ausklappen
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Countdown bis zum 6. September 2025, 14:00 Uhr
const countdownDate = new Date("Sep 6, 2025 14:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = days + "T " + hours + "H " + minutes + "M " + seconds + "S ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "Die Hochzeit hat begonnen! 🎉";
    }
}, 1000);

// Foto-Upload
document.getElementById("photo-upload").addEventListener("change", function(event) {
    let preview = document.getElementById("photo-preview");
    preview.innerHTML = "";

    for (let file of event.target.files) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = document.createElement("img");
            img.src = e.target.result;
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
