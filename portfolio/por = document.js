// Selectors
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll spy: highlight nav links on scroll
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });
};

// Toggle mobile menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon
    navbar.classList.toggle('active'); // Show/hide navbar
};

// EmailJS form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submit

    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_xzx4zvb';
    const templateID = 'template_erhkm6a';
    const publicKey = 'mUFMWnCfRGWbpHFfZ';

    emailjs.init(publicKey);

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('✅ Message sent successfully!');
            this.reset(); // Clear form after success
        })
        .catch(error => {
            alert('❌ Failed to send the message: ' + JSON.stringify(error));
        });
});
