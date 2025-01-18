// Einfache Animation beim Laden der Seite
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.chef, .product');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(50px)';
    });
    
    setTimeout(() => {
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease-out';
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 500);
});
