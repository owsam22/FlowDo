// Sample tasks (later can be from database)
const tasks = [
  { text: "Finish college assignment 📚" },
  { text: "Buy groceries 🛒" },
  { text: "Workout at gym 💪" },
  { text: "Call family ☎️" }
];

const taskContainer = document.getElementById("task-container");

// Inject tasks dynamically
tasks.forEach(task => {
  const div = document.createElement("div");
  div.classList.add("task");
  div.textContent = task.text;
  taskContainer.appendChild(div);
});

// Animated welcome message (rotating quotes)
const messages = [
  "Welcome Back 👋",
  "Let's crush your goals today 🚀",
  "Stay productive, stay happy ✨"
];
let i = 0;
setInterval(() => {
  document.getElementById("welcome-msg").textContent = messages[i];
  i = (i + 1) % messages.length;
}, 4000);
