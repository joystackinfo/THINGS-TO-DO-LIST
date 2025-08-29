document.getElementById("addTask").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // circle toggle
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.addEventListener("click", () => {
    li.classList.toggle("completed"); // strike-through text
    circle.classList.toggle("checked"); // red circle + ✔
  });

  // task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null) {
      span.textContent = newText;
    }
  });

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(circle);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = ""; // clear input field
}
