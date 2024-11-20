let todoList = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (todoItem && todoDate) {
    todoList.push({ task: todoItem, date: todoDate });
    updateLocalStorage();
    inputElement.value = "";
    dateElement.value = "";
    displayItem();
  } else {
    alert("Please enter both a task and a date!");
  }
}

function displayItem() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    newHtml += `
      <div class="todo-item">
        <span>${todoList[i].task} (Date: ${todoList[i].date})</span>
        <button class="delete-btn" onclick="deleteItem(${i})">Delete</button>
      </div>
    `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteItem(index) {
  todoList.splice(index, 1);
  updateLocalStorage();
  displayItem();
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

// Display existing todos on page load
document.addEventListener("DOMContentLoaded", displayItem);
