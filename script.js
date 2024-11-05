// Countdown Timer
const countdownDate = new Date("November 16, 2024 00:00:00").getTime();
const countdownTimer = document.getElementById("countdown-timer");

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        countdownTimer.innerHTML = "Happy Birthday, Kee!";
    }
}, 1000);

// Show Secret Message
function showSecretMessage() {
    const messageBox = document.getElementById("secret-message-box");
    messageBox.classList.toggle("hidden");
}

// Open Virtual Gift
function openGift() {
    const giftMessageBox = document.getElementById("gift-message-box");
    giftMessageBox.innerHTML = "I hope you enjoy your special day! Here's a virtual hug! 🤗 and you deserve the world, Kee! 🌍";
}

// Flower Animation
function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${Math.random() * 2 + 3}s`;
    flower.textContent = "🌸";
    document.getElementById("flower-animation").appendChild(flower);
    setTimeout(() => flower.remove(), 5000);
  }
  setInterval(createFlower, 500);

// Show Random Quote
function showRandomQuote() {
    const quotes = [
        "Wishing you a day filled with love and happiness!",
        "May all your dreams come true on your special day!",
        "Here's to you on your birthday, Kee! Enjoy every moment!",
        "Cheers to another year of fabulous you!",
        "You make the world a better place just by being in it!"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("random-quote").innerText = quotes[randomIndex];
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// Background Music Control
const bgMusic = document.getElementById("bg-music");

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
}

// Confetti Animation
function startConfetti() {
    const container = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 1 + 1 + 's';
        confetti.style.opacity = Math.random();
        container.appendChild(confetti);
    }
}

startConfetti();
