// JavaScript 1: contador de reportes de demostración
let reportes = Number(localStorage.getItem('smr_reportes') || 128);
const counter = document.getElementById('contador');
if (counter) counter.textContent = reportes;
