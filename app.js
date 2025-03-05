// Disable the button after the first click
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".ButtonC");
  buttons.forEach(button => {
      button.addEventListener("click", function() {
          button.disabled = true; 
         
      });
  });
});

// completed task assigned 

document.addEventListener("DOMContentLoaded", function() {
  const taskAssigned = document.getElementById("taskAssigned");
  const completeButtons = document.querySelectorAll(".ButtonC");
  const TaskComplete = document.getElementById("TaskComplete");
  const completeButton = document.querySelectorAll(".ButtonC");
  
  completeButtons.forEach(button => {
      button.addEventListener("click", function() {
          let count = parseInt(taskAssigned.textContent, 10);
          taskAssigned.textContent = count - 1; 
          alert("Task completed")
      });
  });
  completeButton.forEach(button => {
    button.addEventListener("click", function() {
        let count = parseInt(TaskComplete.textContent, 10);
        TaskComplete.textContent = count + 1; 
    });
});
  
});

document.addEventListener("DOMContentLoaded", function () {
  const completeButtons = document.querySelectorAll(".ButtonC"); // Add a class to your "Complete" buttons
  const activityLog = document.querySelector(".message"); // Target the activity log container

  completeButtons.forEach(button => {
      button.addEventListener("click", function () {
          const taskTime = new Date().toLocaleString(); // Get current time
          const logEntry = document.createElement("p"); // Create new log entry
          logEntry.textContent = `Task completed at ${taskTime}`;
          activityLog.appendChild(logEntry); // Append to the log
      });
  });
});


// clock function
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

