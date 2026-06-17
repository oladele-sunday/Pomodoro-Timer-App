/* ==========================
   FOCUSFLOW POMODORO TIMER
========================== */

// DOM ELEMENTS

const timerDisplay = document.getElementById("timer");
const playBtn = document.getElementById("playBtn");
const resetBtn = document.getElementById("resetBtn");
const skipBtn = document.getElementById("skipBtn");
const modeButtons = document.querySelectorAll(".mode-btn");
const progressRing = document.querySelector(".progress-ring-circle");

// MODES

const modes = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
};

let currentMode = "focus";
let totalTime = modes.focus;
let timeLeft = totalTime;

let timer = null;
let isRunning = false;

// SVG CIRCLE

const radius = 220;
const circumference = 2 * Math.PI * radius;

if(progressRing){

    progressRing.style.strokeDasharray =
        circumference;

    progressRing.style.strokeDashoffset =
        0;
}

// ==========================
// FORMAT TIME
// ==========================

function formatTime(seconds){

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}

// ==========================
// UPDATE DISPLAY
// ==========================

function updateDisplay(){

    timerDisplay.textContent =
        formatTime(timeLeft);

    updateProgress();

    saveState();
}

// ==========================
// UPDATE PROGRESS RING
// ==========================

function updateProgress(){

    if(!progressRing) return;

    const progress =
        timeLeft / totalTime;

    const offset =
        circumference - (progress * circumference);

    progressRing.style.strokeDashoffset =
        offset;
}

// ==========================
// START TIMER
// ==========================

function startTimer(){

    if(isRunning) return;

    isRunning = true;

    playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    timer = setInterval(() => {

        if(timeLeft > 0){

            timeLeft--;

            updateDisplay();

        } else {

            finishSession();

        }

    },1000);
}

// ==========================
// PAUSE TIMER
// ==========================

function pauseTimer(){

    isRunning = false;

    clearInterval(timer);

    playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';
}

// ==========================
// RESET TIMER
// ==========================

function resetTimer(){

    pauseTimer();

    timeLeft = totalTime;

    updateDisplay();
}

// ==========================
// SKIP SESSION
// ==========================

function skipSession(){

    pauseTimer();

    timeLeft = 0;

    updateDisplay();

    finishSession();
}

// ==========================
// SESSION FINISHED
// ==========================

function finishSession(){

    pauseTimer();

    const completed =
        Number(localStorage.getItem(
            "focusflowSessions"
        )) || 0;

    localStorage.setItem(
        "focusflowSessions",
        completed + 1
    );

    alert(
        `🎉 ${currentMode.toUpperCase()} session completed!`
    );

    resetTimer();
}

// ==========================
// CHANGE MODE
// ==========================

function changeMode(mode){

    currentMode = mode;

    totalTime = modes[mode];

    timeLeft = totalTime;

    pauseTimer();

    modeButtons.forEach(btn => {

        btn.classList.remove("active");

        if(btn.dataset.mode === mode){

            btn.classList.add("active");

        }

    });

    updateDisplay();
}

// ==========================
// LOCAL STORAGE
// ==========================

function saveState(){

    localStorage.setItem(
        "focusflowState",
        JSON.stringify({

            currentMode,
            timeLeft

        })
    );
}

// ==========================
// RESTORE STATE
// ==========================

function restoreState(){

    const saved =
        localStorage.getItem(
            "focusflowState"
        );

    if(!saved) return;

    const data =
        JSON.parse(saved);

    currentMode =
        data.currentMode || "focus";

    totalTime =
        modes[currentMode];

    timeLeft =
        data.timeLeft || totalTime;

    modeButtons.forEach(btn => {

        btn.classList.remove("active");

        if(btn.dataset.mode === currentMode){

            btn.classList.add("active");

        }

    });

    updateDisplay();
}

// ==========================
// EVENT LISTENERS
// ==========================

playBtn.addEventListener("click", () => {

    if(isRunning){

        pauseTimer();

    } else {

        startTimer();

    }

});

resetBtn.addEventListener("click", () => {

    resetTimer();

});

skipBtn.addEventListener("click", () => {

    skipSession();

});

modeButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const mode =
            btn.dataset.mode;

        changeMode(mode);

    });

});

// ==========================
// INITIALIZE
// ==========================

restoreState();

updateDisplay();
const upload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");

upload.addEventListener("change", function () {

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            profileImage.src = e.target.result;

            localStorage.setItem(
                "profileImage",
                e.target.result
            );

        };

        reader.readAsDataURL(file);
    }
});

const savedImage =
localStorage.getItem("profileImage");

if(savedImage){
    profileImage.src = savedImage;
}