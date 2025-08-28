
document.getElementById("addTask").addEventListener("click", addTask);  // show add task button

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return; // stop empty tasks

  const li = document.createElement("li");

  // circle toggle
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // delete button 🗑️
  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️ Delete";
  delBtn.addEventListener("click", () => {
    li.remove();  // removes the whole <li>
  });
  //edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️ Edit";
  editBtn.addEventListener("click", () => {
    const newTaskText = prompt("Edit task:", span.textContent);
