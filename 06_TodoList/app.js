let todoItemsContainer = document.getElementById('todoItemsContainer');
let addTodoButton = document.getElementById('addTodoButton');
let todoList = [
    {
        text: 'Learn HTML',
        uniqueNo : 1
    },
    {
        text: 'Learn CSS',
        uniqueNo : 2

    },
    {
        text: 'Learn JavaScript',
        uniqueNo : 3

    },
    {
        text: 'Learn ReactJs',
        uniqueNo : 4

    }
];

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function onTodoStatusChange(checkboxId, lableId){
    let checkboxElement = document.getElementById(checkboxId);
    console.log(checkboxElement.checked);

    let labelElemen = document.getElementById(lableId);
    // if(checkboxElement.checked === true){
    //     labelElemen.classList.add("checked")
    // }else{
    //     labelElemen.classList.remove("checked");
    // }
    labelElemen.classList.toggle("checked");
}

function createAppendTodo (todo){
    let checkboxId = "checkbox"+ todo.uniqueNo;
    let lableId = "label" + todo.uniqueNo;
    let todoId = "tobo" + todo.uniqueNo;

let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row", );
todoElement.id = todoId;
todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement('input');
inputElement.type = "checkbox";
inputElement.id = checkboxId;
inputElement.onclick = function(){
    onTodoStatusChange(checkboxId, lableId);
}
inputElement.classList.add("checkbox-input")
todoElement.appendChild(inputElement);

let labelElement = document.createElement('label');
labelElement.setAttribute = ("for", checkboxId);
labelElement.id = lableId;
labelElement.textContent = todo.text;
todoElement.appendChild(labelElement);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
deleteIcon.onclick = function(){
    onDeleteTodo(todoId);
}
labelElement.appendChild(deleteIcon);

}
for (let eachTodo of todoList){
    createAppendTodo(eachTodo)
}