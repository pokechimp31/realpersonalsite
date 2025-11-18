// -------------------------------
// ProtIV Domain Cost Tracker
// Persistent, real-time version
// -------------------------------

// 1. Set the domain purchase date
const purchaseDate = new Date("2025-11-17T20:00:00"); // November 17, 2025, 8:00 PM

// 2. Total seconds per cent
const totalSecondsPerCent = 8 * 3600 + 38 * 60 + 41; // 8 hours, 38 minutes, 41 seconds

// 3. Get HTML elements
const amountElement = document.getElementById('amount');
const countdownElement = document.getElementById('countdown');

// 4. Format seconds as HH:MM:SS
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

// 5. Update the tracker
function updateTracker() {
    const now = new Date();
    const secondsElapsed = (now - purchaseDate) / 1000;

    // Calculate total cents spent
    const centsSpent = Math.floor(secondsElapsed / totalSecondsPerCent);
    const amount = (centsSpent * 0.01).toFixed(2);
    amountElement.textContent = amount;

    // Calculate countdown to next cent
    const secondsIntoCurrentCent = secondsElapsed % totalSecondsPerCent;
    const secondsRemaining = totalSecondsPerCent - secondsIntoCurrentCent;
    countdownElement.textContent = formatTime(secondsRemaining);
}

// 6. Update every second
setInterval(updateTracker, 1000);

// 7. Run immediately on page load
updateTracker();
