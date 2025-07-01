const task = document.querySelector('#task');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');

addBtn.addEventListener('click', e => {
    e.preventDefault();
    addTask();
});

const addTask = () => {
    const taskInput = task.value;

    createList(taskInput);

    addToArray(taskInput);

    task.value = "";
}

const createList = (input) => {
    const newList = document.createElement('li');

    const delBtn = document.createElement('button');

    newList.textContent = input;

    delBtn.textContent = "Delete";

    delBtn.classList.add('delBtn');
    
    newList.append(delBtn);
    
    list.append(newList);

    delBtn.addEventListener('click', ()=>{
      deleteTask(newList);
    })
}

const deleteTask = item => {
    item.remove();
}

const addToArray = item => {
  const listArray = [];

  
}