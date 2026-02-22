document.getElementById("addTask").addEventListener("click", addTask);

function addTask() {
 const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;
   
  const li = document.createElement("li");

 if (taskText.trim() === "") {
  alert("Please enter a valid task."); // 
  return;

};

  // circle toggle
  const circle = document.createElement("div"); // create circle div
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
  editBtn.className = "edit-btn"; // add class for styling
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
  
  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(circle); // append circle
  li.appendChild(span); // append task text
  li.appendChild(editBtn); // append edit button
  li.appendChild(deleteBtn); // append delete button

  document.getElementById("taskList").appendChild(li);
  input.value = ""; // clear input field
}
