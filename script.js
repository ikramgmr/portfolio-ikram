// Bouton "Afficher plus"
const btnInfo = document.getElementById('toggle-info');
const infoSection = document.querySelector('.infos-supplémentaires');

btnInfo.addEventListener('click', () => {
  infoSection.classList.toggle('cache');
  btnInfo.textContent = infoSection.classList.contains('cache')
    ? 'Afficher plus'
    : 'Masquer';
});

// Bouton "Mode Sombre"
const btnTheme = document.getElementById('toggle-theme');
const body = document.body;

btnTheme.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  btnTheme.textContent = body.classList.contains('dark-mode')
    ? '☀️ Mode Clair'
    : '🌙 Mode Sombre';
});
