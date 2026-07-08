const btnMobile = document.getElementById('btn-Mobile');


function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
};
btnMobile.addEventListener('click', toggleMenu);

// Mudar de idioma
function changeLanguage() {
    const language = document.getElementById('language-select').value;
    // Lógica para mudar o idioma
}
