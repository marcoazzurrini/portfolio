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
const overlay = document.querySelector('.header-branding');
const overlayMobile = document.querySelector('.header-branding-mobile');

var morphing = anime({
    targets: '.morph',
    d: [
        { value: 'M1920,0H868.4s366.482,115.282,497.641,497.641S1920,1043.2,1920,1043.2Z'},
        { value: 'M1920,0H868.4s-59.175,497.641,497.641,497.641S1920,1043.2,1920,1043.2Z'}

    ],
    easing: 'easeInOutQuad',
    duration: 2500,
    loop: true,
    autoplay: true
});

var morphingMobile = anime({
    targets: '.morph-mobile',
    d: [
        { value: 'M0,0H374.513V338.21S191.362,330.6,204.818,168.515,0,57.9,0,57.9Z'},
        { value: 'M0,0H374.513V338.21S364.178,168.515,204.818,168.515,0,57.9,0,57.9Z'}
    ],
    easing: 'easeInOutQuad',
    duration: 2500,
    loop: true,
    autoplay: true
});

fetch('https://github.com/marcoazzurrini/portfolio/blob/master/js/example.md') 
    .then(response => response.text())
    .then(result => console.log(result));