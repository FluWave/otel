let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 6000); 
