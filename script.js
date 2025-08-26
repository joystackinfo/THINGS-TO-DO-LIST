
document.getElementById("addTask").addEventListener("click", addTask);

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

  // edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  // put everything inside li
  li.appendChild(circle);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
