window.onload = function() {
    let addTaskButton = document.querySelector("#addTaskButton") as HTMLButtonElement;
    addTaskButton.onclick = submitTask;
}

/**
 * Function is called when the submit button is clicked.
 * This calls the helper function, getTask, and sends the
 * task to the createTask to be outputted.
 */
function submitTask() {
    console.log("Button Was Clicked")
    
    let currentTask = getTask();
    if (currentTask.trim() != null) {
        console.log(currentTask);
        createTask(currentTask);
    }
    else {
        alert("Task cannot be empty"); // Can add more validation later
    }
}

function getTask() {
    let taskTextBox = document.querySelector("#inputTask") as HTMLInputElement;
    let currentTask:string = taskTextBox.value;
    if (currentTask.trim() == "") {
        alert("Task cannot be empty"); // Can add more validation later
    }
    else {
        taskTextBox.value = "";
        console.log(currentTask);
        return currentTask;
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
    taskDiv.setAttribute("name", "checkDiv")

    // To my knowledge, you can only set one attribute at a time
    let taskCheckInput = document.createElement("input");
    taskCheckInput.setAttribute("class", "form-check-input");
    taskCheckInput.setAttribute("type", "checkbox");
    taskCheckInput.setAttribute("value", "");
    taskCheckInput.setAttribute("name", "checkBox");

    let taskCheckLabel = document.createElement("label");
    taskCheckLabel.setAttribute("class", "form-check-label");
    taskCheckLabel.setAttribute("for", "flexCheckDefault");
    taskCheckLabel.setAttribute("name", "checkLabel");
    taskCheckLabel.innerHTML = currentTask;

    // Yeah next time I'm going to use innerHtml
    let taskDeleteButton = document.createElement("button");
    taskDeleteButton.setAttribute("class", "btn btn-secondary btn-sm");
    taskDeleteButton.setAttribute("id", "deleteButton");
    taskDeleteButton.innerHTML = "X";

    taskDiv.appendChild(taskCheckInput);
    taskDiv.appendChild(taskCheckLabel);
    taskDiv.appendChild(taskDeleteButton);

    document.querySelector("#listContainer").appendChild(taskDiv);

    taskDeleteButton.onclick = function() {
        deleteTask(taskDiv);
    };
}

function deleteTask(taskDiv) {
    taskDiv.remove();
}