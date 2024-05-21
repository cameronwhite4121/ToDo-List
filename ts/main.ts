window.onload = function() {
    let addTaskButton = document.querySelector("#addTaskButton") as HTMLButtonElement;
    addTaskButton.onclick = submitTask;
}

function submitTask() {
    console.log("Button Was Clicked")
    let taskTextBox = document.querySelector("#inputTask") as HTMLInputElement;
    let currentTask = taskTextBox.value;
    if (currentTask.trim() != "") {
        console.log(currentTask);
        createTask(currentTask);
    }
    else {
        alert("Task cannot be empty"); // Can add more validation later
    }
}

/**
 * Uses DOM manipulation in conjunction with bootstrap to inject
 * the created task onto the webpage. 
 * @param currentTask 
 */
function createTask(currentTask) {

    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "form-check")
    
    // To my knowledge, you can only set one attribute at a time
    let taskCheckInput = document.createElement("input");
    taskCheckInput.setAttribute("class", "form-check-input");
    taskCheckInput.setAttribute("type", "checkbox");
    taskCheckInput.setAttribute("value", "");
    taskCheckInput.setAttribute("id", "flexCheckDefault");

    let taskCheckLabel = document.createElement("label");
    taskCheckLabel.setAttribute("class", "form-check-label");
    taskCheckLabel.setAttribute("for", "flexCheckDefault");

}