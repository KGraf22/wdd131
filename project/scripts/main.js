const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

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
    { name: "Bodyweight Squats", category: "no-weights" },
    { name: "Push Ups", category: "no-weights" },
    { name: "Lunges", category: "no-weights" },
    { name: "Bridge", category: "no-weights" },
    { name: "Kettlebell Swings", category: "kettlebell" },
    { name: "Kettlebell squats", category: "kettlebell" }
];

const workoutList = document.querySelector('#category');
const output = document.querySelector('#output');


if (categorySelect && output) {

    function renderWorkoutList() {
        workoutList.innerHTML = workouts.map(w => `
            <label>
                <input type="checkbox" value="${w.name}">
                ${w.name}
            </label><br>
        `).join('');
    }

    renderWorkoutList(); 
    }

    function getStoredWorkouts() {
        return JSON.parse(localStorage.getItem('workoutLog')) || [];
    }
if (saveBtn) {
    savedBtn.addEventListener('click', () => {
        const checked = document.querySelectorAll('#workoutList input:checked');
        const selected = [...checked].map(item => item.value);

        if (selected.length === 0) return;

        const entry = {
            workouts: selected,
            time: new Date().toLocaleString(),
            duration: "manual"
        };

        let stored = JSON.parse(localStorage.getItem('workoutLog')) || [];
        stored.push(entry);

        localStorage.setItem('workoutLog', JSON.stringify(stored));

        displayLog();
    });
}


    function displayLog() {
        const stored = JSON.parse(localStorage.getItem('workoutLog')) || [];

        if (stored.length === 0) {
            log.innerHTML = `<p>No workouts yet.</p>`;
            return;
        }

        log.innerHTML = stored.map(entry => `
            <div class="card">
                <p><strong>${entry.time}</strong></p>
                <p>Workout: ${entry.workouts.join(", ")}</p>
                <p>Duration: ${entry.duration} sec</p>
            </div>
        `).join('');
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const checked = document.querySelectorAll('#workoutList input:checked');

            const selected = [...checked].map(item => item.value);

            saveWorkouts(selected);
            displayLog();
        });
    }

    renderWorkoutList();
   
   


const generateBtn = document.querySelector('#generate');
const output = document.querySelector('#output');
const categorySelect = document.querySelector('#category');

if (generateBtn && output && categorySelect) {
     generateBtn.addEventListener('click', () => {
        const selected = categorySelect.value;

        if (selected === "choose-category") {
            output.innerHTML = `<p>Please select a category.</p>`;
            return;
        }

        const filtered = workouts.filter(w => w.category === selected);

        if (filtered.length === 0) {
            output.innerHTML = `<p>No workouts found.</p>`;
            return;
        }

        
        output.innerHTML = filtered.map(w => `
            <label>
                <input type="checkbox" value="${w.name}">
                ${w.name}
            </label><br>
        `).join('');
    });
}

const startBtn = document.querySelector('#startTimer');
const timerDisplay = document.querySelector('#timer');


let seconds = 0;
let running = false;
let timerInterval;

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
            running = false;
            startBtn.textContent = "Start Workout";
            clearInterval(timerInterval);

            saveCompletedWorkout();

        }
    });
}

const form = document.querySelector('#goalForm');
const goalOutput = document.querySelector('#goalOutput');

if (form && goalOutput) {
    form.addEventListener('submit', (e) => {
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

function saveCompletedWorkout() {
    const selected = document.querySelectorAll('#output input:checked');

    const workoutNames = [...selected].map(i => i.value);

    if (workoutNames.length === 0) return;

    const entry = {
        workouts: workoutNames,
        time: new Date().toLocaleString(),
        duration: seconds
    };

    let saved = JSON.parse(localStorage.getItem('workoutLog')) || [];
    saved.push(entry);

    localStorage.setItem('workoutLog', JSON.stringify(saved));

    seconds = 0;
}

const manualBtn = document.querySelector('#addManual');

if (manualBtn) {
    manualBtn.addEventListener('click', () => {
        const input = document.querySelector('#manualWorkout').value;

        if (!input) return;

        const entry = {
            workouts: [input],
            time: new Date().toLocaleString(),
            duration: "manual"
        };

        let saved = JSON.parse(localStorage.getItem('workoutLog')) || [];
        saved.push(entry);

        localStorage.setItem('workoutLog', JSON.stringify(saved));
        displayLog();
    });
}

