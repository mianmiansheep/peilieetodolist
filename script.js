document.getElementById('add-btn').addEventListener('click', addToDo);
document.getElementById('todo-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addToDo();
});

function addToDo() {
    const input = document.getElementById('todo-input');
    const inputValue = input.value.trim();
    
    if (inputValue !== "") {
        const li = document.createElement('li');
        li.textContent = inputValue;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Toggle completion status on click
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteBtn);
        document.getElementById('todo-list').appendChild(li);

        input.value = ""; // Clear input field after adding
    }
}
