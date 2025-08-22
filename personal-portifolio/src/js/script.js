document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger'); 
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    // Menu mobile
    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    // Prevenir comportamento padrão dos links
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', e => e.preventDefault());
    });
});