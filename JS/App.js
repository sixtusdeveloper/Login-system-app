document.addEventListener("DOMContentLoaded", function () {
  // Define the submitData function before adding the event listener
  function submitData() {
    console.log("submitData function is called");
    console.log("Successfully Submitted");
    window.location.href = "success.html"; // Redirect to success page
  }

  const form = document.getElementById("signupForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    let isValid = true;

    // Reset previous error messages
    const errorFields = document.querySelectorAll(".error");
    errorFields.forEach(function (errorField) {
      errorField.textContent = "";
    });

    // Validate Name
    if (nameInput.value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim().match(/^\S+@\S+\.\S+$/)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      isValid = false;
    }

    // Validate Password
    if (passwordInput.value.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters long";
      isValid = false;
    }

    // Validate Confirm Password
    if (confirmPasswordInput.value !== passwordInput.value) {
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match";
      isValid = false;
    }

    // Redirect to success page if all validations pass
    if (isValid) {
      submitData(); // Call the submitData function for redirection
    }
  });
});



// This code snippet adds an event listener to the form element with the id "signupForm". When the form is submitted, the event listener callback function is executed. Inside the callback function, the form submission is prevented using event.preventDefault() to handle form validation manually.
// function validateForm() {
//   // Clear previous error messages
//   document.getElementById('usernameError').innerText = '';
//   document.getElementById('emailError').innerText = '';
//   document.getElementById('passwordError').innerText = '';
//   document.getElementById('confirmPasswordError').innerText = '';

//   // Get form values
//   var username = document.getElementById('username').value;
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//   var confirmPassword = document.getElementById('confirmPassword').value;

//   var isValid = true;

//   // Username validation
//   if (username === '') {
//     document.getElementById('usernameError').innerText = 'Username is required';
//     isValid = false;
//   }

//   // Email validation
//   if (email === '') {
//     document.getElementById('emailError').innerText = 'Email is required';
//     isValid = false;
//   } else if (!validateEmail(email)) {
//     document.getElementById('emailError').innerText = 'Invalid email format';
//     isValid = false;
//   }

//   // Password validation
//   if (password === '') {
//     document.getElementById('passwordError').innerText = 'Password is required';
//     isValid = false;
//   } else if (password.length < 6) {
//     document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
//     isValid = false;
//   }

//   // Confirm Password validation
//   if (confirmPassword === '') {
//     document.getElementById('confirmPasswordError').innerText = 'Confirm Password is required';
//     isValid = false;
//   } else if (password !== confirmPassword) {
//     document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
//     isValid = false;
//   }

//   return isValid;
// }

// function validateEmail(email) {
//   // Simple email validation regex
//   var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }



// Another apporach is to use the form validation API. The form validation API is a set of built-in methods that can be used to validate form fields. Here is an example of how you can use the form validation API to validate the form fields:
// document.getElementById('loginForm').addEventListener('submit', function (event) {
//   // Clear previous error messages
//   const errorElements = document.querySelectorAll('.error');
//   errorElements.forEach(element => element.innerText = '');

//   // Get form elements
//   const form = event.target;
//   const username = form.username;
//   const email = form.email;
//   const password = form.password;
//   const confirmPassword = form.confirmPassword;

//   let isValid = true;

//   // Custom validation messages
//   if (!username.validity.valid) {
//     document.getElementById('usernameError').innerText = 'Username is required';
//     isValid = false;
//   }

//   if (!email.validity.valid) {
//     document.getElementById('emailError').innerText = 'Please enter a valid email address';
//     isValid = false;
//   }

//   if (!password.validity.valid) {
//     if (password.validity.tooShort) {
//       document.getElementById('passwordError').innerText = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
//     } else {
//       document.getElementById('passwordError').innerText = 'Password is required';
//     }
//     isValid = false;
//   }

//   if (!confirmPassword.validity.valid || password.value !== confirmPassword.value) {
//     if (password.value !== confirmPassword.value) {
//       document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
//     } else {
//       document.getElementById('confirmPasswordError').innerText = 'Confirm Password is required';
//     }
//     isValid = false;
//   }

//   // If all fields are valid, allow form submission
//   if (!isValid) {
//     // Prevent form submission if there are validation errors
//     event.preventDefault();
//   } else {
//     alert('Form is valid and ready for submission');
//   }
// });
