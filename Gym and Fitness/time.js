const timer = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let intervalId;
let startTime;
let elapsedTime = 0;

function startTimer() {
    // Get the start time
    startTime = Date.now() - elapsedTime;

    // Start the timer
    intervalId = setInterval(function () {
        // Calculate the elapsed time
        elapsedTime = Date.now() - startTime;

        // Convert the elapsed time to hours, minutes, and seconds
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Display the elapsed time on the timer element
        timer.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000); // Repeat the function every 1000 milliseconds (1 second)
}

function stopTimer() {
    // Stop the timer
    clearInterval(intervalId);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
