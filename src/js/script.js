const body = document.querySelector('body');

const task = document.querySelector('#task');

const addBtn = document.querySelector('#addBtn');

const list = document.querySelector('#list');

const listArr = JSON.parse(localStorage.getItem('listArray')) || [];

addBtn.addEventListener('click', addList);

function addList(e){

  e.preventDefault();
  
  const taskInput = task.value;

  const newList = document.createElement('li');

  newList.textContent = taskInput;

  const delBtn = document.createElement('button');

  delBtn.textContent = "Delete";

  delBtn.classList.add('delBtn')

  newList.append(delBtn);

  list.append(newList);
}