document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('#department-menu-item-o-odsjeku');
    const hamburgerMenu = document.querySelector('.odsjek-menu');

    menuBtn.addEventListener('mouseenter', () => {
        hamburgerMenu.classList.add('visible');
        hamburgerMenu.classList.remove('hidden');
    });

    menuBtn.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!hamburgerMenu.matches(':hover')) {
                hamburgerMenu.classList.remove('visible');
                hamburgerMenu.classList.add('hidden');
            }
        }, 200);
    });

    hamburgerMenu.addEventListener('mouseleave', () => {
        hamburgerMenu.classList.remove('visible');
        hamburgerMenu.classList.add('hidden');
    });

    hamburgerMenu.addEventListener('mouseenter', () => {
        hamburgerMenu.classList.add('visible');
        hamburgerMenu.classList.remove('hidden');
    });

});
