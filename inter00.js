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
        contato: "Contato",
        userone: "Desenvolvedor Full-Stack | Analista de Dados",
        sobremin:"Sobre mim",
        descricao:"Sou um desenvolvedor FullStack apaixonado por tecnologia e inovação. Com experiência em JavaScript, React, Python e SQL, estou sempre buscando aprender e aprimorar minhas habilidades para criar soluções eficientes e impactantes. Acredito que a tecnologia tem o poder de transformar vidas e estou comprometido em contribuir para esse impacto positivo.",
        blogdescription: "Cada Sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.",
        habilidade:"Habilidades",
        metodologia:"Metodologia",
        projetos:"Projetos",
        projetone:"Projeto 1",
        orcamento:"Solicite um Orçamento",
        orcamentosdescrition: "Se você está interessado em contratar meus serviços ou deseja discutir um projeto, entre em contato comigo para solicitar um orçamento personalizado. Estou disponível para colaborar em projetos de desenvolvimento web, análise de dados e muito mais. Clique abaixo para solicitar um orçamento.",
        solicitaorcamento: "Solicitar Orçamento",
        footer: "&copy; 2026 Meu Portfólio. Todos os direitos reservados."
   
    },
    
    en: {
        userone: "Full-Stack Developer | Data Analyst",
        inicio: "Home",
        habilidades: "Skills",
        projetos: "Projects",
        contato: "Contact",
        userone: "Full-Stack Developer | Data Analyst",
        sobremin:"About me",
        descricao:"I am a FullStack developer passionate about technology and innovation. With experience in JavaScript, React, Python, and SQL, I am always seeking to learn and enhance my skills to create efficient and impactful solutions. I believe that technology has the power to transform lives, and I am committed to contributing to this positive impact.",
        blogdescription: "Every dream you leave behind is a piece of your future that ceases to exist.",
        habilidade:"Skills",
        metodologia:"Methodology",
        projetos: "Projects",
        projetone: "Project One",
        orcamento:"Request a Quote",
        orcamentosdescrition:"If you are interested in hiring my services or wish to discuss a project, please contact me to request a personalized quote. I am available to collaborate on web development projects, data analysis, and much more. Click below to request a quote.",
        solicitaorcamento: "Request a Quote",
        footer:"© 2026 My Portfolio. All rights reserved."
    
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = traducao[lang][key];
    });
}