const messages = [
    "Are you sure?",
    "Really sure??",
    "Pookie please...",
    "If you say no, I will be sad...",
    "I will be very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

const text = "Will you be my Valentine?";
let index = 0;
const header = document.querySelector("h1");
header.textContent = "";

function typeEffect() {
    if (index < text.length) {
        header.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const overlay = document.getElementById('catOverlay');

    // If it's the last message → show cat
    if (messageIndex === messages.length - 1) {
        overlay.classList.remove('hidden');

        // To Reload when clicking overlay
        overlay.addEventListener('click', () => {
            location.reload();
        });

        return;
    }

    noButton.textContent = messages[messageIndex];
    messageIndex++;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}
