// Helper function to display error and focus on the input
function showError(message, element) {
    let errorDisplay = document.getElementById("errorDisplay");
    errorDisplay.innerHTML = message;
    errorDisplay.style.display = "block";
    element.focus();
  }
  
  // Validate email using regex
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && !email.endsWith("@example.com");
  }
  
  // Validate password
  function isValidPassword(password, username) {
    const minLength = 12;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const containsUsername = password.toLowerCase().includes(username.toLowerCase());
    const containsPasswordWord = password.toLowerCase().includes("password");
  
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar &&
      !containsUsername &&
      !containsPasswordWord
    );
  }
  
  // Validate username for special characters or whitespace
  function isValidUsername(username) {
    const specialCharOrWhitespaceRegex = /[^\w]/;
    return !specialCharOrWhitespaceRegex.test(username);
  }
  
  // Registration Form validation
  document.getElementById("registration").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Grab the values from the form fields
    let username = document.querySelector('input[name="username"]').value.trim();
    let email = document.querySelector('input[name="email"]').value.trim();
    let password = document.querySelector('input[name="password"]').value;
    let passwordCheck = document.querySelector('input[name="passwordCheck"]').value;
    let terms = document.querySelector('input[name="terms"]').checked;
  
    // Hide the error message box by default
    let errorDisplay = document.getElementById("errorDisplay");
    errorDisplay.style.display = "none"; 
  
    // Validate username
    if (username.length < 4 || new Set(username).size < 2) {
      showError("Username must be at least 4 characters with at least 2 unique characters.", document.querySelector('input[name="username"]'));
      return;
    }
    if (!isValidUsername(username)) {
      showError("Username cannot contain special characters or whitespace.", document.querySelector('input[name="username"]'));
      return;
    }
  
    // Check if the username is already taken in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || {};
    if (storedUsers[username.toLowerCase()]) {
      showError("That username is already taken.", document.querySelector('input[name="username"]'));
      return;
    }
  
    // Validate email
    if (!isValidEmail(email)) {
      showError("Invalid email or email domain.", document.querySelector('input[name="email"]'));
      return;
    }
  
    // Validate passwords
    if (!isValidPassword(password, username)) {
      showError("Password must be at least 12 characters, contain upper and lower case letters, numbers, special characters, and not contain 'password' or the username.", document.querySelector('input[name="password"]'));
      return;
    }
    if (password !== passwordCheck) {
      showError("Passwords do not match.", document.querySelector('input[name="passwordCheck"]'));
      return;
    }
  
    // Validate terms and conditions
    if (!terms) {
      showError("You must agree to the terms of use.", document.querySelector('input[name="terms"]'));
      return;
    }
  
    // If all validations pass, store user data in localStorage
    storedUsers[username.toLowerCase()] = {
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: password
    };
    localStorage.setItem("users", JSON.stringify(storedUsers));
  
    // Clear form fields and show success message
    document.querySelector('input[name="username"]').value = "";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('input[name="password"]').value = "";
    document.querySelector('input[name="passwordCheck"]').value = "";
    document.querySelector('input[name="terms"]').checked = false;
  
    errorDisplay.innerHTML = "Registration successful!";
    errorDisplay.style.display = "block";
  });
  
  // Login Form validation
  document.getElementById("login").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Grab the values from the login form fields
    let username = document.querySelector('input[name="loginUsername"]').value.trim();
    let password = document.querySelector('input[name="loginPassword"]').value;
  
    // Hide the error message box by default
    let errorDisplay = document.getElementById("loginErrorDisplay");
    errorDisplay.style.display = "none"; 
  
    // Check if the username exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || {};
    const storedUser = storedUsers[username.toLowerCase()];
    if (!storedUser) {
      showError("Username does not exist.", document.querySelector('input[name="loginUsername"]'));
      return;
    }
  
    // Validate password
    if (storedUser.password !== password) {
      showError("Incorrect password.", document.querySelector('input[name="loginPassword"]'));
      return;
    }
  
    // Clear form fields and show success message
    document.querySelector('input[name="loginUsername"]').value = "";
    document.querySelector('input[name="loginPassword"]').value = "";
  
    errorDisplay.innerHTML = "Login successful!";
  });
  