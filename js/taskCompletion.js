document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.complete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.disabled) return; // Prevent multiple clicks

            const taskTitle = this.closest('.p-5').querySelector('.task-title').innerText;
            alert(`Task Completed: ${taskTitle}`);

            // Task Assigned (Decrease)
            let taskAssignedElement = document.getElementById('taskAssigned');
            if (taskAssignedElement) {
                let taskCount = parseInt(taskAssignedElement.innerText);
                if (taskCount > 0) {
                    taskAssignedElement.innerText = taskCount - 1;
                }
            }

            // Navbar Task Count (Increase)
            let navbarTaskCountElement = document.getElementById('taskCount');
            if (navbarTaskCountElement) {
                let navbarCount = parseInt(navbarTaskCountElement.innerText);
                navbarTaskCountElement.innerText = navbarCount + 1;
            }

            // Activity Log Update
            const logEntry = `<p class="p-2 bg-gray-200 rounded-md my-1">You have completed '${taskTitle}' at ${new Date().toLocaleTimeString()}</p>`;
            let activityLog = document.getElementById('activityLog');
            if (activityLog) {
                activityLog.innerHTML += logEntry;
            }

            // Disable button after first click
            this.disabled = true;
            this.classList.replace('bg-blue-700', 'bg-gray-400');
            this.innerText = "Completed";
        });
    });
});
