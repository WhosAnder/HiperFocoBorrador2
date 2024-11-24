// Referencias al DOM
const tasksCount = document.getElementById('tasksCount');
const pomodorosCount = document.getElementById('pomodorosCount');
const tasksChartCanvas = document.getElementById('tasksChart');

// Obtener datos del localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let pomodoros = JSON.parse(localStorage.getItem('completedPomodoros')) || 0;

// Mostrar pomodoros almacenados
pomodorosCount.textContent = pomodoros;

// Configurar Chart.js para el gráfico circular
const ctx = tasksChartCanvas.getContext('2d');
const tasksChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Completadas', 'Pendientes'],
        datasets: [{
            data: [0, tasks.length],
            backgroundColor: ['#5DBB63', '#FF6B81'],
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

// Actualizar gráfico y contador
function updateProgress() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;

    // Actualizar contador de tareas
    tasksCount.textContent = completedTasks;

    // Actualizar datos del gráfico
    tasksChart.data.datasets[0].data = [completedTasks, totalTasks - completedTasks];
    tasksChart.update();

    // Guardar tareas en localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Inicializar progreso
updateProgress();
