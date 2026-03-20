const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temp = 45;
const windSpeed = 5;

function calculateWindChill(t, v) {
    return 35.74 + (0.6215 * t) - (35.75 * Math.pow(v, 0.16)) + (0.4275 * t * Math.pow(v, 0.16));
}

let windChill = "N/A";

if (temp <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temp, windSpeed).toFixed(1) + "°F";
}

document.getElementById("windchill").textContent = windChill;