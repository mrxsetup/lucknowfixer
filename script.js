// Countdown
let sec = 60;
const timer = document.getElementById("timer");
setInterval(() => {
    timer.textContent = "0:" + String(sec).padStart(2, "0");
    if (sec > 0) sec--;
}, 1000);

// League logo changer
const logos = [
    'assets/logo1.png',
    'assets/logo2.png',
    'assets/logo3.png'
];

let i = 0;
const logoEl = document.getElementById("leagueLogo");

setInterval(() => {
    i = (i + 1) % logos.length;
    logoEl.style.animation = "none";
    void logoEl.offsetWidth;
    logoEl.src = logos[i];
    logoEl.style.animation = "logoSlide .7s ease";
}, 2000);