const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.textContent = navigation.classList.contains('open') ? "X" : "☰";
})

const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;