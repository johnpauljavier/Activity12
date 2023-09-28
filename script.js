let inputField = document.querySelector('#todoInput');
let button = document.querySelector('#addTask');
let taskList = document.querySelector('#taskList');


button.addEventListener('click', function () {
if(inputField.value != ""){

    
    let inputValue = inputField.value;
    let listItem = document.createElement('li');
    let removeButton = document.createElement("button");    
   
    listItem.textContent = inputValue;  // assigning the inputValue to listItem variable
    removeButton.innerHTML = "x";

    // Append the list item to the task list
    taskList.appendChild(listItem);
    listItem.appendChild(removeButton);
    
    
    listItem.addEventListener('click', function(){
        listItem.classList.toggle('done');
    });

    removeButton.addEventListener('click', function(){
        taskList.removeChild(listItem);
    });

} else{
    alert("Please enter a task");
}
});
