//Toggle Icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// Selecione todos os elementos de navegação
const navItems = document.querySelectorAll('nav a');

// Selecione todas as seções alvo
const sections = document.querySelectorAll('section');

// Função para verificar a posição dos elementos em relação à janela
function checkNavPosition() {
    // Obtenha a posição atual da janela de visualização
    const windowTop = window.pageYOffset;

    // Itere sobre as seções
    sections.forEach((section, index) => {
        // Obtenha a posição superior da seção
        const sectionTop = section.offsetTop;

        // Verifique se a seção está visível na janela de visualização
        if (sectionTop <= windowTop) {
            // Remova a classe 'active' de todos os elementos de navegação
            navItems.forEach(navItem => navItem.classList.remove('active'));

            // Adicione a classe 'active' ao elemento de navegação correspondente à seção
            navItems[index].classList.add('active');
        }
    });
    // Remove toggle menu 
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// Função para adicionar a classe 'active' quando um elemento de navegação for clicado
function activateNavOnClick(event) {
    // Remova a classe 'active' de todos os elementos de navegação
    navItems.forEach(navItem => navItem.classList.remove('active'));

    // Adicione a classe 'active' ao elemento de navegação clicado
    event.target.classList.add('active');
}

// Execute a função quando a página for carregada e quando houver rolagem
window.addEventListener('load', checkNavPosition);
window.addEventListener('scroll', checkNavPosition);

// Adicione o evento de clique a todos os elementos de navegação
navItems.forEach(navItem => navItem.addEventListener('click', activateNavOnClick));

// Scroll Reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicos-container, .portifolio-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content', { origin: 'rigth' });


// Texto Digitado

const typed = new Typed('.typed', {
    strings: ['Frontend Developer', 'Analista de Infraestrutura', 'Analista de Suporte'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



