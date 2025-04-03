// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation items based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .summary-item, .project-card, .skill-category').forEach(element => {
    observer.observe(element);
});

// Add hover effect to skill tags
document.querySelectorAll('.skill-tags span').forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = 'scale(1.1)';
        tag.style.transition = 'transform 0.3s ease';
    });
    
    tag.addEventListener('mouseout', () => {
        tag.style.transform = 'scale(1)';
    });
}); 