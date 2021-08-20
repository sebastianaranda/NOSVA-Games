const sr = ScrollReveal({
    distance: '60px',
    duration: 1800,
    reset: true
});

let hover = false;
let menuOpen = false;
const iconoMobile = document.getElementById('header__menu-icoMobile');
const navMobile = $('.header__menu-mobile');

sr.reveal('.sectionA__texto', { delay: 300, origin: 'left' });
sr.reveal('.sectionA__imagen', { delay: 300, origin: 'right' });
sr.reveal('.sectionB__container', { delay: 300, origin: 'bottom' });
sr.reveal('#cardA', { delay: 300, origin: 'right' });
sr.reveal('#cardB', { delay: 300, origin: 'left' });

iconoMobile.addEventListener('mouseenter', hoverIconoMobile);
iconoMobile.addEventListener('mouseleave', hoverIconoMobile);
iconoMobile.addEventListener('click', accionarMenuMobile);

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