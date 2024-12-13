const wrapper = document.querySelector('.carousel__wrapper');
const prevBtn = document.querySelector('.carousel__btn--prev');
const nextBtn = document.querySelector('.carousel__btn--next');
let offset = 0;

// Gère le clic sur "suivant"
nextBtn.addEventListener('click', () => {
    const itemWidth = document.querySelector('.carousel__item').offsetWidth + 20; // Taille de l'élément + gap
    if (Math.abs(offset) < wrapper.scrollWidth - wrapper.offsetWidth) {
        offset -= itemWidth;
        wrapper.style.transform = `translateX(${offset}px)`;
    }
});
