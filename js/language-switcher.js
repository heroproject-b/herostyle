class LanguageSwitcher {
    constructor() {
        this.buttons = document.querySelectorAll('.language-btn');
        this.sliderButtons = document.querySelectorAll('.slider-btn');
        this.descriptions = document.querySelectorAll('.designer-description');
        this.init();
    }

    init() {
        this.loadLanguage();
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => this.setLanguage(btn.dataset.lang));
        });
        this.sliderButtons.forEach(btn => {
            btn.addEventListener('click', () => this.showDescription(btn.dataset.lang));
        });
    }

    showDescription(lang) {
        // Update active description
        this.descriptions.forEach(desc => {
            desc.classList.toggle('active', desc.dataset.lang === lang);
        });
        
        // Update active button
        this.sliderButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    loadLanguage() {
        const savedLang = localStorage.getItem('language') || 
                        navigator.language.split('-')[0] || 'en';
        this.setActiveButton(savedLang);
        this.showDescription(savedLang);
    }

    setLanguage(lang) {
        localStorage.setItem('language', lang);
        this.setActiveButton(lang);
        this.showDescription(lang);
    }

    setActiveButton(lang) {
        this.buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
            btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new LanguageSwitcher());
