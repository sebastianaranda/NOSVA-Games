const sr = ScrollReveal({
    distance: '60px',
    duration: 1800,
    reset: true
});

let hover = false;
let menuOpen = false;
const iconoMobile = document.getElementById('header__menu-icoMobile');
const navMobile = $('.header__menu-mobile');
const btnHome = document.getElementById('btnHome');
const btnBecas = document.getElementById('btnBecas');
const btnFaq = document.getElementById('btnFaq');
const btnHomeMobile = document.getElementById('btnHomeMobile');
const btnBecasMobile = document.getElementById('btnBecasMobile');
const btnFaqMobile = document.getElementById('btnFaqMobile');

sr.reveal('.sectionA__texto', { delay: 300, origin: 'left' });
sr.reveal('.sectionA__imagen', { delay: 300, origin: 'bottom' });
sr.reveal('.sectionB__container', { delay: 300, origin: 'bottom' });
sr.reveal('#cardA', { delay: 300, origin: 'bottom' });
sr.reveal('#cardB', { delay: 300, origin: 'bottom' });
sr.reveal('#accordionFlushFaq', { delay: 300, origin: 'bottom' });

iconoMobile.addEventListener('mouseenter', hoverIconoMobile);
iconoMobile.addEventListener('mouseleave', hoverIconoMobile);
iconoMobile.addEventListener('click', accionarMenuMobile);

btnHome.addEventListener('click', (e) => {
    e.preventDefault();
    let homeHeight = ($(".sectionA").offset().top) - 100;
    $("html").animate(
        {
            scrollTop: homeHeight
        }, 250);
});
btnBecas.addEventListener('click', (e) => {
    e.preventDefault();
    let becasHeight = ($(".sectionB").offset().top) - 100;
    $("html").animate(
        {
            scrollTop: becasHeight
        }, 250);
});
btnFaq.addEventListener('click', (e) => {
    e.preventDefault();
    let faqHeight = ($(".sectionC").offset().top) - 100;
    $("html").animate(
        {
            scrollTop: faqHeight
        }, 250);
});
btnHomeMobile.addEventListener('click', (e) => {
    e.preventDefault();
    let homeHeight = ($(".sectionA").offset().top) - 100;
    $("html").animate(
        {
            scrollTop: homeHeight
        }, 250);
    accionarMenuMobile();
});
btnBecasMobile.addEventListener('click', (e) => {
    e.preventDefault();
    let becasHeight = ($(".sectionB").offset().top) - 100;
    $("html").animate(
        {
            scrollTop: becasHeight
        }, 250);
    accionarMenuMobile();
});
btnFaqMobile.addEventListener('click', (e) => {
    e.preventDefault();
    let faqHeight = ($(".sectionC").offset().top) - 100;
    $("html").animate(
        {
            scrollTop: faqHeight
        }, 250);
    accionarMenuMobile();
});

window.addEventListener('resize', ocultarMenuMobile);

function hoverIconoMobile() {
    if (menuOpen) {
        if (!hover) {
            hover = true;
            iconoMobile.src = "../resources/menu_open-hover.svg";
        } else {
            hover = false;
            iconoMobile.src = "../resources/menu_open.svg";
        }
    } else {
        if (!hover) {
            hover = true;
            iconoMobile.src = "../resources/menu-hover.svg";
        } else {
            hover = false;
            iconoMobile.src = "../resources/menu.svg";
        }
    }
}

function accionarMenuMobile() {
    if (menuOpen) {
        navMobile.slideUp();
        menuOpen = false;
    } else {
        navMobile.slideDown();
        menuOpen = true;
    }
}

function ocultarMenuMobile() {
    if (window.innerWidth >= 600 && menuOpen == true) {
        accionarMenuMobile();
    }
}