
const showPopupButtons = document.querySelectorAll('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closebtn = document.querySelector('.closebtn');

showPopupButtons.forEach(button => {
    button.onclick = () => {
        const title = button.getAttribute('data-title');
        const content = button.getAttribute('data-content');

        document.querySelector('.popup-box h1').textContent = title;
        document.querySelector('.popup-box p').textContent = content;

        popupContainer.classList.add('active');
    };
});

closebtn.onclick = () => {
    popupContainer.classList.remove('active');
};



document.addEventListener('DOMContentLoaded', function () {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.reveal', { duration: 2000 });
});
