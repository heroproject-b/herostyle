document.addEventListener('DOMContentLoaded', () => {
    const quotes = document.querySelectorAll('.quote');
    const names = document.querySelectorAll('.hero-name');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        // Hide all slides
        quotes.forEach(quote => quote.classList.remove('active'));
        names.forEach(name => name.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show selected slide
        quotes[index].classList.add('active');
        names[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % quotes.length;
        showSlide(newIndex);
    }

    function startAutoRotation() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            showSlide(index);
            startAutoRotation();
        });
    });

    // Initialize
    showSlide(0);
    startAutoRotation();
});
