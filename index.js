// Cache elements using getElementById and querySelector
const logo = document.getElementById('company-logo');
const navLinks = document.querySelectorAll('nav a');

// Navigating DOM: Using parent-child-sibling relationship
const firstNavLink = navLinks[0];
const nextNavLink = firstNavLink.nextElementSibling;

// Log elements to verify caching and navigation
console.log(logo); // Company logo element
console.log(firstNavLink); // First navigation link (Home)
console.log(nextNavLink); // Second navigation link (Services)

// Adding a simple interaction to the form submit button
const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});
