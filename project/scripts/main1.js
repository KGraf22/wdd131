const yearSpan = document.getElementById("currentyear");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();;

const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

const workouts = [
    { name: "Push Ups", category: "upper" },
    { name: "Should Press", category: "upper" },
    { name: "Bicep Curls", category: "upper" },
    { name: "Squats", category: "lower" },
    { name: "Lunges", category: "lower" },
    { name: "Wall Sits", category: "lower" },
    { name: "Burpees", category: "hiit" },
    { name: "Mountain Climber", category: "hiit" },
    { name: "Plank jacks", category: "hiit" },
    { name: "Jump Rope", category: "cardio" },
    { name: "High Knees", category: "cardio" },
    { name: "Jumping Jacks", category: "cardio" },
    { name: "Plank", category: "core" },
    { name: "Russian Twists", category: "core" },
    { name: "Run in Place", category: "warmup" },
    { name: "Arm Circles", category: "warmup" },
    { name: "Stretching", category: "cooldown" },
    { name: "Walking in Place", category: "cooldown" },
    { name: "Deep Breathing", category: "cooldown" },
    { name: "Pilates", category: "pilates" },
    { name: "Bridge", category: "pilates" },
    { name: "Leg Circles", category: "pilates" },
    
];

const categorySelect = document.querySelector('#category');
const output = document.querySelector('#output');

if (categorySelect && output) {
    categorySelect.addEventListener('change', () => {
        const selected = categorySelect.value;

        if (selected === "choose-category") {
            output.innerHTML = `<p>Please select a category</p>`;
            return;
        }
        
        let filtered = selected === "full"
            ? workouts.filter(w => ["upper", "lower", "core"].includes(w.category))
            : workouts.filter(w => w.category === selected);

    
        output.innerHTML = filtered.map(w => `
            <label>
                <input type="checkbox" value="${w.name}">
                ${w.name}
            </label>
        `).join('<br>');
    });
}


let seconds = 0;
let timerInterval = null;
let running = false;

const startBtn = document.querySelector('#startTimer');
const pauseBtn = document.querySelector('#pauseTimer');
const timerDisplay = document.querySelector('#timer');

if (startBtn && timerDisplay) {
    startBtn.addEventListener('click', () => {

        if (!running) {
            running = true;
            startBtn.textContent = "End Workout";

            timerInterval = setInterval(() => {
                seconds++;
                timerDisplay.textContent = `${seconds} seconds`;
            }, 1000);

        } else {
            clearInterval(timerInterval);
            running = false;
            startBtn.textContent = "Start Workout";

            saveWorkout(seconds);
            seconds = 0;
            timerDisplay.textContent = "0 seconds";
        }
    });
}


if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {

        if (running) {
            clearInterval(timerInterval);
            running = false;
            pauseBtn.textContent = "Resume";
        } else {
            running = true;
            pauseBtn.textContent = "Pause";

            timerInterval = setInterval(() => {
                seconds++;
                timerDisplay.textContent = `${seconds} seconds`;
            }, 1000);
        }
    });
}

function saveWorkout(duration) {
    const selected = [...document.querySelectorAll('#output input:checked')]
        .map(i => i.value);

    if (!selected.length) return;

    const entry = {
        workouts: selected,
        time: new Date().toLocaleString(),
        duration: duration
    };

    const stored = JSON.parse(localStorage.getItem('workoutLog')) || [];
    stored.push(entry);
    localStorage.setItem('workoutLog', JSON.stringify(stored));
}

const workoutList = document.querySelector('#workoutList');
const log = document.querySelector('#log');
const saveBtn = document.querySelector('#saveSelected');


if (workoutList) {
    workoutList.innerHTML = workouts.map(w => `
        <label>
            <input type="checkbox" value="${w.name}">
            ${w.name}
        </label>
    `).join('<br>');
}


function displayLog() {
    if (!log) return;

    const stored = JSON.parse(localStorage.getItem('workoutLog')) || [];

    if (!stored.length) {
        log.innerHTML = `<p>No workouts yet</p>`;
        return;
    }

    log.innerHTML = stored.map(entry => `
        <div class="card">
            <p><strong>${entry.time}</strong></p>
            <p>${entry.workouts.join(", ")}</p>
            <p>Duration: ${entry.duration} sec</p>
        </div>
    `).join('');
}

if (saveBtn) {
    saveBtn.addEventListener('click', () => {

        const selected = [...document.querySelectorAll('#workoutList input:checked')]
            .map(i => i.value);

        if (!selected.length) return;
        
        const stored = JSON.parse(localStorage.getItem('workoutLog')) || [];
        
        stored.push({
            workouts: selected,
            time: new Date().toLocaleString(),
            duration: "manual"
        });

        localStorage.setItem('workoutLog', JSON.stringify(stored));

        displayLog();
    });
}




displayLog(); 


const form = document.querySelector('#goalForm');
const goalOutput = document.querySelector('#goalOutput');

if (form && goalOutput) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const goal = document.querySelector('#goal').value;
        localStorage.setItem('goal', goal);
        goalOutput.textContent = `Goal: ${goal}`;
    });

     const savedGoal = localStorage.getItem('goal');
    if (savedGoal) {
        goalOutput.textContent = `Goal: ${savedGoal}`;
    }
}

