// Live Clock Function
function updateClock() {
    const now = new Date();
    document.getElementById('liveClock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Initial call
