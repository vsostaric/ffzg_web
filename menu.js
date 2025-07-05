document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('.menu-btn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    menuBtn.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('visible');
        hamburgerMenu.classList.toggle('hidden');
    });
});
