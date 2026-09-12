// JavaScript 3: validación y simulación de registro
const form = document.getElementById('reporteForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    reportes += 1;
    localStorage.setItem('smr_reportes', reportes);
    if (counter) counter.textContent = reportes;
    const status = document.getElementById('formStatus');
    status.textContent = 'Reporte registrado correctamente. Esta es una demostración académica.';
    status.style.display = 'block';
    form.reset();
  });
}
