// Wrapper Area
const wrapper__Area = document.querySelector('#wrapper_Area');

// Login & Sing-Up Forms
const loginForm = document.querySelector('#loginForm');
const signUpForm = document.querySelector('#signUpForm');

// All Login And Sing-Up Forms Inputs 
const allLoginFormFields = Array.from(document.querySelectorAll('#loginForm .input__group .field input'));
const allSignUpFormFields = Array.from(document.querySelectorAll('#signUpForm .input__group:not(.confirm__group) .field input'));

// Password And Confirm Password Fileds
const passwordField = document.querySelector('#signUpPassword');
const confirmPassword = document.querySelector('#signUpConfirmPassword');

// Login % Sign-Up Submit Buttons
const loginFormSubmitBtn = document.querySelector('#loginSubmitBtn');
const signUpFormSubmitBtn = document.querySelector('#signUpSubmitBtn');

// Show Hide Password Element
const showHidePassDom = Array.from(document.querySelectorAll('.showHide__Icon i'));

// Pattrens Regex
const patterns = { // All This Regex Code Is For Demo You Can Add Your Own Regex Code :)
  username: /^[a-z]+\d?/,
  email: /^[^\W\d\.-_]+\w\d?@[a-z0-9]+\.([a-z0-9]{2,6})(\.[a-z0-9]{2,6})?$/,
  password: /^[^\d\W]\w+\d?\W?\w?/i,
};

// Aside Area
const aside__Area = document.querySelector('#aside_Area');

// Aside Sing-Up & Sign In Buttons
const aside__SignUp_Button = document.querySelector('#aside_signUp_Btn');
const aside__SignIn_Button = document.querySelector('#aside_signIn_Btn');

// - - - - -  Events - - - - - //

// When Submitting On Login & Sign-Up Forms
loginForm.addEventListener('submit', (e) => {
  // Stop Form Submission
  e.preventDefault();
  // Call Login Form Validation Function
  loginFormValidation();
});
signUpForm.addEventListener('submit', (e) => {
  // Stop Form Submission
  e.preventDefault();
  // Call Sign-Up Form Validation Function
  signUpFormValidation();
});

// Every Time Click On Aside Sign-Up & Sing-In Buttons. Call Function Chnage Form Mode
aside__Area.addEventListener('click', chnageFormMode);
aside__Area.addEventListener('click', chnageFormMode);

// - - - - -  Functions - - - - - //

// Change Form Mode Function
function chnageFormMode(e) {
  // Check. If The Target Element Is Aside Sign-Up Button
  if(e.target === aside__SignUp_Button){
    // Add Class [ Sign Up Mode Active ] On Wrapper Area
    wrapper__Area.classList.add('sign-up__Mode-active');
  };
  // Check. If The Target Element Is Aside Sign-In Button
  if(e.target === aside__SignIn_Button){
    // Remove Class [ Sign Up Mode Active ] From Wrapper Area
    wrapper__Area.classList.remove('sign-up__Mode-active');
  };
};

// Function Show Hide Password
(function showHidePass() {
  // Loop On All The Show Hide Password Icon
  showHidePassDom.forEach(icon =>{
    // When Click On Any Show Hide Icon...
    icon.addEventListener('click', () => {
      // Select The Target Password Input
      const targetAreaInput = icon.parentElement.parentElement.querySelector('.field input');
      // If The Target Icon Has Hide-icon
      if(icon.className === 'bx bx-hide'){
        // Change The Target Icon Class
        icon.className = 'bx bx-show';
        // Change The Target Input Area Type
        targetAreaInput.setAttribute('type', 'text');
      }else{ // else
        // Change The Target Icon Class
        icon.className = 'bx bx-hide';
        // Change The Target Input Area Type
        targetAreaInput.setAttribute('type', 'password');
      };
    });
  });
})();



// Login Form Validation Function
function loginFormValidation() {
  // Loop On All The Inputs
  allLoginFormFields.forEach(input => {
    // Input Targte Field Name Value
    const inputAttribueValueName = input.attributes.name.value;
    // Input Value Without Spaces
    const inputValue = input.value.trim();
    // Input Regex Validation Response [ True || False ] :)
    const patterns = {
      username: /^[a-zA-Z0-9]{5,}$/, // Example regex
      password: /^[a-zA-Z0-9!@#$%^&*]{8,}$/, // Example regex
      email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, // Example for email validation
      // Add more as needed
    };
    console.log(inputAttribueValueName); // Check if it matches a key in patterns
    if (!patterns[inputAttribueValueName]) {
      console.error(`No pattern defined for: ${inputAttribueValueName}`);
      return;
    }
    
    const inputRegex = patterns[inputAttribueValueName].test(inputValue);

    function loginFormValidation() {
      // Loop On All The Inputs
      allLoginFormFields.forEach(input => {
        // Input Target Field Name Value
        const inputAttribueValueName = input.attributes.name.value;
        // Input Value Without Spaces
        const inputValue = input.value.trim();
        
        // Check if the pattern for the input exists
        if (!patterns[inputAttribueValueName]) {
          console.error(`No pattern defined for: ${inputAttribueValueName}`);
          return; // Exit early if no pattern is found
        }
    
        // Input Regex Validation Response [ True || False ]
        const inputRegex = patterns[inputAttribueValueName].test(inputValue);
    
        // Check If The Input Value Is Empty
        if (inputValue === '') {
          // Call Function Set Error For
          setErrorFor(input, `${inputAttribueValueName} is required. Please enter your response.`);
        } else if (inputRegex === false) { // Check if input value does not match the pattern
          // Call Function Set Error For
          setErrorFor(input, `${inputAttribueValueName} is invalid.`);
        } else { // If the input is valid
          // Call Function Set Success For
          setSuccessFor(input);
        }
      });
    }

    // Check If The Input Value Is Empty
    if(inputValue === ''){
      // Call Function Set Error For
      setErrorFor(input, `${inputAttribueValueName} is required. Please enter your response.`);
    }
    else if(inputRegex === false){ // Else If: If The InputRegext Response Is False
      // Call Function Set Error For
      setErrorFor(input, `${inputAttribueValueName} Is Invalid .`);
    }else{ // Else
      // Call Function Set Success For
      setSuccessFor(input);
    };
  });
};







// Sign-Up Form Validation Function
function signUpFormValidation() {
    let isFormValid = true; // Flag to track overall form validity
  
    // Loop On All The Inputs
    allSignUpFormFields.forEach(input => {
      // Password And Confirm Password Fileds Values Without Spaces
      const passwordFieldValue = passwordField.value.trim();
      const conifrmPassValue = confirmPassword.value.trim();
      // Input Target Field Name Value
      const inputAttributeName = input.attributes.name.value;
      // Input Value Without Spaces
      const inputValue = input.value.trim();
      // Input Regex Validation Response [ True || False ] :)
      const inputRegex = patterns[inputAttributeName].test(inputValue);
  
      // Check If The Input Value Is Empty
      if(inputValue === ''){
        // Call Function Set Error For
        setErrorFor(input, `${inputAttributeName} is required. Please enter your response.`);
        isFormValid = false;
      } else if(inputRegex === false){ // Else If: If The InputRegex Response Is False
        // Call Function Set Error For
        setErrorFor(input, `${inputAttributeName} Is Invalid.`);
        isFormValid = false;
      } else { // Else
        // Call Function Set Success For
        setSuccessFor(input);
      };
  
      // Validation The Confirm Password
      if(conifrmPassValue === ''){ // Check If The Confirm Password Value Is Empty
        // Call Function Set Error For
        setErrorFor(confirmPassword, `Confirm password is required. Please enter your response.`);
        isFormValid = false;
      } else if(conifrmPassValue !== passwordFieldValue){ // Check If The Confirm Password Value Does Not Match The Password Filed
        // Call Function Set Error For
        setErrorFor(confirmPassword, `Confirm password does not match.`);
        isFormValid = false;
      } else { // Else
        // Call Function Set Success For
        setSuccessFor(confirmPassword);
      };
    });
  
    // Check if the form is valid
    if (isFormValid) {
      // Change Submit Button Text and Style
      signUpFormSubmitBtn.innerHTML = 'Registered successfully';
      signUpFormSubmitBtn.style.backgroundColor = 'green';
      signUpFormSubmitBtn.style.color = 'white';
      // Change Submit Button Action
      signUpFormSubmitBtn.onclick = function() {
        // Implement the action you want after successful registration
        // For example, redirect to a new page or display a success message
        console.log('Redirecting to login page...');
      };
    } else {
      // Reset Submit Button Text and Style
      signUpFormSubmitBtn.innerHTML = 'Sign Up';
      signUpFormSubmitBtn.style.backgroundColor = ''; // Reset to default
      signUpFormSubmitBtn.style.color = ''; // Reset to default
      // Reset Submit Button Action
      signUpFormSubmitBtn.onclick = function() {
        signUpFormValidation(); // Revalidate form on button click
      };
    }
  };

// Set Error For Function
function setErrorFor(input, message){
  // Select The Target Parent Target Input Group
  const targetParentInput = input.parentElement.parentElement;
  // Select The Target Input Error Message
  const targetErrorMessage = targetParentInput.querySelector('.input__error_message');

  // Remove Class FormSucess From The Parent Target
  targetParentInput.classList.remove('formSuccess');
  // Add Class Success On Target ParentElement
  targetParentInput.classList.add('formError');
  // Set The Message Inside The Target Error Message
  targetErrorMessage.innerHTML = message;
};

// Set Success For Function
function setSuccessFor(input) {
    // Select The Target Parent Target Input Group
    const targetParentInput = input.parentElement.parentElement;
    // Select The Target Input Error Message
    const targetErrorMessage = targetParentInput.querySelector('.input__error_message');
  
    // Remove Class FormError From The Parent Target
    targetParentInput.classList.remove('formError');
    // Add Class Success On Target ParentElement
    targetParentInput.classList.add('formSuccess');
    // Empty The Error Message
    targetErrorMessage.innerHTML = '';
  
    // Check if all input fields are successful
    const allSuccess = allSignUpFormFields.every(field => field.parentElement.parentElement.classList.contains('formSuccess'));
    if (allSuccess) {
      // Change register button text and style
      signUpFormSubmitBtn.textContent = 'You have registered successfully';
      signUpFormSubmitBtn.style.backgroundColor = 'green';
      signUpFormSubmitBtn.disabled = true; // Disable the button to prevent further submissions
  
      // Add event listener for "Come back sign in" action
      signUpFormSubmitBtn.addEventListener('click', redirectToSignIn);
    }
  }

  
  
  // Function to redirect to sign-in
  function redirectToSignIn() {
    // Perform any action you need before redirecting
    // For example, redirecting to the sign-in page
    window.location.href = 'signin.html';
  }




  $(document).ready(function() {
    var images = [
      "/Images/LogoFormLogin.png",
      "/Images/LogoFormLoginSlideshow2.png",
      "/Images/LogoFormLoginSlideshow3.png",
      "/Images/LogoFormLoginSlideshow2.png",
      "/Images/LogoFormLoginSlideshow1.png",
      "/Images/LogoFormLoginSlideshow4.png",
      "/Images/LogoFormLoginSlideshow5.png",
  
     
    ];
  
    var currentIndex = 0;
  
    function preloadImages() {
      for (var i = 0; i < images.length; i++) {
        $('<img/>')[0].src = images[i];
      }
    }
  
    function slideshow() {
      $('#slideshow1 img').fadeOut('slow', function() {
        $(this).attr('src', images[currentIndex]).fadeIn('slow');
      });
      currentIndex = (currentIndex + 1) % images.length;
      setTimeout(slideshow, 4000); // Change the slide every 4 seconds
    }
  
    preloadImages(); // Preload images
    slideshow(); // Start slideshow
  });




// za fade na Login

document.addEventListener("DOMContentLoaded", function() {
  var lastScrollTop = 0;
  var fadeImages = document.querySelectorAll(".fade-image");

  function fadeInImage() {
    fadeImages.forEach(function(image) {
      var positionFromTop = image.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (positionFromTop - windowHeight <= 0) {
        image.style.animation = "fadeIn 1s ease-in-out forwards";
      } else {
        image.style.animation = "fadeOut 1s ease-in-out forwards";
      }
    });
  }

  window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      fadeInImage();
    } else {
      // Scrolling up
      fadeInImage();
    }
    lastScrollTop = currentScroll;
  });

  // Initially fade in images in view on page load
  fadeInImage();
});



document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('signUpPassword');
  const toggleIcon = this.querySelector('i');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('bx-hide');
    toggleIcon.classList.add('bx-show');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('bx-show');
    toggleIcon.classList.add('bx-hide');
  }
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function () {
  const confirmPasswordInput = document.getElementById('signUpConfirmPassword');
  const toggleIcon = this.querySelector('i');
  
  if (confirmPasswordInput.type === 'password') {
    confirmPasswordInput.type = 'text';
    toggleIcon.classList.remove('bx-hide');
    toggleIcon.classList.add('bx-show');
  } else {
    confirmPasswordInput.type = 'password';
    toggleIcon.classList.remove('bx-show');
    toggleIcon.classList.add('bx-hide');
  }
});


// reset password

// Function to redirect to the login page
function goBackToSignIn() {
  window.location.href = '/Html-Page/Login.html'; // Redirect to the login page
}


// reset password
// Function to toggle the display of the reset password form
// Function to toggle the display of the login form elements and show the reset password input
function toggleResetPassword() {
  // Elements to hide
  const usernameInputGroup = document.getElementById('loginUsername').closest('.input__group');
  const passwordInputGroup = document.getElementById('loginPassword').closest('.input__group');
  const signInButton = document.getElementById('loginSubmitBtn');
  const rememberPassword =   document.getElementById('rememberMe');
  const checkMark =  document.getElementById('checkboxInput');
  const forgotPass = document.getElementById('forgotpass');
  const titleform = document.getElementById('titleForm');
  const googleFacebook1 = document.getElementById('googleFacebook');
  // Element to show
  const resetForm = document.getElementById('resetPasswordForm');

  // Hide the username and password input groups, and the sign-in button
  usernameInputGroup.style.display = 'none';
  passwordInputGroup.style.display = 'none';
  signInButton.style.display = 'none';
  rememberPassword.style.display = 'none';
  checkMark.style.display = 'none';
  forgotPass.style.display = 'none';
  titleform.style.display = 'none';
  googleFacebook1.style.display = 'none'; 

  // Show the reset password form
  resetForm.style.display = 'block';
}

// Function to validate if the input is a properly formatted email address
function validateEmail() {
  const emailInput = document.getElementById('resetEmail');
  const emailError1 = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for validating email format

  // Check if the input matches the email format
  if (!emailRegex.test(emailInput.value)) {
    emailError1.style.display = 'block'; // Show the warning message
  } else {
    emailError1.style.display = 'none'; // Hide the warning message
  }
}

// Function to handle reset password submission
function submitResetPassword() {
  const emailInput = document.getElementById('resetEmail');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for validating email format

  // Check if the input is a valid email
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address, such as example@yahoo.com.');
    return; // Prevent form submission if the email is invalid
  }

  // Additional logic to handle the password reset submission
  alert('Password reset instructions have been sent to your email.');
}
// reset password




// Registration Function
document.getElementById('signUpSubmitBtn').addEventListener('click', function(event) {
  event.preventDefault();

  const username = document.getElementById('signUpUsername').value.trim();
  const email = document.getElementById('signUpEmail').value.trim();
  const password = document.getElementById('signUpPassword').value;
  const confirmPassword = document.getElementById('signUpConfirmPassword').value;

  // Get error message elements
  const signUpUsernameError = document.getElementById('signUpUsernameError');
  const signUpEmailError = document.getElementById('signUpEmailError');
  const signUpPasswordError = document.getElementById('signUpPasswordError');
  const signUpConfirmPasswordError = document.getElementById('signUpConfirmPasswordError');

  // Clear previous error messages
  signUpUsernameError.textContent = '';
  signUpEmailError.textContent = '';
  signUpPasswordError.textContent = '';
  signUpConfirmPasswordError.textContent = '';

  let isValid = true;

  // Validation
  if (username === '') {
    signUpUsernameError.textContent = 'Username is required.';
    isValid = false;
  }
  if (email === '') {
    signUpEmailError.textContent = 'Email is required.';
    isValid = false;
  }
  if (password === '') {
    signUpPasswordError.textContent = 'Password is required.';
    isValid = false;
  }
  if (confirmPassword === '') {
    signUpConfirmPasswordError.textContent = 'Confirm password is required.';
    isValid = false;
  }
  if (password !== confirmPassword) {
    signUpConfirmPasswordError.textContent = 'Passwords do not match.';
    isValid = false;
  }

  if (!isValid) return;

  // Save to localStorage (example)
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  
  alert('Registration successful! You can now log in.');
  document.getElementById('signUpForm').reset();
});

// Login Function
document.getElementById('loginSubmitBtn').addEventListener('click', function(event) {
  event.preventDefault();

  const loginUsername = document.getElementById('loginUsername').value.trim();
  const loginPassword = document.getElementById('loginPassword').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  // Get error message elements
  const loginUsernameError = document.getElementById('loginUsernameError');
  const loginPasswordError = document.getElementById('loginPasswordError');

  // Clear previous error messages
  loginUsernameError.textContent = '';
  loginPasswordError.textContent = '';

  // Validation
  let isValid = true;

  if (loginUsername === '') {
    loginUsernameError.textContent = 'Username is required.';
    isValid = false;
  }
  if (loginPassword === '') {
    loginPasswordError.textContent = 'Password is required.';
    isValid = false;
  }

  if (!isValid) return;

  if (loginUsername === storedUsername && loginPassword === storedPassword) {
    alert('Login successful!');
    // Redirect to another page or perform any other actions
  } else {
    loginPasswordError.textContent = 'Invalid username or password.';
  }
});

// Login Function
document.getElementById('loginSubmitBtn').addEventListener('click', function(event) {
  event.preventDefault();

  // Get input values
  const loginUsername = document.getElementById('loginUsername').value.trim();
  const loginPassword = document.getElementById('loginPassword').value;

  // Get error message elements by their IDs
  const loginUsernameError = document.getElementById('loginUsernameError');
  const loginPasswordError = document.getElementById('loginPasswordError');

  // Clear previous error messages
  loginUsernameError.textContent = '';
  loginPasswordError.textContent = '';

  // Validation
  let isValid = true;

  if (loginUsername === '') {
    loginUsernameError.textContent = 'Username is required.';
    isValid = false;
  }

  if (loginPassword === '') {
    loginPasswordError.textContent = 'Password is required.';
    isValid = false;
  }

  if (!isValid) return;

  // Retrieve stored credentials from localStorage
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (loginUsername === storedUsername && loginPassword === storedPassword) {
    alert('Login successful!');
    // Redirect to another page or perform any other actions
  } else {
    loginPasswordError.textContent = 'Invalid username or password.';
  }
});


