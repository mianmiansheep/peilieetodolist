document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToList(task));

    addButton.addEventListener('click', addToDo);
    todoInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') addToDo();
    });

    function addToDo() {
        const inputValue = todoInput.value.trim();

        if (inputValue !== "") {
            addTaskToList(inputValue);
            tasks.push(inputValue);
            localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to local storage
            todoInput.value = ""; // Clear input field after adding
        }
    }

    function addTaskToList(task) {
        const li = document.createElement('li');
        li.textContent = task;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
            // Remove task from local storage
            const taskIndex = tasks.indexOf(task);
            if (taskIndex > -1) {
                tasks.splice(taskIndex, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks)); // Update local storage
            }
        });

        // Toggle completion status on click
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
