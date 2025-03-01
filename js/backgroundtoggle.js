// Function to generate a random hex color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Background Color Toggle
document.getElementById('backgroundToggle').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomHexColor();
});
