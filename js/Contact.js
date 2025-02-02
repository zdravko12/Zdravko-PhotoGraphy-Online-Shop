// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     var isValid = true;
  
//     var fname = document.getElementById("fname");
//     var lname = document.getElementById("lname");
//     var email = document.getElementById("email");
//     var message = document.getElementById("message");
  
//     if (fname.value.trim() === "") {
//       showError(fname, "First name is required");
//       isValid = false;
//     } else {
//       hideError(fname);
//     }
  
//     if (lname.value.trim() === "") {
//       showError(lname, "Last name is required");
//       isValid = false;
//     } else {
//       hideError(lname);
//     }
  
//     if (email.value.trim() === "") {
//       showError(email, "Email is required");
//       isValid = false;
//     } else {
//       hideError(email);
//     }
  
//     if (message.value.trim() === "") {
//       showError(message, "Message is required");
//       isValid = false;
//     } else {
//       hideError(message);
//     }
  
//     if (!isValid) {
//       event.preventDefault();
//     }
//   });
  
//   function showError(input, message) {
//     var errorMessage = input.nextElementSibling;
//     errorMessage.textContent = message;
//     errorMessage.style.display = "block";
//   }
  
//   function hideError(input) {
//     var errorMessage = input.nextElementSibling;
//     errorMessage.style.display = "none";
//   }


 // Function to validate the form before submission
 function validateForm() {
  let isValid = true;

  // Get all form fields
  const fields = ['fname', 'lname', 'email', 'subject', 'message'];

  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    const errorMessage = field.nextElementSibling;

    if (!field.value.trim()) {
      errorMessage.textContent = `${fieldId === 'fname' || fieldId === 'lname' ? 'First and last name' : 'This field'} is required`;
      errorMessage.style.display = 'block'; // Show error if field is empty
      isValid = false;
    } else if (
      (fieldId === 'fname' || fieldId === 'lname' || fieldId === 'subject') && 
      field.value.trim().length < 4
    ) {
      errorMessage.textContent = `${fieldId === 'fname' || fieldId === 'lname' ? 'Name' : 'Subject'} must be at least 4 characters`;
      errorMessage.style.display = 'block'; // Show error if input is too short
      isValid = false;
    } else {
      errorMessage.style.display = 'none'; // Hide error if field is valid
    }
  });

  return isValid;
}

// Function to handle real-time validation for a single field
function validateField(field) {
  const errorMessage = field.nextElementSibling;

  if (!field.value.trim()) {
    errorMessage.textContent = `${field.id === 'fname' || field.id === 'lname' ? 'First and last name' : 'This field'} is required`;
    errorMessage.style.display = 'block'; // Show error if field is empty
  } else if (
    (field.id === 'fname' || field.id === 'lname' || field.id === 'subject') &&
    field.value.trim().length < 4
  ) {
    errorMessage.textContent = `${field.id === 'fname' || field.id === 'lname' ? 'Name' : 'Subject'} must be at least 4 characters`;
    errorMessage.style.display = 'block'; // Show error if input is too short
  } else {
    errorMessage.style.display = 'none'; // Hide error message when input is valid
  }
}

// Apply real-time validation to each input field
window.onload = function () {
  const fields = ['fname', 'lname', 'email', 'subject', 'message'];

  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    
    // Add 'input' event listener for real-time validation
    field.addEventListener('input', function () {
      validateField(field); // Call the validation function when user types
    });
  });
};
