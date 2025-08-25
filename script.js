const addBtn = document.getElementById("add-task-btn");
const modal = document.getElementById("task-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const saveTaskBtn = document.getElementById("save-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = [];

addBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  taskInput.value = "";
});

saveTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = "";
    modal.style.display = "none";
  }
});

function addTask(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <div>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="completeTask(this)">Complete</button>
    </div>
  `;
  taskList.appendChild(li);
  tasks.push(text);
}

function editTask(btn) {
  const li = btn.parentElement.parentElement;
  const newTask = prompt("Edit task:", li.firstChild.textContent);
  if (newTask) {
    li.firstChild.textContent = newTask;
  }
}

function completeTask(btn) {
  const li = btn.parentElement.parentElement;
  li.classList.add("completed");

  setTimeout(() => {
    taskList.removeChild(li);
    taskList.appendChild(li); // move to bottom
  }, 2000);
}
