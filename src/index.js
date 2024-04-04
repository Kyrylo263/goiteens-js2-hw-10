// 1.

let counter = 0;

function showMessage() {
    console.log("Повідомлення", counter + 1);
    counter++;

    if (counter === 5) {
        clearInterval(intervalId);
        console.log("Виконання інтервалу завершено.");
    };
};

const intervalId = setInterval(showMessage, 1000);

// 2.

const element = document.querySelector('.element-js');

let angle = 0;

function animateElements() {
    const size = 50 + 20 * Math.sin(angle);
    element.style.width = size + "px";
    element.style.height = size + "px";

    angle += Math.PI / 30;
};

setInterval(animateElements, 500);

// 3.

let score = 0;
let clicks = 0;

const target = document.querySelector(".target-js");

function updateScore() {
    document.querySelector(".score").textContent = score;
};

function updateClicks() {
    document.querySelector(".clicks").textContent = clicks;
};

function increaseScore() {
    score++;
    updateScore();
};

function increaseClicks() {
    clicks++;
    updateClicks();
};

target.addEventListener("click", () => {
    increaseScore();
});

window.addEventListener("click", () => {
    increaseClicks();
});

setTimeout(() => {
    alert("Гра закінчилася! Ваш результат: " + score + " очків за " + clicks + " натискань.");
    clearInterval(interval);
    score = 0;
    clicks = 0;
}, 30000);

const interval = setInterval(() => {
    target.style.left = Math.random() * (window.innerWidth - 100) + "px";
    target.style.top = Math.random() * (window.innerHeight - 100) + "px";
}, 2000);

// 4.

function showMessageAfterDelay() {
    const timeInSeconds = prompt("Введіть час у секундах:");

    const time = parseInt(timeInSeconds);

    if (isNaN(time) || time <= 0) {
        alert("Будь ласка, введіть додатнє число.");
        return;
    };

    setTimeout(() => {
        alert("Час минув!");
    }, time * 1000);
};

showMessageAfterDelay();