document.getElementById("contactForm").addEventListener("submit", function(event) {
    var isValid = true;
  
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
  
    if (fname.value.trim() === "") {
      showError(fname, "First name is required");
      isValid = false;
    } else {
      hideError(fname);
    }
  
    if (lname.value.trim() === "") {
      showError(lname, "Last name is required");
      isValid = false;
    } else {
      hideError(lname);
    }
  
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      isValid = false;
    } else {
      hideError(email);
    }
  
    if (message.value.trim() === "") {
      showError(message, "Message is required");
      isValid = false;
    } else {
      hideError(message);
    }
  
    if (!isValid) {
      event.preventDefault();
    }
  });
  
  function showError(input, message) {
    var errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
  
  function hideError(input) {
    var errorMessage = input.nextElementSibling;
    errorMessage.style.display = "none";
  }


  document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
    
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    
    if (document.getElementById('fname').value.trim() === '') {
      document.querySelector('label[for="fname"] + .error-message').style.display = 'block';
      valid = false;
    }
    
    if (document.getElementById('lname').value.trim() === '') {
      document.querySelector('label[for="lname"] + .error-message').style.display = 'block';
      valid = false;
    }
    
    if (document.getElementById('email').value.trim() === '') {
      document.querySelector('label[for="email"] + .error-message').style.display = 'block';
      valid = false;
    }
    
    if (document.getElementById('message').value.trim() === '') {
      document.querySelector('label[for="message"] + .error-message').style.display = 'block';
      valid = false;
    }
    
    if (!valid) event.preventDefault();
  });