// SCROLL UP BUTTON (BOTTOM RIGHT)
const header = document.getElementById('header');
const chevronUp = document.querySelector('.fa-chevron-circle-up');

window.addEventListener('scroll', function() {
    const boundingTop = header.getBoundingClientRect().top

    if(boundingTop <= -400) {
        chevronUp.classList.add('visible');
    } else if(boundingTop > -400) {
        chevronUp.classList.remove('visible');
    }
})

// NAVBAR RESPONSIVE
const menuOverlay = document.querySelector('.mobile-overlay');

document.addEventListener('click', function(e) {

    if(e.target.id === 'open-btn') {
        menuOverlay.classList.add('show');
    } else if(e.target.id === 'close-btn'
    || e.target.classList.contains('mobile-overlay--link')) {
        menuOverlay.classList.remove('show');
    }
});

// HEADER BRANDING ANIMATION (ANIMEJS)
import anime from './anime.es.js';