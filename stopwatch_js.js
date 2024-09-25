let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let restartBtn = document.getElementById('restartBtn');
let display = document.getElementById('display');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timerInterval;
let running = false;

function updateDisplay() {
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds;

    display.innerText = `${h}:${m}:${s}:${ms}`;
}

function startStopTimer() {
    if (!running) {
        running = true;
        startStopBtn.innerText = 'Stop';
        timerInterval = setInterval(() => {
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10);
    } else {
        running = false;
        startStopBtn.innerText = 'Start';
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    startStopBtn.innerText = 'Start';
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function restartTimer() {
    resetTimer();
    startStopTimer();
}

startStopBtn.addEventListener('click', startStopTimer);
resetBtn.addEventListener('click', resetTimer);
restartBtn.addEventListener('click', restartTimer);

updateDisplay();
