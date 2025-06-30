const body = document.querySelector('body');

const task = document.querySelector('#task');

const addTask = document.querySelector('#addBtn');

const list = document.querySelector('#list')

addBtn.addEventListener('click', e => {
  e.preventDefault(); //prevent default form behaviour

  const value = task.value; // get task input
  
  let newList = document.createElement('li'); //create new list

  newList.textContent = value;

  list.append(newList);

  task.value = ''; //reset input value
})