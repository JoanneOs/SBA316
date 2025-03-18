// //chacking
// document.addEventListener('DOMContentLoaded', () => {
//     const appDiv = document.getElementById('app');
//     appDiv.innerHTML = '<h1>Dispatcher Page</h1><p>Welcome to the dispatcher page!</p>';
// });


// // // Helper function to display error and focus on the input
// // function showError(message, element) {
// //     let errorDisplay = document.getElementById("errorDisplay");
// //     errorDisplay.innerHTML = message;
// //     errorDisplay.style.display = "block";
// //     element.focus();
// //   }
  
// //   // Validate email using regex
// //   function isValidEmail(email) {
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return emailRegex.test(email) && !email.endsWith("@example.com");
// //   }
  
// //   // Validate password
// //   function isValidPassword(password, username) {
// //     const minLength = 12;
// //     const hasUpperCase = /[A-Z]/.test(password);
// //     const hasLowerCase = /[a-z]/.test(password);
// //     const hasNumber = /\d/.test(password);
// //     const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
// //     const containsUsername = password.toLowerCase().includes(username.toLowerCase());
// //     const containsPasswordWord = password.toLowerCase().includes("password");
  
// //     return (
// //       password.length >= minLength &&
// //       hasUpperCase &&
// //       hasLowerCase &&
// //       hasNumber &&
// //       hasSpecialChar &&
// //       !containsUsername &&
// //       !containsPasswordWord
// //     );
// //   }
  
// //   // Validate username for special characters or whitespace
// //   function isValidUsername(username) {
// //     const specialCharOrWhitespaceRegex = /[^\w]/;
// //     return !specialCharOrWhitespaceRegex.test(username);
// //   }
  
// //   // Registration Form validation
// //   document.getElementById("registration").addEventListener("submit", function (e) {
// //     e.preventDefault(); // Prevent default form submission behavior
  
// //     // Grab the values from the form fields
// //     let username = document.querySelector('input[name="username"]').value.trim();
// //     let email = document.querySelector('input[name="email"]').value.trim();
// //     let password = document.querySelector('input[name="password"]').value;
// //     let passwordCheck = document.querySelector('input[name="passwordCheck"]').value;
// //     let terms = document.querySelector('input[name="terms"]').checked;
  
// //     // Hide the error message box by default
// //     let errorDisplay = document.getElementById("errorDisplay");
// //     errorDisplay.style.display = "none"; 
  
// //     // Validate username
// //     if (username.length < 4 || new Set(username).size < 2) {
// //       showError("Username must be at least 4 characters with at least 2 unique characters.", document.querySelector('input[name="username"]'));
// //       return;
// //     }
// //     if (!isValidUsername(username)) {
// //       showError("Username cannot contain special characters or whitespace.", document.querySelector('input[name="username"]'));
// //       return;
// //     }
  
// //     // Check if the username is already taken in localStorage
// //     const storedUsers = JSON.parse(localStorage.getItem("users")) || {};
// //     if (storedUsers[username.toLowerCase()]) {
// //       showError("That username is already taken.", document.querySelector('input[name="username"]'));
// //       return;
// //     }
  
// //     // Validate email
// //     if (!isValidEmail(email)) {
// //       showError("Invalid email or email domain.", document.querySelector('input[name="email"]'));
// //       return;
// //     }
  
// //     // Validate passwords
// //     if (!isValidPassword(password, username)) {
// //       showError("Password must be at least 12 characters, contain upper and lower case letters, numbers, special characters, and not contain 'password' or the username.", document.querySelector('input[name="password"]'));
// //       return;
// //     }
// //     if (password !== passwordCheck) {
// //       showError("Passwords do not match.", document.querySelector('input[name="passwordCheck"]'));
// //       return;
// //     }
  
// //     // Validate terms and conditions
// //     if (!terms) {
// //       showError("You must agree to the terms of use.", document.querySelector('input[name="terms"]'));
// //       return;
// //     }
  
// //     // If all validations pass, store user data in localStorage
// //     storedUsers[username.toLowerCase()] = {
// //       username: username.toLowerCase(),
// //       email: email.toLowerCase(),
// //       password: password
// //     };
// //     localStorage.setItem("users", JSON.stringify(storedUsers));
  
// //     // Clear form fields and show success message
// //     document.querySelector('input[name="username"]').value = "";
// //     document.querySelector('input[name="email"]').value = "";
// //     document.querySelector('input[name="password"]').value = "";
// //     document.querySelector('input[name="passwordCheck"]').value = "";
// //     document.querySelector('input[name="terms"]').checked = false;
  
// //     errorDisplay.innerHTML = "Registration successful!";
// //     errorDisplay.style.display = "block";
// //   });
  
// //   // Login Form validation
// //   document.getElementById("login").addEventListener("submit", function (e) {
// //     e.preventDefault(); // Prevent default form submission behavior
  
// //     // Grab the values from the login form fields
// //     let username = document.querySelector('input[name="loginUsername"]').value.trim();
// //     let password = document.querySelector('input[name="loginPassword"]').value;
  
// //     // Hide the error message box by default
// //     let errorDisplay = document.getElementById("loginErrorDisplay");
// //     errorDisplay.style.display = "none"; 
  
// //     // Check if the username exists in localStorage
// //     const storedUsers = JSON.parse(localStorage.getItem("users")) || {};
// //     const storedUser = storedUsers[username.toLowerCase()];
// //     if (!storedUser) {
// //       showError("Username does not exist.", document.querySelector('input[name="loginUsername"]'));
// //       return;
// //     }
  
// //     // Validate password
// //     if (storedUser.password !== password) {
// //       showError("Incorrect password.", document.querySelector('input[name="loginPassword"]'));
// //       return;
// //     }
  
// //     // Clear form fields and show success message
// //     document.querySelector('input[name="loginUsername"]').value = "";
// //     document.querySelector('input[name="loginPassword"]').value = "";
  
// //     errorDisplay.innerHTML = "Login successful!";
// //   });
  
// document.addEventListener("DOMContentLoaded", function() {
//     // Create elements for the navbar
//     const navBar = document.createElement("nav");
//     navBar.className = "navbar navbar-dark bg-dark fixed-top";

//     const containerFluid = document.createElement("div");
//     containerFluid.className = "container-fluid";

//     const brandLink = document.createElement("a");
//     brandLink.className = "navbar-brand";
//     brandLink.href = "#";
//     brandLink.innerText = "Triway Transportation LLC";

//     const togglerButton = document.createElement("button");
//     togglerButton.className = "navbar-toggler";
//     togglerButton.setAttribute("type", "button");
//     togglerButton.setAttribute("data-bs-toggle", "offcanvas");
//     togglerButton.setAttribute("data-bs-target", "#offcanvasDarkNavbar");
//     togglerButton.setAttribute("aria-controls", "offcanvasDarkNavbar");
//     togglerButton.setAttribute("aria-label", "Toggle navigation");

//     const togglerIcon = document.createElement("span");
//     togglerIcon.className = "navbar-toggler-icon";

//     togglerButton.appendChild(togglerIcon);
//     containerFluid.appendChild(brandLink);
//     containerFluid.appendChild(togglerButton);

//     const offcanvas = document.createElement("div");
//     offcanvas.className = "offcanvas offcanvas-end text-bg-dark";
//     offcanvas.setAttribute("tabindex", "-1");
//     offcanvas.id = "offcanvasDarkNavbar";
//     offcanvas.setAttribute("aria-labelledby", "offcanvasDarkNavbarLabel");

//     const offcanvasHeader = document.createElement("div");
//     offcanvasHeader.className = "offcanvas-header";
    
//     const offcanvasTitle = document.createElement("h5");
//     offcanvasTitle.className = "offcanvas-title";
//     offcanvasTitle.id = "offcanvasDarkNavbarLabel";
//     offcanvasTitle.innerText = "Triway Transportation";

//     const btnClose = document.createElement("button");
//     btnClose.className = "btn-close btn-close-white";
//     btnClose.setAttribute("data-bs-dismiss", "offcanvas");
//     btnClose.setAttribute("aria-label", "Close");

//     offcanvasHeader.appendChild(offcanvasTitle);
//     offcanvasHeader.appendChild(btnClose);

//     const offcanvasBody = document.createElement("div");
//     offcanvasBody.className = "offcanvas-body";

//     const navList = document.createElement("ul");
//     navList.className = "navbar-nav justify-content-end flex-grow-1 pe-3";

//     const links = [
//         { href: "#dashboard", text: "Dashboard", active: true },
//         { href: "#routes", text: "Routes" },
//         { href: "#truck-status", text: "Truck Status" },
//         { href: "#amazon-loads", text: "Amazon Loads" },
//     ];

//     links.forEach(linkInfo => {
//         const li = document.createElement("li");
//         li.className = "nav-item";

//         const link = document.createElement("a");
//         link.className = `nav-link ${linkInfo.active ? "active" : ""}`;
//         link.href = linkInfo.href;
//         link.innerText = linkInfo.text;

//         li.appendChild(link);
//         navList.appendChild(li);
//     });

//     offcanvasBody.appendChild(navList);
//     offcanvas.appendChild(offcanvasHeader);
//     offcanvas.appendChild(offcanvasBody);
//     containerFluid.appendChild(offcanvas);
//     navBar.appendChild(containerFluid);
//     document.body.appendChild(navBar);

//     // Create the header
//     const header = document.createElement("header");
//     header.className = "text-center";
    
//     const h1 = document.createElement("h1");
//     h1.innerText = "Manager/Dispatcher Dashboard";

//     const leadP = document.createElement("p");
//     leadP.className = "lead";
//     leadP.innerText = "Manage your drivers, routes, and track Amazon loads.";

//     header.appendChild(h1);
//     header.appendChild(leadP);
//     document.body.appendChild(header);

//     // Create cards for dashboard, routes, and truck status
//     const mainContainer = document.createElement("div");
//     mainContainer.className = "container my-4";

//     const row = document.createElement("div");
//     row.className = "row";

//     const sections = [
//         { title: "Dashboard", bg: "bg-primary", desc: "Quick overview of your fleet and tasks.", buttonText: "View Dashboard", btnClass: "btn-info" },
//         { title: "Routes", bg: "bg-success", desc: "Manage and assign routes to drivers.", buttonText: "View Routes", btnClass: "btn-warning" },
//         { title: "Truck Status", bg: "bg-secondary", desc: "Check and update the status of each truck.", buttonText: "Check Status", btnClass: "btn-dark" },
//     ];

//     sections.forEach(section => {
//         const col = document.createElement("div");
//         col.className = "col-md-4 mb-4";

//         const card = document.createElement("div");
//         card.className = "card";

//         const cardHeader = document.createElement("div");
//         cardHeader.className = `card-header ${section.bg} text-white`;
//         const headerH3 = document.createElement("h3");
//         headerH3.innerText = section.title;
//         cardHeader.appendChild(headerH3);

//         const cardBody = document.createElement("div");
//         cardBody.className = "card-body";
//         const bodyP = document.createElement("p");
//         bodyP.innerText = section.desc;

//         const button = document.createElement("button");
//         button.className = `btn ${section.btnClass}`;
//         button.innerText = section.buttonText;

//         cardBody.appendChild(bodyP);
//         cardBody.appendChild(button);

//         card.appendChild(cardHeader);
//         card.appendChild(cardBody);
//         col.appendChild(card);
//         row.appendChild(col);
//     });

//     mainContainer.appendChild(row);
//     document.body.appendChild(mainContainer);
// });


document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `
        <h1>Dispatcher Page</h1>
        <p>Welcome to the dispatcher page! This is where you can manage dispatching tasks.</p>
    `;
});git 

