const task = document.querySelector('#task');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');
const clearBtn = document.querySelector('#clearBtn');

let listArray = JSON.parse(localStorage.getItem('Data')) || [];
display();

addBtn.addEventListener('click', e => {
    e.preventDefault();
    addTask();
});

function addTask(taskInput){
    taskInput = task.value.trim();

    if(taskInput.length > 0){
      listArray.push(taskInput);

      storeArray(listArray);

      list.append(createList(taskInput));

      task.value = "";
    } else {
      alert('Please Add a Task')
    }
}

function createList(input){
    const newList = document.createElement('li');

    const delBtn = document.createElement('button');

    newList.textContent = input;

    delBtn.textContent = "Delete";

    delBtn.classList.add('delBtn');
    
    newList.append(delBtn);

    delBtn.addEventListener('click', ()=>{
      deleteTask(newList);

    });

    return newList;
}

const deleteTask = item => {
    let deletedItem = item.firstChild.textContent;
    item.remove();
    listArray = listArray.filter(x => x !== deletedItem);
    storeArray(listArray)
}



function storeArray(arr){
    localStorage.setItem('Data',JSON.stringify(arr))
}

function display(){
    listArray.forEach(x =>  list.append(createList(x)))
}

clearBtn.addEventListener('click', () => {
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  listArray = [];
  localStorage.removeItem('Data');
})




