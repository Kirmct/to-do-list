// variaveis
const inputElement = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('addBtn');
const tasksContainer = document.getElementById('tasks');

//eventos

addTaskBtn.addEventListener('click', addTask, false);




//funcoes
function addTask() {
    const inputIsValid = validadeInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.classList.add('new-task');
    taskContent.innerText = inputElement.value;

    const taskCheck = document.createElement('input');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.setAttribute('name', "description");
    taskCheck.setAttribute('id', "description");




    taskItemContainer.appendChild(taskCheck);
    taskItemContainer.appendChild(taskContent);

    tasksContainer.appendChild(taskItemContainer);
    console.log(taskItemContainer);

    inputElement.value = "";

}

function validadeInput() {
    if (inputElement.value.trim().length > 0) {
        return true;
    }
    else
        return false;
}
