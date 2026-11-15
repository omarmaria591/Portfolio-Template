
// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Update footer year automatically
const footer = document.querySelector('footer p');

if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} Client Name. All Rights Reserved.`;
}
