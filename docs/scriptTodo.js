// Referencias a elementos HTML
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Inicializar valores en localStorage si no existen
if (!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify([])); // Lista de tareas vacía
}

if (!localStorage.getItem('completedPomodoros')) {
    localStorage.setItem('completedPomodoros', JSON.stringify(0)); // Pomodoros inicial en 0
}

// Recuperar tareas almacenadas al cargar la página
let todos = JSON.parse(localStorage.getItem("tasks")) || [];

// Renderizar las tareas existentes
renderTodos();

// Evento para añadir una nueva tarea
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText) {
        const newTask = { id: Date.now(), text: taskText, completed: false }; // Se genera un id único
        todos.push(newTask);
        saveToLocalStorage();
        renderTodos();
        todoInput.value = ""; // Limpiar el input
    }
});

// Función para renderizar las tareas
function renderTodos() {
    todoList.innerHTML = ""; // Limpiar la lista
    todos.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = `todo-item ${task.completed ? "completed" : ""}`;
        li.textContent = task.text;

        // Botón para completar tarea
        const completeButton = document.createElement("button");
        completeButton.textContent = "✔️";
        completeButton.className = `complete-btn ${task.completed ? "completed" : ""}`;
        completeButton.dataset.id = task.id; // Asigna el id único aquí
        completeButton.addEventListener("click", () => {
            todos[index].completed = !todos[index].completed; // Alternar estado
            saveToLocalStorage();
            renderTodos();
        });

        // Botón para eliminar tarea
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", () => {
            todos.splice(index, 1); // Eliminar tarea
            saveToLocalStorage();
            renderTodos();
        });

        // Agregar botón de completar al principio
        li.prepend(completeButton);
        // Agregar botón de eliminar al final
        li.appendChild(deleteButton);
        // Agregar tarea a la lista
        todoList.appendChild(li);
    });
}

// Guardar en localStorage
function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(todos));
}
