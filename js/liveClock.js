// Function to update today's date dynamically
function updateDate() {
    const now = new Date();

    // Extract the current day, month, and date
    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' }); // Monday, Tuesday, etc.
    const monthName = now.toLocaleDateString('en-US', { month: 'short' }); // Jan, Feb, Mar...
    const dayNumber = now.getDate(); // 1, 2, 3...
    const year = now.getFullYear(); // 2025

    // Update the HTML elements with today's date
    document.getElementById('dayOfWeek').innerText = dayName + ',';
    document.getElementById('liveDate').innerText = `${monthName} ${dayNumber}, ${year}`;
}

// Run the function on page load
document.addEventListener("DOMContentLoaded", updateDate);
