// Cache elements using getElementById and querySelector

//grabing the company log by ID
const logo = document.getElementById('company-logo');

// Grab all navigation links using querySelectorAll
const navLinks = document.querySelectorAll('nav a');

// Navigating DOM: Using parent-child-sibling relationship
//// Let's start by focusing on the first nav link (Home)
const firstNavLink = navLinks[0];

// Now let's grab the link after "Home" (which should be "Services")
const nextNavLink = firstNavLink.nextElementSibling;

// Log elements to verify caching and navigation
console.log(logo); // Company logo element
console.log(firstNavLink); // First navigation link (Home)
console.log(nextNavLink); // Second navigation link (Services)

// Adding a simple interaction to the form submit button
const submitButton = document.getElementById('submit-btn');

// Adding a simple "form submitted" alert when the button is clicked
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});
