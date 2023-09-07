// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const millisecondsElement = document.getElementById("milliseconds");
    const startButton = document.getElementById("B1");
    const stopButton = document.getElementById("B2");
    const resetButton = document.getElementById("B3");
  
    let timerInterval;
    let startTime;
    let elapsedTime = 0;
    let isRunning = false;
  
    // Function to format time values (add leading zeros)
    function formatTime(value) {
      return value < 10 ? "0" + value : value;
    }
  
    // Update the stopwatch display
    function updateDisplay() {
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      const milliseconds = elapsedTime % 1000;
  
      minutesElement.textContent = formatTime(minutes);
      secondsElement.textContent = formatTime(seconds);
      millisecondsElement.textContent = formatTime(milliseconds);
    }
  
    // Event listener for the Start button
    startButton.addEventListener("click", function () {
      if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function () {
          elapsedTime = Date.now() - startTime;
          updateDisplay();
        }, 10);
        isRunning = true;
      }
    });
  
    // Event listener for the Stop button
    stopButton.addEventListener("click", function () {
      if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
      }
    });
  
    // Event listener for the Reset button
    resetButton.addEventListener("click", function () {
      clearInterval(timerInterval);
      isRunning = false;
      elapsedTime = 0;
      updateDisplay();
    });
  });