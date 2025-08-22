const form = document.getElementById("task-form");  // to get the form element
const taskinput = document.getElementById("task-input"); //to get the taskinput element
const tasklist = document.getElementById("task-list"); // to get the tasklist element

function addTask(){
    if (taskinput.value === "" ) {
        alert("Please enter a task.");
        return;
   