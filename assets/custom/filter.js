// JavaScript 2: filtro de categorías
const filtro = document.getElementById('filtroCategoria');
if (filtro) {
  filtro.addEventListener('change', () => {
    document.querySelectorAll('[data-categoria]').forEach(card => {
      card.style.display = (!filtro.value || card.dataset.categoria === filtro.value) ? '' : 'none';
    });
  });
}
