function validateForm() {
  let isValid = true;

  // Clear previous error messages
  clearErrors();

  // Get values from form fields
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const mobile = document.getElementById("mobile").value.trim();
  const terms = document.getElementById("terms").checked;

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
  const mobileRegex = /^\d{10}$/;

  // Validate full name
  if (name.length < 3) {
    displayError("nameError", "Full name must be at least 3 characters.");
    isValid = false;
  }

  // Validate email
  if (!emailRegex.test(email)) {
    displayError("emailError", "Invalid email format.");
    isValid = false;
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    displayError(
      "passwordError",
      "Password must be at least 8 characters, including letters, numbers & special characters."
    );
    isValid = false;
  }

  // Validate age
  if (isNaN(age) || age < 13 || age > 120) {
    displayError("ageError", "Enter a valid age between 13 and 120.");
    isValid = false;
  }

  // Validate mobile number
  if (!mobileRegex.test(mobile)) {
    displayError("mobileError", "Mobile number must be exactly 10 digits.");
    isValid = false;
  }

  // Validate terms checkbox
  if (!terms) {
    displayError("termsError", "You must agree to the terms and conditions.");
    isValid = false;
  }

  // If validation passes, show success message and return true to submit the form
  if (isValid) {
    alert("Form submitted successfully!");
  }

  return isValid; // If validation fails, the form won't be submitted
}

// Function to display error messages
function displayError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

// Function to clear all error messages
function clearErrors() {
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("ageError").textContent = "";
  document.getElementById("mobileError").textContent = "";
  document.getElementById("termsError").textContent = "";
}
