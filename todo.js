let tasks = [];

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${task}<span><button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${index})">Delete</button></span>`;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value !== '') {
        tasks.push(taskInput.value);
        taskInput.value = '';
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}