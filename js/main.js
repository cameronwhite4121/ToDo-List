window.onload = function () {
    let addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.onclick = submitTask;
};
function submitTask() {
    console.log("Button Was Clicked");
    let currentTask = getTask();
    if (currentTask.trim() != null) {
        console.log(currentTask);
        createTask(currentTask);
    }
    else {
        alert("Task cannot be empty");
    }
}
function getTask() {
    let taskTextBox = document.querySelector("#inputTask");
    let currentTask = taskTextBox.value;
    if (currentTask.trim() == "") {
        alert("Task cannot be empty");
    }
    else {
        console.log(currentTask);
        return currentTask;
    }
}
function createTask(currentTask) {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "form-check");
    let taskCheckInput = document.createElement("input");
    taskCheckInput.setAttribute("class", "form-check-input");
    taskCheckInput.setAttribute("type", "checkbox");
    taskCheckInput.setAttribute("value", "");
    taskCheckInput.setAttribute("id", "flexCheckDefault");
    let taskCheckLabel = document.createElement("label");
    taskCheckLabel.setAttribute("class", "form-check-label");
    taskCheckLabel.setAttribute("for", "flexCheckDefault");
    taskCheckLabel.innerHTML = currentTask;
    taskDiv.appendChild(taskCheckInput);
    taskDiv.appendChild(taskCheckLabel);
    document.querySelector("#listContainer").appendChild(taskDiv);
}
