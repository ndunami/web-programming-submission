let raceStarted = false;
let raceResults = [];
let startTime = null;
let timerInterval = null;
let elapsedTime = 0;

// Loads user saved data from localStorage
window.addEventListener('load', () => {
  const savedResults = localStorage.getItem('raceResults');
  const savedElapsed = localStorage.getItem('elapsedTime');
  const savedTimer = localStorage.getItem('timerRunning');

  if (savedResults) {
    raceResults = JSON.parse(savedResults);
    displayFinishers();
  }

  if (savedElapsed) {
    elapsedTime = parseInt(savedElapsed);
    document.getElementById('timer').textContent = formatTime(elapsedTime);
  }

  if (savedTimer === 'true') {
    startRace();
  }
});

// Start/pause/resumes my race
document.getElementById('startButton').addEventListener('click', function () {
  if (!timerInterval) {
    startRace();
  }
});

// Stops my race
document.getElementById('stopButton').addEventListener('click', function () {
  stopRace();
});

// Resets the race
document.getElementById('resetButton').addEventListener('click', function () {
  resetRace();
});

// Records a finisher
document.getElementById('recordButton').addEventListener('click', function () {
  if (!startTime && elapsedTime === 0) {
    alert("Start the race first!");
    return;
  }

  const now = Date.now();
  const time = elapsedTime + (startTime ? now - startTime : 0);
  raceResults.push(time);
  saveToLocalStorage(); // Saves after recording a race finisher
  displayFinishers();
});

// Uploads the race results
document.getElementById('uploadButton').addEventListener('click', function () {
  if (raceResults.length === 0) {
    alert('No race results to upload.');
    return;
  }

  fetch('/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(raceResults),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Results uploaded successfully!");
      console.log(data.message);
    })
    .catch((err) => {
      console.error("Error uploading results:", err);
    });
});

// Start or resumes the timer in startRace
function startRace() {
  raceStarted = true;
  startTime = Date.now();
  localStorage.setItem('timerRunning', 'true'); // Marks timer as running
  timerInterval = setInterval(() => {
    const now = Date.now();
    const total = elapsedTime + (now - startTime);
    document.getElementById('timer').textContent = formatTime(total);
  }, 50);
}

// Pauses my timer code
function stopRace() {
  if (!startTime) return;

  elapsedTime += Date.now() - startTime;
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = null;
  localStorage.setItem('timerRunning', 'false'); // Marks timer as stopped
  saveToLocalStorage(); // Saves paused state
}

// Resets everything
function resetRace() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = null;
  elapsedTime = 0;
  raceResults = [];
  raceStarted = false;
  document.getElementById('timer').textContent = "00:00:00:000";
  document.getElementById('finishers').innerHTML = '';
  localStorage.clear(); // Clears saved state
}

// Formats time as HH:MM:SS:MS used for the timer. now fixed to be HH:MM:SS
function formatTime(ms) {
  const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  const milliseconds = String(ms % 1000).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// Displays finisher list
function displayFinishers() {
  const container = document.getElementById('finishers');
  container.innerHTML = '';
  raceResults.forEach((time, i) => {
    const div = document.createElement('div');
    div.className = 'finisher';
    div.textContent = `Runner ${i + 1}: ${formatTime(time)}`;
    container.appendChild(div);
  });
}

// My refresh button to clear the race results and reload the page
document.getElementById('refreshButton').addEventListener('click', () => {
  if (confirm("Are you sure you want to reset the race? This will clear all data.")) {
    resetRace();  // this ensures the timer and race data are cleared first
    document.getElementById('finishers').innerHTML = ''; // Clears the finishers list
    document.getElementById('timer').textContent = "00:00:00:000"; // Resets my timer
  }
});

// Saves all data to localStorage
function saveToLocalStorage() {
  localStorage.setItem('raceResults', JSON.stringify(raceResults));
  localStorage.setItem('elapsedTime', elapsedTime);
}

// Makes header act as a back button
document.getElementById('backButtonHeader').addEventListener('click', () => {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.href = '/'; // fallback to home
  }
});