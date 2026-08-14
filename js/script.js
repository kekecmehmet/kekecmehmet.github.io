document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('site-header');
    const nav = document.getElementById('site-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const progress = document.querySelector('.scroll-progress span');
    const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const closeMenu = () => {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.querySelector('span').textContent = 'Menu';
        menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    };

    menuToggle.addEventListener('click', () => {
        const willOpen = !nav.classList.contains('is-open');
        nav.classList.toggle('is-open', willOpen);
        menuToggle.setAttribute('aria-expanded', String(willOpen));
        menuToggle.querySelector('span').textContent = willOpen ? 'Close' : 'Menu';
        menuToggle.querySelector('i').className = willOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    navLinks.forEach((link) => link.addEventListener('click', closeMenu));

    window.addEventListener('resize', () => {
        if (window.innerWidth > 980) closeMenu();
    });

    const updateScrollState = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
        progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
        header.classList.toggle('is-scrolled', window.scrollY > 24);

        let current = '';
        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 180) current = `#${section.id}`;
        });
        navLinks.forEach((link) => {
            const isCurrent = link.getAttribute('href') === current;
            if (isCurrent) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
        });
    };

    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    document.getElementById('year').textContent = new Date().getFullYear();
});
