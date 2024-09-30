// JavaScript code for Pet Care Services website

// Navigation toggle for mobile view
const menuToggler = document.getElementById("menu-toggler");
const navLinks = document.querySelector(".all-links");

menuToggler.addEventListener("change", () => {
  navLinks.style.display = menuToggler.checked ? "block" : "none";
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
 
// Form submission handling
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Add your form submission logic here
  // You can use AJAX or fetch to send the form data to a server
});

// Additional JavaScript functionalities can be added based on specific requirements.
