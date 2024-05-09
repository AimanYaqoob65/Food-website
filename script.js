document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const navLinks = navbar.querySelectorAll("a");

    // Toggle the navbar menu on small screens
    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Hide the navbar menu when a link is clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("active");
});
