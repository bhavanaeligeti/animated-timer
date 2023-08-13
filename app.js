var t1 = gsap.timeline();

t1
.to("#fs", {
    height : 0,
    duration : 2,
    ease : Expo.easeInOut
})
.to("#elem", {
    height : "100%",
    duration : 2,
    delay : -2,
    ease : Expo.easeInOut
})
.to("#watch", {
    height : "100%",
    duration : 2,
    delay : -1.6,
    ease : Expo.easeInOut
})



// js for timer

const secondDisplay = document.getElementById('second');
const tensDisplay = document.getElementById('tens');
const startButton = document.getElementById('btn-start');
const stopButton = document.getElementById('btn-stop');
const resetButton = document.getElementById('btn-reset');

let interval;
let tens = 0;
let seconds = 0;

function startTimer() {
    clearInterval(interval);
    interval = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    tens++;
    if (tens >= 100) {
        tens = 0;
        seconds++;
    }
    updateDisplay();
}

function updateDisplay() {
    secondDisplay.textContent = seconds.toString().padStart(2, '0');
    tensDisplay.textContent = tens.toString().padStart(2, '0');
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);