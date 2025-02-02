const menuButton = document.getElementById('explore-button');
const menuSlide = document.getElementById('menu-slider')

const closeMenu = document.getElementById('close-button');

menuButton.addEventListener('click', function() {
    menuSlide.classList.add('menu-opacity');
});

closeMenu.addEventListener('click', function () {
    menuSlide.classList.remove('menu-opacity');
})