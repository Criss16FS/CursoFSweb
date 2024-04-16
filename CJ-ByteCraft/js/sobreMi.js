let slides = document.querySelectorAll('.slide-sobreMi');
let currentIndex = 0;
let startX = 0;
let endX = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    let diff = startX - endX;
    if (diff > 50) {
        nextSlide();
    } else if (diff < -50) {
        prevSlide();
    }
}

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);

// Cambiar al siguiente slide cada 10 segundos
setInterval(nextSlide, 10000);

// Agregar eventos táctiles para el deslizamiento
document.querySelector('.carrusel-sobreMi').addEventListener('touchstart', handleTouchStart);
document.querySelector('.carrusel-sobreMi').addEventListener('touchend', handleTouchEnd);

// Agregar eventos de clic para cambiar los slides
document.querySelector('.carrusel-sobreMi').addEventListener('click', function(event) {
    if (event.clientX < window.innerWidth / 2) {
        prevSlide();
    } else {
        nextSlide();
    }
});
