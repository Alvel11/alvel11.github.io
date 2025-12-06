// Simple static site navigation
// No backend required - HTML estático puro

document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    setupLanguageSelector();
});

// Highlight active navigation link
function updateActiveNavLink() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentFile || (currentFile === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Setup language selector
function setupLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
        const savedLang = localStorage.getItem('hohohocoin_language') || 'en';
        selector.value = savedLang;
        
        selector.addEventListener('change', (e) => {
            localStorage.setItem('hohohocoin_language', e.target.value);
        });
    }
}
