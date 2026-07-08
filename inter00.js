const btnMobile = document.getElementById('btn-Mobile');


function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
};
btnMobile.addEventListener('click', toggleMenu);

// Mudar de idioma
const traducao = {
    pt: {
        userone: "Desenvolvedor Full-Stack | Analista de Dados",
        inicio: "Inicio",
        habilidades: "Habilidades",
        projetos: "Projetos",
        contato: "Contato"
    },
    en: {
        userone: "Full-Stack Developer | Data Analyst",
        inicio: "Home",
        habilidades: "Skills",
        projetos: "Projects",
        contato: "Contact"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = traducao[lang][key];
    });
}