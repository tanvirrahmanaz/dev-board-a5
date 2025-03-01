// Background Color Toggle
document.getElementById('backgroundToggle').addEventListener('click', function() {
    const colors = ['#2A3B69', '#34B78F', '#FF6B4A', '#F5F7FA', '#F8C471', '#5DADE2', '#D7BDE2'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
