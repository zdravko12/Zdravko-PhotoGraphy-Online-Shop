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
    const inputRegex = patterns[inputAttribueValueName].test(inputValue);

    // Check If The Input Value Is Empty
    if(inputValue === ''){
      // Call Function Set Error For
      setErrorFor(input, `${inputAttribueValueName} is required. Please enter your response.`);
    }else if(inputRegex === false){ // Else If: If The InputRegext Response Is False
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