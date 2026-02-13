// ===========================
// Scroll Hide Top Bar
// ===========================
let lastScrollPosition = 0;
const topBar = document.querySelector('.top-bar');

if (topBar) {
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;

        // Hide top bar when scrolling down, show when scrolling up
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
            topBar.classList.add('hidden');
        } else {
            topBar.classList.remove('hidden');
        }

        lastScrollPosition = currentScrollPosition;
    });
}

// ===========================
// Hero Title Typing Animation
// ===========================
function heroTitleTypeWriter() {
    const fullText = "Deja de adivinar y empieza a Escalar";
    const typingText = document.querySelector('.hero-typing-text');

    if (!typingText) return;

    let index = 0;
    typingText.textContent = '';

    function type() {
        if (index < fullText.length) {
            typingText.textContent += fullText.charAt(index);
            index++;
            setTimeout(type, 60);
        }
    }

    type();
}

// Start hero title typing animation when page loads
window.addEventListener('load', function () {
    heroTitleTypeWriter();
    aboutTitleTypeWriter();
});

// ===========================
// About Title Typing Animation
// ===========================
function aboutTitleTypeWriter() {
    const fullText = "Marketing Inteligente que Genera Resultados";
    const typingText = document.querySelector('.about-typing-text');

    if (!typingText) return;

    // Create and add cursor element
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.style.display = 'inline-block';
    cursor.style.width = '3px';
    cursor.style.height = '1em';
    cursor.style.backgroundColor = 'var(--primary)';
    cursor.style.marginLeft = '2px';
    cursor.style.animation = 'blink 0.7s infinite';
    typingText.parentElement.appendChild(cursor);

    let index = 0;
    typingText.textContent = '';

    function type() {
        if (index < fullText.length) {
            typingText.textContent += fullText.charAt(index);
            index++;
            setTimeout(type, 60);
        } else {
            // Keep cursor blinking after typing is complete
            cursor.style.animation = 'blink 0.7s infinite';
        }
    }

    type();
}

// ===========================
// Typewriter Animation
// ===========================
function typeWriter() {
    const fullText = "Marketing que escala. Resultados que impulsan.";
    const typingText = document.querySelector('.typing-text');
    const typingCursor = document.querySelector('.typing-cursor');

    if (!typingText) return;

    let index = 0;
    typingText.textContent = '';

    function type() {
        if (index < fullText.length) {
            typingText.textContent += fullText.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    // Keep cursor visible and blinking
    if (typingCursor) {
        typingCursor.style.animation = 'blink 0.7s infinite';
        typingCursor.style.opacity = '1';
    }

    type();
}

// Start typewriter animation when page loads
window.addEventListener('load', function () {
    typeWriter();
});

// ===========================
// Smooth Scrolling Functions
// ===========================
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToContact() {
    scrollToSection('contact');
}

function toggleVideoModal() {
    alert('Video player would open here. Integrate with YouTube or Vimeo.');
}

// ===========================
// Form Handling
// ===========================
function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Get form values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;

    // Validate email
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Simulate form submission (in production, connect to backend)
    setTimeout(() => {
        // Reset form
        form.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Show success message
        showMessage('Thank you! We\'ve received your message and will contact you within 24 hours.', 'success');
    }, 1500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type = 'info') {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
    messageEl.textContent = message;

    // Add styles
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-weight: 500;
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;

    if (type === 'success') {
        messageEl.style.background = '#4caf50';
        messageEl.style.color = 'white';
    } else if (type === 'error') {
        messageEl.style.background = '#f44336';
        messageEl.style.color = 'white';
    }

    document.body.appendChild(messageEl);

    // Remove after 4 seconds
    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => {
            messageEl.remove();
        }, 300);
    }, 4000);
}

// ===========================
// Animation Observer
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe service cards and other animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .blog-card, .section-header'
    );
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow on scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = scrollTop;
});

// ===========================
// Animations Setup
// ===========================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .service-card, .portfolio-item, .blog-card, .section-header {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .service-card.visible, .portfolio-item.visible, .blog-card.visible, .section-header.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// ===========================
// Performance Optimization
// ===========================
// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Security: Form Validation
// ===========================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
}

// Prevent XSS by sanitizing input
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// ===========================
// Analytics Tracking (Optional)
// ===========================
// You can integrate with services like Google Analytics here
function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('cta_click', {
            button_text: button.textContent
        });
    });
});

// ===========================
// Accessibility Enhancements
// ===========================
// Ensure keyboard navigation works
document.querySelectorAll('a, button').forEach(element => {
    element.setAttribute('role', 'button');
});

// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#services';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #2c2c2c;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.prepend(skipLink);

// ===========================
// Back to Top Button
// ===========================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const backToTopButton = document.getElementById('backToTop');
const whatsappButton = document.querySelector('.whatsapp-button');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
        whatsappButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
        whatsappButton.classList.remove('show');
    }
});

