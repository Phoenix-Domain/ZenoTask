const task = document.querySelector('#task');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');

const listArray = JSON.parse(localStorage.getItem('Data')) || [];
display();

addBtn.addEventListener('click', e => {
    e.preventDefault();
    addTask();
});

function addTask(){
    const taskInput = task.value;

    createList(taskInput);

    listArray.push(taskInput);

    storeArray(listArray);

    task.value = "";
}

function createList(input){
    const newList = document.createElement('li');

    const delBtn = document.createElement('button');

    newList.textContent = input;

    delBtn.textContent = "Delete";

    delBtn.classList.add('delBtn');
    
    newList.append(delBtn);
    
    list.append(newList);

    delBtn.addEventListener('click', ()=>{
      deleteTask(newList);
    });

    
}

const deleteTask = item => {
    item.remove();
}



function storeArray(arr){
    localStorage.setItem('Data',JSON.stringify(arr))
}

function display(){
    listArray.forEach(x => addTask(x))
}


