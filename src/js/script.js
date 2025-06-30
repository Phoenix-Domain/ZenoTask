const body = document.querySelector('body');

const task = document.querySelector('#task');

const addTask = document.querySelector('#addBtn');

const list = document.querySelector('#list');
;

let listArr = JSON.parse(localStorage.getItem('listArray')) || [];

addBtn.addEventListener('click', e => {
  e.preventDefault(); //prevent default form behaviour

  let value = task.value.trim(); // get task input

  if (value.length > 0){
    const newList = document.createElement('li'); //create new list

  const delBtn = document.createElement('button');

  delBtn.textContent = "Delete";
  
  delBtn.classList.add('delBtn');

  newList.textContent = value;

  listArr.push(value); // push list into list array

  newList.append(delBtn)

  list.append(newList);


  task.value = ''; //reset input value

  delBtn.addEventListener('click', e => {
      newList.remove();
    })
  } else{
    alert('Please add a task')
  }
  localStorage.setItem('listArray', JSON.stringify(listArr))
})



