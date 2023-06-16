// // This function edits the task with the given id.
// function editTask(id) {
//     var task = document.getElementById(id);
  
//     // Open a modal dialog.
//     var dialog = document.getElementById("edit-task-dialog");
//     dialog.style.display = "block";
  
//     // Set the task name and due date in the dialog.
//     var taskName = task.querySelector(".task-name").innerText;
//     var taskDueDate = task.querySelector(".task-due-date").innerText;
//     document.getElementById("edit-task-name").value = taskName;
//     document.getElementById("edit-task-due-date").value = taskDueDate;
//   }
  
//   // This function deletes the task with the given id.
//   function deleteTask(id) {
//     var task = document.getElementById(id);
  
//     // Remove the task from the list.
//     task.remove();
//   }
  
//   // This function sets a reminder for the task with the given id.
//   function setReminder(id) {
//     var task = document.getElementById(id);
  
//     // Get the task's due date.
//     var dueDate = task.querySelector(".task-due-date").innerText;
  
//     // Create a reminder.
//     var reminder = new Reminder(dueDate);
  
//     // Schedule the reminder.
//     reminder.schedule();
//   }
  
//   // This function is called when the edit task button is clicked.
//   document.querySelectorAll(".edit-task").forEach(function(button) {
//     button.onclick = editTask;
//   });
  
//   // This function is called when the delete task button is clicked.
//   document.querySelectorAll(".delete-task").forEach(function(button) {
//     button.onclick = deleteTask;
//   });
  
//   // This function is called when the checkbox is checked.
//   document.querySelectorAll(".reminder-checkbox").forEach(function(checkbox) {
//     checkbox.onclick = setReminder;
//   });
  

// This function adds a new task to the tasks list.
// This function adds a new task to the tasks list.
// This function adds a new task to the tasks list.
// This function adds a new task to the tasks list.
// This function adds a new task to the tasks list.
// This function adds a new task to the tasks list.












// function addTask() {
//   // Get the task name, due date, and priority from the user.
//   var taskName = document.getElementById("task-name").value;
//   var taskDueDate = document.getElementById("task-due-date").value;
//   var taskPriority = document.getElementById("priority").value;

//   // Create a new task element.
//   var task = document.createElement("li");
//   task.innerText = taskName + " - " + taskDueDate + " - " + taskPriority;

//   // Append the task element to the new task section.
//   var newTasksSection = document.getElementById("tasks").getElementsByTagName("ul")[0];
//   newTasksSection.appendChild(task);

//   // Hide the "No new task" message if there are new tasks.
//   var noNewTaskMessage = document.getElementById("no-new-task");
//   if (noNewTaskMessage) {
//     noNewTaskMessage.style.display = "none";
//   }
// }

// // This function is called when the add task button is clicked.
// var addTaskButton = document.getElementById("add-task");
// addTaskButton.onclick = addTask;
// // addTaskButton.onclick(addTask);


//   // This function marks the task as completed.
//   function markTaskCompleted(task) {
//     // Remove the task from the tasks list.
//     task.remove();
  
//     // Append the task to the completed tasks list.
//     var completedTasksSection = document.getElementById("completed-tasks").getElementsByTagName("ul")[0];
//     completedTasksSection.appendChild(task);
  
//     // Hide the "No completed task" message if there are completed tasks.
//     var noCompletedTaskMessage = document.getElementById("no-completed-task");
//     if (noCompletedTaskMessage) {
//       noCompletedTaskMessage.style.display = "none";
//     }
//   }
  

//   // This function is called when the delete button is clicked.
//   document.querySelectorAll(".delete-task").forEach(function(button) {
//     button.onclick = function(e) {
//       // Prevent the event from bubbling up to the parent element.
//       e.stopPropagation();

//       // Get the task that the delete button is associated with.
//       var task = this.parentElement;

//       // Mark the task as completed.
//       markTaskCompleted(task);
//     };
//   });
  




//V3


// Counter to generate unique IDs for tasks
let taskIdCounter = 0;

function createTaskRow(taskId, taskName, taskDueDate, taskPriority) {
  const row = document.createElement("tr");
  
  const idCell = document.createElement("td");
  idCell.textContent = taskId;
  
  const nameCell = document.createElement("td");
  nameCell.textContent = taskName;
  
  const dateCell = document.createElement("td");
  dateCell.textContent = taskDueDate;
  
  const priorityCell = document.createElement("td");
  priorityCell.textContent = taskPriority;
  
  const actionsCell = document.createElement("td");
  
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", function() {
    markTaskCompleted(row);
  });
  
  const redoButton = document.createElement("button");
  redoButton.textContent = "Redo";
  redoButton.style.display = "none";
  redoButton.addEventListener("click", function() {
    redoTask(row);
  });
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    deleteTask(row);
  });
  
  actionsCell.appendChild(completeButton);
  actionsCell.appendChild(redoButton);
  actionsCell.appendChild(deleteButton);
  
  row.appendChild(idCell);
  row.appendChild(nameCell);
  row.appendChild(dateCell);
  row.appendChild(priorityCell);
  row.appendChild(actionsCell);
  
  return row;
}

function addTask() {
  // Get the task name, due date, and priority from the user.
  var taskName = document.getElementById("task-name").value;
  var taskDueDate = document.getElementById("task-due-date").value;
  var taskPriority = document.getElementById("priority").value;

  // Generate a unique ID for the task
  const taskId = ++taskIdCounter;

  // Create a new task row
  var taskRow = createTaskRow(taskId, taskName, taskDueDate, taskPriority);

  // Append the task row to the tasks table
  document.getElementById("tasks").appendChild(taskRow);

  // Hide the "No new task" message if there are new tasks
  var noNewTaskMessage = document.getElementById("no-new-task");
  if (noNewTaskMessage) {
    noNewTaskMessage.style.display = "none";
  }
  
  // Clear the input fields
  document.getElementById("task-name").value = "";
  document.getElementById("task-due-date").value = "";
  document.getElementById("priority").value = "1";
}

function markTaskCompleted(taskRow) {
  // Switch the buttons
  const completeButton = taskRow.querySelector("button:nth-child(1)");
  const redoButton = taskRow.querySelector("button:nth-child(2)");
  const deleteButton = taskRow.querySelector("button:nth-child(3)");
  
  completeButton.style.display = "none";
  redoButton.style.display = "inline-block";
  deleteButton.style.display = "none";
  
  // Move the task row to the completed tasks table
  document.getElementById("completed-tasks").appendChild(taskRow);
  
  // Update the task ID numbering
  updateTaskIds();
  
  // Hide the "No completed task" message if there are completed tasks
  var noCompletedTaskMessage = document.getElementById("no-completed-task");
  if (noCompletedTaskMessage) {
    noCompletedTaskMessage.style.display = "none";
  }
}

function redoTask(taskRow) {
  // Switch the buttons
  const completeButton = taskRow.querySelector("button:nth-child(1)");
  const redoButton = taskRow.querySelector("button:nth-child(2)");
  const deleteButton = taskRow.querySelector("button:nth-child(3)");
  
  completeButton.style.display = "inline-block";
  redoButton.style.display = "none";
  deleteButton.style.display = "inline-block";
  
  // Move the task row back to the new tasks table
  document.getElementById("tasks").appendChild(taskRow);
  
  // Update the task ID numbering
  updateTaskIds();
  
  // Hide the "No new task" message if there are new tasks
  var noNewTaskMessage = document.getElementById("no-new-task");
  if (noNewTaskMessage) {
    noNewTaskMessage.style.display = "none";
  }
}

function deleteTask(taskRow) {
  // Remove the task row from the table
  taskRow.remove();
  
  // Update the task ID numbering
  updateTaskIds();
}

function updateTaskIds() {
  const tasksTable = document.getElementById("tasks-table");
  const completedTasksTable = document.getElementById("completed-tasks-table");
  
  // Update the IDs in the "New Tasks" table
  const tasksRows = tasksTable.querySelectorAll("tbody tr");
  tasksRows.forEach((row, index) => {
    row.querySelector("td:nth-child(1)").textContent = index + 1;
  });
  
  // Update the IDs in the "Completed Tasks" table
  const completedTasksRows = completedTasksTable.querySelectorAll("tbody tr");
  completedTasksRows.forEach((row, index) => {
    row.querySelector("td:nth-child(1)").textContent = index + 1;
  });
  
  // Show the "No new task" message if there are no new tasks
  const noNewTaskMessage = document.getElementById("no-new-task");
  if (tasksRows.length === 0 && noNewTaskMessage) {
    noNewTaskMessage.style.display = "block";
  }
  
  // Show the "No completed task" message if there are no completed tasks
  const noCompletedTaskMessage = document.getElementById("no-completed-task");
  if (completedTasksRows.length === 0 && noCompletedTaskMessage) {
    noCompletedTaskMessage.style.display = "block";
  }
}

// This function is called when the add task button is clicked.
var addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", addTask);
