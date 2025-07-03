// QUIENES SOMOS - JAVASCRIPT FUNCIONAL

document.addEventListener('DOMContentLoaded', function() {
    // Funciones para los modales (redirigir al index)
    function abrirModalRegistro() {
        window.location.href = '../index.html';
        // Después de cargar, abrir el modal de registro
        setTimeout(() => {
            const modalRegistro = document.getElementById('modalRegistro');
            if (modalRegistro) modalRegistro.showModal();
        }, 100);
    }

    function abrirModal(tipo) {
        // Redirigir al index donde están los modales
        window.location.href = '../index.html#modal-' + tipo.toLowerCase();
    }

    // Hacer las funciones disponibles globalmente
    window.abrirModalRegistro = abrirModalRegistro;
    window.abrirModal = abrirModal;

    // Smooth scrolling para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animación al scroll con Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Una vez animado, dejar de observar para mejor rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.content-card, .valor-card, .intro-card, .stat-card, .mission-point, .vision-goal').forEach(card => {
        observer.observe(card);
    });

    // Efecto parallax suave para el hero
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Contador animado para las estadísticas
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const suffix = counter.textContent.replace(/[0-9]/g, '');
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + suffix;
                }
            }, 50);
        });
    }

    // Activar contadores cuando sean visibles
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.presentacion');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Mejorar accesibilidad con navegación por teclado
    document.querySelectorAll('.valor-card, .mission-point, .vision-goal').forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Lazy loading para imágenes
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Preloader simple (opcional)
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Easter egg: Efecto de ondas al hacer clic en el logo
    const logo = document.querySelector('.mascota');
    if (logo) {
        logo.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'wave 1s ease-in-out';
            }, 10);
        });
    }

    // Scroll to top suave
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Hacer la función disponible globalmente
    window.scrollToTop = scrollToTop;

    // Botón de scroll to top (crear si no existe)
    if (!document.querySelector('.scroll-to-top')) {
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top btn btn-primary rounded-circle position-fixed';
        scrollBtn.style.cssText = `
            bottom: 20px; 
            right: 20px; 
            width: 50px; 
            height: 50px; 
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
        scrollBtn.addEventListener('click', scrollToTop);
        document.body.appendChild(scrollBtn);

        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
            } else {
                scrollBtn.style.opacity = '0';
            }
        });
    }

    console.log('🌊 Pescadería Don Walter - Quiénes Somos cargado correctamente');
});
