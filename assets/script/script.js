const icone = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

icone.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});