const left = document.querySelector('.left');
const right = document.querySelector('.right');
const grid = document.querySelector('.grid');

left.addEventListener('mouseenter', () => {
    grid.classList.add('hover-left');
});


left.addEventListener('mouseleave', () => {
    grid.classList.remove('hover-left');
});


right.addEventListener('mouseenter', () => {
    grid.classList.add('hover-right');
});


right.addEventListener('mouseleave', () => {
    grid.classList.remove('hover-right');
});