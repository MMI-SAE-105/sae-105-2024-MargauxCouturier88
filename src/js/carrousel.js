const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel__btn--prev');
const nextBtn = document.querySelector('.carousel__btn--next');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel__item_enfant');
const totalItems = items.length;

items.forEach((item, index) => {
    item.style.transform = `translateX(${index * 100}%)`;
});

function updateCarousel(index) {
    items.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
});