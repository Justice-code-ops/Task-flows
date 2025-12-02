const inputEl = document.getElementById('task-input');
const buttonEl = document.querySelector('.task-button');
const taskListEl = document.querySelector('.task-list');
const dateEl = document.getElementById('date');

dateEl.textContent = new Date().getFullYear();

buttonEl.addEventListener('click', function() {
    const task = inputEl.value.trim();
    if (!task) {
        return alert('Please enter a task')
    } else {
        const li = document.createElement('li')
        li.textContent = task
        taskListEl.appendChild(li)
        
        const removeButton = document.createElement('button')
        removeButton.textContent = 'Remove'
        removeButton.className = 'task-button'
        li.appendChild(removeButton)

        const completedButton = document.createElement('button')
        completedButton.textContent = 'Completed'
        completedButton.className = 'task-button'
        li.appendChild(completedButton)
        inputEl.value = '';
    }
})