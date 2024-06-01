document.addEventListener('DOMContentLoaded', function () {
    const carruselInner = document.querySelector('.carrusel-inner');
    const carruselItems = document.querySelectorAll('.carrusel-item');
    const prevButton = document.querySelector('.carrusel-prev');
    const nextButton = document.querySelector('.carrusel-next');

    let index = 0;

    function showSlide(i) {
        index = (i + carruselItems.length) % carruselItems.length;
        carruselInner.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener('click', function () {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(index + 1);
    });

    showSlide(index);
});
