document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling already handled by CSS

    // Intersection Observer for sections
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Staggered skills animation
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skills = entry.target.querySelectorAll('li');
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.classList.add('visible');
                    }, index * 100); // Faster, smoother stagger
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    const skillsSection = document.querySelector('#skills .skills-list').parentElement;
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // Form
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! 🎉 (Demo)');
        form.reset();
    });
});
