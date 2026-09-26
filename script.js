// تأثير بسيط عند التمرير (Scroll Reveal)
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.skill-item, .timeline-item');
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// تهيئة العناصر لتكون مخفية في البداية
document.querySelectorAll('.skill-item, .timeline-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
});