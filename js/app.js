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