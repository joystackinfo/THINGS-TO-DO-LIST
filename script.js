const taskInput = document.getElementById("taskInput"); 
const addTaskBtn = document.getElementById("addTask"); 
const taskList = document.getElementById("taskList"); 

function addTask() {
    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = ""; // clear input
    
    let span = document.createElement("span");
    span.innerHTML="&#10006;";
    li.appendChild(span);
}
    // delete button
const delBtn = document.createElement("button");
delBtn.textContent = "Delete";
delBtn.addEventListener("click", () => {
li.remove();
});
li.appendChild(delBtn);