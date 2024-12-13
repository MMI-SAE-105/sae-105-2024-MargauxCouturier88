const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox > img");

document.body.addEventListener("click", (evt) => {
    if (evt.target.matches(".films__list")) {
        lightboxImg.src = evt.target.src;
        lightbox.classList.add("entrée");
        lightbox.showModal();
    }
});

lightbox.addEventListener("click", (evt) => {
    if (evt.target === lightbox) {
        lightbox.classList.add("sortie");
        lightbox.addEventListener("animationend", () => {
            lightbox.classList.remove("sortie", "entrée");
            lightbox.close();
        }, { once: true });
    }
});