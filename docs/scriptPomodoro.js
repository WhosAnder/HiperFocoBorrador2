(function () {
    let timerInterval;
    let isRunning = false;
    let timeLeft = 25 * 60; // 25 minutos en segundos

    const startPomodoro = document.getElementById("startPomodoro");
    const resetPomodoro = document.getElementById("resetPomodoro");
    const timerPomodoro = document.getElementById("timerPomodoro");

    startPomodoro.addEventListener("click", startTimer);
    resetPomodoro.addEventListener("click", resetTimer);

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            startPomodoro.textContent = "Pausar";
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    isRunning = false;
                    startPomodoro.textContent = "Iniciar";
                    sendNotification();
                }
            }, 1000);
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            startPomodoro.textContent = "Iniciar";
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timeLeft = 25 * 60; // Reinicia a 25 minutos
        isRunning = false;
        updateTimerDisplay();
        startPomodoro.textContent = "Iniciar";
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerPomodoro.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function sendNotification() {
        if (Notification.permission === "granted") {
            new Notification("¡Pomodoro terminado!", {
                body: "Es hora de tomar un descanso.",
            });
        }
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
})();

(function () {
    let timerInterval;
    let isRunning = false;
    let timeLeft = 5 * 60; // 5 minutos en segundos

    const startDescanso = document.getElementById("startDescanso");
    const resetDescanso = document.getElementById("resetDescanso");
    const timerDescanso = document.getElementById("timerDescanso");

    startDescanso.addEventListener("click", startTimer);
    resetDescanso.addEventListener("click", resetTimer);

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            startDescanso.textContent = "Pausar";
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    isRunning = false;
                    startDescanso.textContent = "Iniciar";
                    sendNotification();
                }
            }, 1000);
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            startDescanso.textContent = "Iniciar";
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timeLeft = 5 * 60; // Reinicia a 5 minutos
        isRunning = false;
        updateTimerDisplay();
        startDescanso.textContent = "Iniciar";
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDescanso.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function sendNotification() {
        if (Notification.permission === "granted") {
            new Notification("¡Descanso terminado!", {
                body: "Manos a la obra.",
            });
        }
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
})();

(function () {
    let timerInterval;
    let isRunning = false;
    let timeLeft = 15 * 60; // 5 minutos en segundos

    const startDescansoLargo = document.getElementById("startDescansoLargo");
    const resetDescansoLargo = document.getElementById("resetDescansoLargo");
    const timerDescansoLargo = document.getElementById("timerDescansoLargo");

    startDescansoLargo.addEventListener("click", startTimer);
    resetDescansoLargo.addEventListener("click", resetTimer);

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            startDescansoLargo.textContent = "Pausar";
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    isRunning = false;
                    startDescansoLargo.textContent = "Iniciar";
                    sendNotification();
                }
            }, 1000);
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            startDescansoLargo.textContent = "Iniciar";
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timeLeft = 15 * 60; // Reinicia a 15 minutos
        isRunning = false;
        updateTimerDisplay();
        startDescansoLargo.textContent = "Iniciar";
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDescansoLargo.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function sendNotification() {
        if (Notification.permission === "granted") {
            new Notification("¡Descanso terminado!", {
                body: "Manos a la obra.",
            });
        }
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
})();
