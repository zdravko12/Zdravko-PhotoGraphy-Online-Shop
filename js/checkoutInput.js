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
  document.getElementById('c_phone').addEventListener('input', function () {
    // Restrict input to digits and a single '+' at the start
    this.value = this.value.replace(/(?!^\+)\D/g, "");

    // Show or hide warning based on the input value
    if (this.value.trim() === '') {
        document.getElementById('c_phone_warning').style.display = 'block';
        document.getElementById('c_phone_warning').textContent = 'Phone number is required';
    } else if (!/^\+\d{8,}$/.test(this.value.trim())) {
        document.getElementById('c_phone_warning').style.display = 'block';
        document.getElementById('c_phone_warning').textContent = 'Phone number must start with + followed by at least 3 digits';
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

  document.getElementById('c_postal_zip').addEventListener('input', function () {
    // Restrict input to only letters and spaces
    this.value = this.value.replace(/\D/g, "");;

    // Show or hide warning based on the input value
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

    // Select the input fields and warnings
    const firstName = document.getElementById('c_fname');
    const lastName = document.getElementById('c_lname');
    const firstNameWarning = document.getElementById('c_fname_warning');
    const lastNameWarning = document.getElementById('c_lname_warning');
    const email = document.getElementById('c_email_address');
    const phone = document.getElementById('c_phone');
    const companyName = document.getElementById('c_companyname');
    const companyNameWarning = document.getElementById('c_companyname_warning');
    const address = document.getElementById('c_address');
    const stateCountry = document.getElementById('c_state_country');
    const postalZip = document.getElementById('c_postal_zip');
    const country = document.getElementById('c_country');
    const stateCountryWarning = document.getElementById('c_state_country_warning');
    const phoneWarning = document.getElementById('c_phone_warning');
    const postalZipWarning = document.getElementById('c_postal_zip_warning');
    const addressWarning = document.getElementById('c_address_warning');
    const paymentWarning = document.getElementById("payment-warning");

    // Regular expressions for validation
    const phoneReg = /^\+\d{3}/;
    const twoNumbersReg = /\d.*\d/;
    const numberReg = /\d/;

    let isValid = true;

    // First Name validation
    if (firstName.value.trim() === '') {
        firstNameWarning.textContent = 'First name is required';
        firstNameWarning.style.display = 'block';
        isValid = false;
    } else if (firstName.value.trim().length < 3) {
        firstNameWarning.textContent = 'First name must be at least 3 letters';
        firstNameWarning.style.display = 'block';
        isValid = false;
    } else {
        firstNameWarning.style.display = 'none';
    }

    // Last Name validation
    if (lastName.value.trim() === '') {
        lastNameWarning.textContent = 'Last name is required';
        lastNameWarning.style.display = 'block';
        isValid = false;
    } else if (lastName.value.trim().length < 3) {
        lastNameWarning.textContent = 'Last name must be at least 3 letters';
        lastNameWarning.style.display = 'block';
        isValid = false;
    } else {
        lastNameWarning.style.display = 'none';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '' || !emailPattern.test(email.value.trim())) {
        document.getElementById('c_email_warning').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    if (phone.value.trim() === '') {
        phoneWarning.textContent = 'Phone is required';
        phoneWarning.style.display = 'block';
        isValid = false;
    } else if (!phoneReg.test(phone.value.trim())) {
        phoneWarning.textContent = 'Phone number must start with a prefix like +123';
        phoneWarning.style.display = 'block';
        isValid = false;
    } else {
        phoneWarning.style.display = 'none';
    }

    // Company Name validation (optional)
    if (companyName.value.trim() === '') {
        companyNameWarning.textContent = 'Company Name is required';
        companyNameWarning.style.display = 'block';
        isValid = false;
    } else if (companyName.value.trim().length < 3) {
        companyNameWarning.textContent = 'Company Name must be at least 3 letters';
        companyNameWarning.style.display = 'block';
        isValid = false;
    } else {
        companyNameWarning.style.display = 'none';
    }

    // Address validation
    if (address.value.trim() === '') {
        addressWarning.textContent = 'Address is required';
        addressWarning.style.display = 'block';
        isValid = false;
    } else if (!numberReg.test(address.value.trim())) {
        addressWarning.textContent = 'Address must contain a street number';
        addressWarning.style.display = 'block';
        isValid = false;
    } else {
        addressWarning.style.display = 'none';
    }

    // State / Country validation
    if (stateCountry.value.trim() === '') {
        stateCountryWarning.textContent = 'State / Country is required';
        stateCountryWarning.style.display = 'block';
        isValid = false;
    } else if (stateCountry.value.trim().length < 3) {
        stateCountryWarning.textContent = 'State / Country must be at least 3 letters';
        stateCountryWarning.style.display = 'block';
        isValid = false;
    } else {
        stateCountryWarning.style.display = 'none';
    }

    // Postal / Zip validation
    if (postalZip.value.trim() === '') {
        postalZipWarning.textContent = 'Postal / Zip is required';
        postalZipWarning.style.display = 'block';
        isValid = false;
    } else if (!twoNumbersReg.test(postalZip.value.trim())) {
        postalZipWarning.textContent = 'Postal / Zip must contain at least 2 numbers';
        postalZipWarning.style.display = 'block';
        isValid = false;
    } else {
        postalZipWarning.style.display = 'none';
    }

    // Country validation
    if (country.value === "0") {
        document.getElementById('c_country_warning').style.display = 'block';
        isValid = false;
    }

    // Payment method validation
    const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (!selectedMethod) {
        paymentWarning.style.display = 'block';
        isValid = false;
    } else {
        paymentWarning.style.display = 'none';
    }

    // If the form is valid, proceed to the thank you page
    if (isValid) {
        window.location.href = '/Html-Page/thankyou.html';  // Redirect to thank you page
    } else {
        return false;  // Prevent redirection if the form is not valid
    }

    return isValid; // Return whether the form is valid
}

// Attach the validateForm function to the form's submit event
document.querySelector("form").addEventListener("submit", validateForm);


function hideWarning() {
    const warningDiv = document.getElementById('payment-warning');
    warningDiv.style.display = 'none'; // Hide the warning when a radio button is selected
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

  
