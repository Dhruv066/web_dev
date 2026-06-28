document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const todoForm = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);

    todoInput.value = "";
  });

  function renderTask(task) {
    const li = document.createElement("li");

    li.className = "flex items-center justify-between bg-white p-3 rounded-lg";

    if (task.completed) {
      li.classList.add("line-through", "opacity-50");
    }

    li.innerHTML = `
            <span>${task.text}</span>
            <button class="bg-red-500 text-white px-3 py-1 rounded">
                Delete
            </button>
        `;

    // Toggle complete
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;

      task.completed = !task.completed;

      li.classList.toggle("line-through");
      li.classList.toggle("opacity-50");

      saveTasks();
    });

    // Delete task
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();

      tasks = tasks.filter((t) => t.id !== task.id);

      li.remove();

      saveTasks();
    });

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
