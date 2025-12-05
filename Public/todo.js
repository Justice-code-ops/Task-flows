const countEl = document.getElementById('task-count')
const searchEl = document.getElementById('search-input')
const inputEl = document.getElementById('task-input')
const emptyEL = document.getElementById('empty-state')
const btnEl = document.getElementById('add-btn')
const listEl = document.getElementById('task-list')
const dateEl = document.getElementById('date')
const clearEL = document.getElementById('clear-btn')

const date = dateEl.textContent = new Date().getFullYear()

btnEl.addEventListener('click', function() {
    const task = inputEl.value.trim()

    if (!task) {
        return alert('Please add a task')
    } else {
        const li = document.createElement('li')
        const span = document.createElement('span')
        const checkbox = document.createElement('input')
        const button = document.createElement('button')

        //set up the elements
        span.textContent = task;
        span.classList.add('task-text')
        button.textContent = 'Delete'
        button.classList.add('delete-btn')
        checkbox.type = "checkbox"
        checkbox.classList.add('task-checkbox')

        //Append Elements to list
        li.appendChild(span)
        li.appendChild(button)
        li.appendChild(checkbox)

        //Append li to listEl
        listEl.appendChild(li)

        //update task count
        countEl.textContent = listEl.children.length()

        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed')
        })
    }
})