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

// Add real-time validation setup when the page loads
document.addEventListener('DOMContentLoaded', addRealTimeValidation);





// Main validation function
function validateForm(event) {
    // Prevent the default behavior of the button (redirection)
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
    const orderNotes = document.getElementById("c_order_notes");

    // Load cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Regular expressions for validation
    const phoneReg = /^\+\d{3}/;
    const twoNumbersReg = /\d.*\d/;
    const numberReg = /\d/;

    let isValid = true;

    // First Name validation
    if (firstName.value.trim() === '' || firstName.value.trim().length < 3) {
        firstNameWarning.textContent = 'First name must be at least 3 letters';
        firstNameWarning.style.display = 'block';
        isValid = false;
    } else {
        firstNameWarning.style.display = 'none';
    }

    // Last Name validation
    if (lastName.value.trim() === '' || lastName.value.trim().length < 3) {
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
    if (phone.value.trim() === '' || !phoneReg.test(phone.value.trim())) {
        phoneWarning.textContent = 'Phone number must start with a prefix like +123';
        phoneWarning.style.display = 'block';
        isValid = false;
    } else {
        phoneWarning.style.display = 'none';
    }

    // Company Name validation
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
    if (address.value.trim() === '' || !numberReg.test(address.value.trim())) {
        addressWarning.textContent = 'Address must contain a street number';
        addressWarning.style.display = 'block';
        isValid = false;
    } else {
        addressWarning.style.display = 'none';
    }

    // State / Country validation
    if (stateCountry.value.trim() === '' || stateCountry.value.trim().length < 3) {
        stateCountryWarning.textContent = 'State / Country must be at least 3 letters';
        stateCountryWarning.style.display = 'block';
        isValid = false;
    } else {
        stateCountryWarning.style.display = 'none';
    }

    // Postal / Zip validation
    if (postalZip.value.trim() === '' || !twoNumbersReg.test(postalZip.value.trim())) {
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

    // If the payment method is "debitCreditCard", validate card details
    let cardDetails = null;
    if (selectedMethod && selectedMethod.value === "debitCreditCard") {
        const cardNumber = document.getElementById("cardNumber").value.trim();
        const cardholderName = document.getElementById("cardholderName").value.trim();
        const expiryDate = document.getElementById("expiryDate").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        // Card number validation
        if (cardNumber === "" || cardNumber.length !== 16) {
            document.getElementById("cardNumberWarning").style.display = 'block';
            isValid = false;
        } else {
            document.getElementById("cardNumberWarning").style.display = 'none';
        }

        // Cardholder name validation
        if (cardholderName === "") {
            document.getElementById("cardholderNameWarning").style.display = 'block';
            isValid = false;
        } else {
            document.getElementById("cardholderNameWarning").style.display = 'none';
        }

        // Expiry date validation (MM/YY format)
        if (expiryDate === "" || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
            document.getElementById("expiryDateWarning").style.display = 'block';
            isValid = false;
        } else {
            document.getElementById("expiryDateWarning").style.display = 'none';
        }

        // CVV validation
        if (cvv === "" || cvv.length !== 3) {
            document.getElementById("cvvWarning").style.display = 'block';
            isValid = false;
        } else {
            document.getElementById("cvvWarning").style.display = 'none';
        }

        // If card details are valid, store them in cardDetails
        if (isValid) {
            cardDetails = {
                cardNumber: cardNumber,
                cardholderName: cardholderName,
                expiryDate: expiryDate,
                cvv: cvv
            };
        }
    }

     // If the form is valid, proceed with saving to the database
     if (isValid) {
        const orderDetails = {
            personalDetails: {
                firstName: firstName.value.trim(),
                lastName: lastName.value.trim(),
                email: email.value.trim(),
                phone: phone.value.trim(),
                companyName: companyName.value.trim(),
                address: address.value.trim(),
                stateCountry: stateCountry.value.trim(),
                postalZip: postalZip.value.trim(),
                country: country.value,
                orderNotes: orderNotes.value.trim()
            },
            paymentMethod: selectedMethod ? selectedMethod.value : null,
            cardDetails: cardDetails, // Save card details if available
            cartItems: cartItems
        };

        // Send data to the server using fetch
        fetch('http://localhost/Html-Page/php/CheckoutDb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text(); // Get response as plain text
            })
            .then(text => {
                try {
                    const data = JSON.parse(text); // Attempt to parse JSON
                    if (data.success) {
                        // Redirect to thank you page
                        window.location.href = '/Html-Page/thankyou.html';
                    } else {
                        alert(`Failed to place the order: ${data.message}`);
                    }
                } catch (e) {
                    console.error('Invalid JSON response:', text);
                    alert('An unexpected error occurred. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while placing the order. Please try again later.');
            });
    }
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
// Reference the table body MODAL



// Add event listener to the checkout table body
// Reference the table body
document.addEventListener('DOMContentLoaded', function () {
    const checkoutTableBody = document.getElementById('checkoutTableBody');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modal-image');
    const modalProductName = document.getElementById('modal-product-name');

    let currentSlideIndex = 0;
    let images = []; // Array to store images for the current product

    // Open modal with images
    checkoutTableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('cart-product-image')) {
            const image = e.target;
            const row = image.closest('tr');
            const productName = row.querySelector('td:first-child').textContent;

            // Find all images for this product in the same row or related elements
            const productImages = row.querySelectorAll('.cart-product-image');

            // Populate the images array with the sources of these images
            images = Array.from(productImages).map(img => img.src);

            currentSlideIndex = 0;

            // Update modal content
            modalProductName.textContent = productName;
            modalImage.src = images[currentSlideIndex];
            modal.style.display = 'block';
        }
    });

    // Navigate to the next or previous slide
    window.plusSlides = function (n) {
        if (images.length > 0) {
            currentSlideIndex = (currentSlideIndex + n + images.length) % images.length; // Loop around
            modalImage.src = images[currentSlideIndex];
        }
    };

    // Close the modal
    window.closeModal = function (modalId) {
        document.getElementById(modalId).style.display = 'none';
    };
});