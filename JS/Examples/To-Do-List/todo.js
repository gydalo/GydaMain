function createTodo(text) {
    const todo = document.createElement("li");
    todo.textContent = text;
    todo.addEventListener("click", onToggleTodo);
    return todo;
}

function onNewTodo(event) {
    event.preventDefault();
    const { value } = event.target.todo;
    const todo = createTodo(value);
    document.querySelector("ul").append(todo);
    event.target.todo.value = "";
    event.target.todo.focus();
  }
  
  function onToggleTodo(event) {
    const { target } = event;
    target.hidden = true;
  }
  
  document.forms.todo.addEventListener("submit", onNewTodo);