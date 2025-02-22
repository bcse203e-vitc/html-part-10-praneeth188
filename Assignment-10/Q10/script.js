document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const addButton = document.getElementById("addTodo");
  const todoList = document.getElementById("todoList");

  addButton.addEventListener("click", addTodo);
  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTodo();
  });

  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    const li = document.createElement("li");
    li.className = "todo-item";

    const textSpan = document.createElement("span");
    textSpan.textContent = todoText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(textSpan);
    li.appendChild(removeButton);
    todoList.appendChild(li);

    todoInput.value = "";
    todoInput.focus();
  }
});
