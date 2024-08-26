document.getElementById('c_fname').addEventListener('blur', function() {
    let fnameInput = document.getElementById('c_fname');
    let warning = document.getElementById('c_fname_warning');
    
    if (fnameInput.value.trim() === '') {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
});

// Function to add real-time validation to all fields
function addRealTimeValidation() {
  // First Name validation
  document.getElementById('c_fname').addEventListener('input', function() {
      if (this.value.trim() === '') {
          document.getElementById('c_fname_warning').style.display = 'block';
      } else {
          document.getElementById('c_fname_warning').style.display = 'none';
      }
  });

  // Last Name validation
  document.getElementById('c_lname').addEventListener('input', function() {
      if (this.value.trim() === '') {
          document.getElementById('c_lname_warning').style.display = 'block';
      } else {
          document.getElementById('c_lname_warning').style.display = 'none';
      }
  });

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.getElementById('c_email_address').addEventListener('input', function() {
      if (this.value.trim() === '' || !emailPattern.test(this.value.trim())) {
          document.getElementById('c_email_warning').style.display = 'block';
      } else {
          document.getElementById('c_email_warning').style.display = 'none';
      }
  });

  // Phone validation
  document.getElementById('c_phone').addEventListener('input', function() {
      if (this.value.trim() === '') {
          document.getElementById('c_phone_warning').style.display = 'block';
      } else {
          document.getElementById('c_phone_warning').style.display = 'none';
      }
  });

  // Company Name validation (optional)
  document.getElementById('c_companyname').addEventListener('input', function() {
      if (this.value.trim() === '') {
          document.getElementById('c_companyname_warning').style.display = 'block';
      } else {
          document.getElementById('c_companyname_warning').style.display = 'none';
      }
  });

  // Address validation
  document.getElementById('c_address').addEventListener('input', function() {
      if (this.value.trim() === '') {
          document.getElementById('c_address_warning').style.display = 'block';
      } else {
          document.getElementById('c_address_warning').style.display = 'none';
      }
  });

  // State / Country validation
  document.getElementById('c_state_country').addEventListener('input', function() {
      if (this.value.trim() === '') {
          document.getElementById('c_state_country_warning').style.display = 'block';
      } else {
          document.getElementById('c_state_country_warning').style.display = 'none';
      }
  });

  // Postal / Zip validation
  document.getElementById('c_postal_zip').addEventListener('input', function() {
      if (this.value.trim() === '') {
          document.getElementById('c_postal_zip_warning').style.display = 'block';
      } else {
          document.getElementById('c_postal_zip_warning').style.display = 'none';
      }
  });

  // Country validation
  document.getElementById('c_country').addEventListener('change', function() {
      if (this.value === "0") {
          document.getElementById('c_country_warning').style.display = 'block';
      } else {
          document.getElementById('c_country_warning').style.display = 'none';
      }
  });
}

// Call real-time validation setup when the page loads
document.addEventListener('DOMContentLoaded', addRealTimeValidation);

function validateForm(event) {
    // Prevent the default behavior of the button (which is the redirection)
    event.preventDefault();

    // Select the input fields
    const firstName = document.getElementById('c_fname');
    const lastName = document.getElementById('c_lname');
    const email = document.getElementById('c_email_address');
    const phone = document.getElementById('c_phone');
    const companyName = document.getElementById('c_companyname');
    const address = document.getElementById('c_address');
    const stateCountry = document.getElementById('c_state_country');
    const postalZip = document.getElementById('c_postal_zip');
    const country = document.getElementById('c_country');

    let isValid = true;

    // First Name validation
    if (firstName.value.trim() === '') {
        document.getElementById('c_fname_warning').style.display = 'block';
        isValid = false;
    }

    // Last Name validation
    if (lastName.value.trim() === '') {
        document.getElementById('c_lname_warning').style.display = 'block';
        isValid = false;
    }

    // Email validation (required and format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '' || !emailPattern.test(email.value.trim())) {
        document.getElementById('c_email_warning').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    if (phone.value.trim() === '') {
        document.getElementById('c_phone_warning').style.display = 'block';
        isValid = false;
    }

    // Company Name validation (optional)
    if (companyName.value.trim() === '') {
        document.getElementById('c_companyname_warning').style.display = 'block';
        isValid = false;
    }

    // Address validation
    if (address.value.trim() === '') {
        document.getElementById('c_address_warning').style.display = 'block';
        isValid = false;
    }

    // State / Country validation
    if (stateCountry.value.trim() === '') {
        document.getElementById('c_state_country_warning').style.display = 'block';
        isValid = false;
    }

    // Postal / Zip validation
    if (postalZip.value.trim() === '') {
        document.getElementById('c_postal_zip_warning').style.display = 'block';
        isValid = false;
    }

    // Country validation
    if (country.value === "0") {
        document.getElementById('c_country_warning').style.display = 'block';
        isValid = false;
    }

    // If the form is valid, proceed to the thank you page
    if (isValid) {
        window.location.href = 'thankyou.html';
    }
}

// document.getElementById('c_ship_different_address').addEventListener('change', function() {
//     validateDifferentAddress();
// });

// document.getElementById('c_ship_different_address').addEventListener('change', function() {
//     validateDifferentAddress();
// });

// function validateDifferentAddress() {
//     let isValid = true;

//     const checkbox = document.getElementById('c_ship_different_address');
//     const diffFirstName = document.getElementById('c_diff_fname');
//     const diffLastName = document.getElementById('c_diff_lname');
//     const diffCountry = document.getElementById('c_diff_country');
//     const diffAddress = document.getElementById('c_diff_address');
//     const diffStateCountry = document.getElementById('c_diff_state_country');
//     const diffPostalZip = document.getElementById('c_diff_postal_zip');
//     const diffEmail = document.getElementById('c_diff_email_address');
//     const diffPhone = document.getElementById('c_diff_phone');
//     const diffCompanyName = document.getElementById('c_diff_companyname');

//     // Warnings for each field
//     const companyNameWarning = document.getElementById('c_diff_companyname_warning');
//     const emailWarning = document.getElementById('c_diff_email_address_warning');
//     const postalZipWarning = document.getElementById('c_diff_postal_zip_warning');
//     const phoneWarning = document.getElementById('c_diff_phone_warning');

//     // If checkbox is checked, validate fields
//     if (checkbox.checked) {
//         // Validate Company Name
//         if (diffCompanyName.value.trim() === '') {
//             companyNameWarning.style.display = 'block';
//             isValid = false;
//         } else {
//             companyNameWarning.style.display = 'none';
//         }

//         // Validate Country
//         if (diffCountry.value.trim() === '') {
//             document.getElementById('c_diff_country_warning').style.display = 'block';
//             isValid = false;
//         } else {
//             document.getElementById('c_diff_country_warning').style.display = 'none';
//         }

//         // Validate First Name
//         if (diffFirstName.value.trim() === '') {
//             document.getElementById('c_diff_fname_warning').style.display = 'block';
//             isValid = false;
//         } else {
//             document.getElementById('c_diff_fname_warning').style.display = 'none';
//         }

//         // Validate Last Name
//         if (diffLastName.value.trim() === '') {
//             document.getElementById('c_diff_lname_warning').style.display = 'block';
//             isValid = false;
//         } else {
//             document.getElementById('c_diff_lname_warning').style.display = 'none';
//         }

//         // Validate Address
//         if (diffAddress.value.trim() === '') {
//             document.getElementById('c_diff_address_warning').style.display = 'block';
//             isValid = false;
//         } else {
//             document.getElementById('c_diff_address_warning').style.display = 'none';
//         }

//         // Validate State/Country
//         if (diffStateCountry.value.trim() === '') {
//             document.getElementById('c_diff_state_country_warning').style.display = 'block';
//             isValid = false;
//         } else {
//             document.getElementById('c_diff_state_country_warning').style.display = 'none';
//         }

//         // Validate Postal/Zip
//         const postalZipPattern = /^[0-9]{5}([-][0-9]{4})?$/;
//         if (!postalZipPattern.test(diffPostalZip.value.trim())) {
//             postalZipWarning.style.display = 'block';
//             isValid = false;
//         } else {
//             postalZipWarning.style.display = 'none';
//         }

//         // Validate Email
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(diffEmail.value.trim())) {
//             emailWarning.style.display = 'block';
//             isValid = false;
//         } else {
//             emailWarning.style.display = 'none';
//         }
   
         
//         // Validate Phone
//         const phonePattern = /^\+?[1-9]\d{1,14}$/;
//         if (!phonePattern.test(diffPhone.value.trim())) {
//             phoneWarning.style.display = 'block';
//             isValid = false;
//         } else {
//             phoneWarning.style.display = 'none';
//         }

//         // Show warning if no field is filled and the checkbox is checked
//         if (!isValid) {
//             document.getElementById('c_ship_different_address_warning').style.display = 'block';
//         } else {
//             document.getElementById('c_ship_different_address_warning').style.display = 'none';
//         }
//     } else {
//         // Hide all warnings if the checkbox is unchecked
//         document.getElementById('c_ship_different_address_warning').style.display = 'none';
//         companyNameWarning.style.display = 'none';
//         emailWarning.style.display = 'none';
//         postalZipWarning.style.display = 'none';
//         phoneWarning.style.display = 'none';
//     }

//     return isValid;
// }

  
