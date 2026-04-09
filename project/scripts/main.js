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
    { name: "", category: "pilates" },
    { name: "", category: "pilates" },

    { name: "Bodyweight Squats", category: "no-weights" },
    { name: "Push Ups", category: "no-weights" },
    { name: "Lunges", category: "no-weights" },
    { name: "Bridge", category: "no-weights" },

    { name: "Kettlebell Swings", category: "kettlebell" },
    { name: "Kettlebell squats", category: "kettlebell" }
];

const generateBtn = document.querySelector('#generate');
const output = document.querySelector('#output');
const categorySelect = document.querySelector('#category');

