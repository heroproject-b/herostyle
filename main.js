// Initialize core functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add any additional initialization code
    console.log('Portfolio initialized');
    
    // Lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => img.loading = 'lazy');
    }
});