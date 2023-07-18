let todoItemsContainer = document.getElementById('todoItemsContainer');
let addTodoButton = document.getElementById('addTodoButton');
let saveButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage(){
    let stringifiedTodoList = localStorage.getItem("ToboList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if(parsedTodoList === null){
        return[];
    }else{
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();


saveButton.onclick = function(){
    localStorage.setItem("ToboList", JSON.stringify(todoList))
}

addTodoButton.onclick=function(){
    onAddTodo()
}


function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
    let deleteElementIndex = todoList.findIndex(function(eachTodo){
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if(eachTodoId === todoId){
            return true;
        }
        else{
            return false;
        }
    });
    todoList.splice(deleteElementIndex, 1)
}

function onTodoStatusChange(checkboxId, lableId, todoId){
    let checkboxElement = document.getElementById(checkboxId);
    console.log(checkboxElement.checked);

    let labelElemen = document.getElementById(lableId);
    // if(checkboxElement.checked === true){
    //     labelElemen.classList.add("checked")
    // }else{
    //     labelElemen.classList.remove("checked");
    // }
    labelElemen.classList.toggle("checked");
    let todoObjectIndex = todoList.findIndex(function(eachTodo){
        let eachTodoId = "Todo" + eachTodo.uniqueNo;
        if(eachTodoId === todoId){
            return true;
        }
        else{
            return false;
        }
    });
    let todoObject = todoList[todoObjectIndex];
    if(todoObject.isChecked === true){
        todoObject.isChecked = false;
    }
    else{
       todoObject.isChecked = true;
    }
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
inputElement.checked = todo.isChecked;
inputElement.onclick = function(){
    onTodoStatusChange(checkboxId, lableId, todoId);
}
inputElement.classList.add("checkbox-input")
todoElement.appendChild(inputElement);

let labelElement = document.createElement('label');
labelElement.setAttribute = ("for", checkboxId);
labelElement.id = lableId;
labelElement.textContent = todo.text;
if(todo.isChecked === true){
    labelElement.classList.add("checked");
}
todoElement.appendChild(labelElement);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
deleteIcon.onclick = function(){
    onDeleteTodo(todoId);
}
labelElement.appendChild(deleteIcon);

}

function onAddTodo(){
    let todoCount = todoList.length;
    todoCount = todoCount + 1;

    let userInputelement = document.getElementById('todoUserInput');
    let userInputValue = userInputelement.value;
    if(userInputValue === ""){
        alert("Enter Valid Text");
        return;
    }

    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCount,
        isChecked: false
    
    };
    todoList.push(newTodo);
    createAppendTodo(newTodo);
    userInputValue.value = "";
}

for (let eachTodo of todoList){
    createAppendTodo(eachTodo)
}


//Local Storage

// localStorage.setItem("name", "Anji");
// localStorage.setItem("city", "Hyd");
// localStorage.setItem("aadhar", "348519371612");

let name = localStorage.getItem("name");
let city = localStorage.getItem("city");
let aadhar = localStorage.getItem("aadhar");
let occupation = localStorage.getItem("occupation");

console.log(city);
console.log(aadhar);
console.log(name);
console.log(occupation);



let myArray = [1,2,"three", 4,5]
console.log(myArray)
myArray.splice(2,0,"Six",7);
console.log(myArray)
myArray.splice(1,1,"one");
console.log(myArray)

let itemIndex = myArray.findIndex(function(eachItem){
    if(eachItem === "four"){
        return true
    }
    else{
        return false
    }
});
console.log(itemIndex);