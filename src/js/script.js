
const task = document.querySelector('#task');

const list = document.querySelector('#list');

const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', addTask)


function addTask (){

  // get task value
  let taskValue = task.value;

  //check if task value is empty
  if(taskValue){
    //create a list
    let newList = document.createElement('li');
    //create a delete button
    let delBtn = document.createElement('button');

    //append "delete" text inside button
    delBtn.textContent = "Delete";

    delBtn.addEventListener('click', function (){
      newList.remove();
    })
    
    //append taskValue to list

    newList.textContent = taskValue;
    //append delete button to list

    newList.appendChild(delBtn)

    //add list to list section

    list.appendChild(newList);

  } else{
    alert ('Please Input a task')
  }
  
}

//todo:add error message