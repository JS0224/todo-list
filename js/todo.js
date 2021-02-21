const todoForm = document.querySelector(".todo-form"),
      todoInput = todoForm.querySelector("input"),
      TODO_LS = "todo",
      todoContainer = document.querySelector(".todo-container");
let todos =[];

function saveTodos() {
  localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function deleteTodo(e) {
  e.preventDefault();
  const btn = e.target;
  const id = btn.id;
  const li = btn.parentNode;
  const filteredTodos = todos.filter(function(todo) {
    return todo.id !== parseInt(id);
  });
  todos = filteredTodos;
  todoContainer.removeChild(li);
  saveTodos();
}

function drawTodo(item) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const doneBtn = document.createElement("button");
  const id = item.id;
  span.innerHTML = item.text;
  doneBtn.id = item.id;
  doneBtn.innerHTML = "X";
  doneBtn.addEventListener("click", deleteTodo);
  li.id = doneBtn.id;

  li.appendChild(span);
  li.appendChild(doneBtn);
  const newItem = {
    text: item.text,
    id: id
  };
  todos.push(newItem);
  todoContainer.appendChild(li);
  saveTodos();
}

function handleSubmit(e) {
  e.preventDefault();
  const item  = {
    text: todoInput.value,
    id: new Date().getMilliseconds()
  }
  drawTodo(item);
  todoInput.innerText = "";
}

function loadTodos(){
  const todos = localStorage.getItem(TODO_LS);
  if (todos !== null) {
    const parsedTodos = JSON.parse(todos);
    parsedTodos.forEach(function(todo){
      drawTodo(todo);
    });
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
