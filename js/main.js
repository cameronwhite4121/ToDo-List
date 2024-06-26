window.onload = function () {
    let addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.onclick = submitTask;
    getTasksFromStorage();
};
function submitTask() {
    console.log("Button Was Clicked");
    let currentTask = getTask();
    if (currentTask.trim() != null) {
        console.log(currentTask);
        createTask(currentTask);
        addTaskToStorage(currentTask);
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
        taskTextBox.value = "";
        console.log(currentTask);
        return currentTask;
    }
}
function createTask(currentTask) {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "form-check");
    taskDiv.setAttribute("name", "checkDiv");
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
    let taskDeleteButton = document.createElement("button");
    taskDeleteButton.setAttribute("class", "btn btn-secondary btn-sm");
    taskDeleteButton.setAttribute("id", "deleteButton");
    taskDeleteButton.innerHTML = "X";
    taskDiv.appendChild(taskCheckInput);
    taskDiv.appendChild(taskCheckLabel);
    taskDiv.appendChild(taskDeleteButton);
    document.querySelector("#listContainer").appendChild(taskDiv);
    taskDeleteButton.onclick = function () {
        deleteTask(taskDiv, currentTask);
    };
}
function deleteTask(taskDiv, currentTask) {
    taskDiv.remove();
    const TaskStorageKey = "Tasks";
}
function addTaskToStorage(currentTask) {
    const TaskStorageKey = "Tasks";
    let taskData = localStorage.getItem(TaskStorageKey);
    let tasks = [];
    if (taskData != null) {
        tasks = JSON.parse(taskData);
    }
    tasks.push(currentTask);
    taskData = JSON.stringify(tasks);
    localStorage.setItem(TaskStorageKey, taskData);
}
function getTasksFromStorage() {
    const TaskStorageKey = "Tasks";
    let taskData = localStorage.getItem(TaskStorageKey);
    let tasks = [];
    if (taskData != null) {
        tasks = JSON.parse(taskData);
    }
    for (let i = 0; i < tasks.length; i++) {
        let currentTask = tasks[i];
        createTask(currentTask);
    }
}
