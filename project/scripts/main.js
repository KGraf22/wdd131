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

const workoutList = document.querySelector('#workoutList');
const log = document.querySelector('#log');
const saveBtn = document.querySelector('#saveSelected');

if (workoutList && log) {

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

    function saveWorkouts(selected) {
        const stored = getStoredWorkouts();
        const updated = [...stored, ...selected];
        localStorage.setItem('workoutLog', JSON.stringify(updated));
    }

    function displayLog() {
        const stored = getStoredWorkouts();

        if (stored.lenth === 0) {
            log.innerHTML = '<p>No workouts yet.</p>';
            return;
        }

        log.innerHTML = stored.map(w => '<p>${w}</p>').join('');
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
    function getFilteredWorkouts(category) {
        if (category === "full") {
            return workouts.filter(w =>
                w.category === "upper" ||
                w.category === "lower" ||
                w.category === "core"
            );
        }
        return workouts.filter(w => w.category === category);
    }

    generateBtn, addEventListener('click', () => {
        const selected = categorySelect.value;

        if (selected === "choose-category") {
            output.innerHTML = `<p>Please select a category.</p>`;
            return;
        }

        const filtered = getFilteredWorkouts(selected);

        if (filtered.length === 0) {
            output.innerHTML = `<p>No workouts found.</p>`;
            return;
        }

        const randomIndex = Math.floor(Math.random() * filtered.length);
        const workout = filtered[randomIndex];

        output.innerHTML = `<p>${workout.name}</p>`;
    });
}

const startBtn = document.querySelector('#startTimer');
const timerDisplay = document.querySelector('#timer');

let timerInterval;
let secons = 0;
let running = false;

if (startBtn && timerDisplay) {
    function updateTimer() {
        seconds++;
        timerDisplay.textContent = '${seconds} seconds';
    }
    startBtn.addEventListener('click', () => {
        if (!running) {
            running = true;
            startBtn.textContent = "Stop Timer";

            timerInterval = setInterval(updateTimer, 1000);
        }
        else {
            running = false;
            startBtn.textContent = "Start Timer";
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