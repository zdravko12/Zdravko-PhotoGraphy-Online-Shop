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