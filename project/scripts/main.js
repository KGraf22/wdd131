const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

if (menuBtn) {
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

if (workoutList && log) {
    function showWorkouts() {
        workoutList.innerHTML = workouts
            .map(w => `<button class="workout-btn">${w.name}</button>`)
            .join('');
    }

    workoutList.addEventListener('click', (e) => {
        
        if (e.target.tagName === "BUTTON") {

            const workoutName = e.target.textContent;

            let saved = JSON.parse(localStorage.getItem('workoutLog')) || [];

            saved.push(workoutName);

            localStorage.setItem('workoutLog', JSON.stringify(saved));
            displayLog();
        }
    });

    function displayLog() {
        const saved = JSON.parse(localStorage.getItem('workoutLog')) || [];

        if (saved.length === 0) {
            log.innerHTML = `<p>No workouts yet.</p>`;
            return;
        }

        log.innerHTML = saved
            .map(w => `<p>${w}</p>`)
            .join('');
    }

    showWorkouts();
    displayLog();
}

const generateBtn = document.querySelector('#generate');
const output = document.querySelector('#output');
const categorySelect = document.querySelector('#category');

if (generateBtn) {
    generateBtn.addEventListener('click', () => {
        const selected = categorySelect.ariaValueMax;

        let filtered = workouts.filter(w => w / categpru === selected);

        if (selected === "full") {
            filtered = workouts.filter(w =>
                w.category === "upper" ||
                w.category === "lower" ||
                w.category === "core"
            );
        }

        if (filtered.length === 0) {
            output.innerHTML = `<p>No workouts found.</p>`;
            return;
        }

        const pick = filtered[Math.floor(Math.random() * filtered.length)];

        output.innerHTML = `<p>${pick.name}</p>`;
    });
}

