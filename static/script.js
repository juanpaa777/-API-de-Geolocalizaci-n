// Interactividad para las tarjetas de destinos populares
document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento click a las tarjetas populares
    const popularCards = document.querySelectorAll('.popular-card');
    
    popularCards.forEach(card => {
        card.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            if (location) {
                // Llenar el input de búsqueda con la ubicación seleccionada
                const searchInput = document.querySelector('.search-input');
                if (searchInput) {
                    searchInput.value = location;
                    
                    // Agregar animación de focus
                    searchInput.focus();
                    
                    // Hacer scroll suave hacia el formulario de búsqueda
                    const searchContainer = document.querySelector('.search-container');
                    if (searchContainer) {
                        searchContainer.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                    }
                    
                    // Agregar efecto visual temporal
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 200);
                }
            }
        });
        
        // Agregar efecto hover mejorado
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    // Animación de entrada para las tarjetas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar todas las tarjetas populares
    popularCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Efecto de escritura para el placeholder del input
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        const placeholders = [
            '🔍 Busca cualquier lugar del mundo...',
            '🌍 Explora nuevas ubicaciones...',
            '📍 Encuentra tu destino...',
            '🗺️ Descubre el mapa...'
        ];
        let placeholderIndex = 0;
        
        setInterval(() => {
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
            searchInput.placeholder = placeholders[placeholderIndex];
        }, 3000);
    }
    
    // Animación de partículas flotantes adicionales
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            animation: floatParticle 10s linear infinite;
        `;
        
        // Posición inicial aleatoria
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        // Eliminar partícula después de la animación
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }
    
    // Crear partículas periódicamente
    setInterval(createFloatingParticle, 2000);
    
    // Agregar estilo CSS para las partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-${window.innerHeight + 100}px) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Efecto de ripple en el botón de búsqueda
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
    
    // Agregar estilo para el efecto ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});
