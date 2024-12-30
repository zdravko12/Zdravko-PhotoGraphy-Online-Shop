function filterNumericInput(event) {
    // Allow only numeric input
    const input = event.target;
    input.value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
  }
  
  function formatExpiryDate(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Remove all non-numeric characters
  
    // Insert a slash after the first two digits
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    input.value = value;
  }

  function validateCardholderName(event) {
    const input = event.target;
  

    // Remove any character that is not a letter or a space
    input.value = input.value.replace(/[^a-zA-Z\s]/g, "");

  }
  
  function validateCardForm() {
    let isValid = true;
  
    // Card Number Validation
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardNumberWarning = document.getElementById("cardNumberWarning");
    if (cardNumber.length < 16) {
      cardNumberWarning.classList.remove("d-none");
      isValid = false;
    } else {
      cardNumberWarning.classList.add("d-none");
    }
  
    // Cardholder Name Validation
    const cardholderName = document.getElementById("cardholderName").value.trim();
    const cardholderNameWarning = document.getElementById("cardholderNameWarning");
    if (cardholderName.length < 8 || !/^[a-zA-Z\s]+$/.test(cardholderName)) {
      cardholderNameWarning.classList.remove("d-none");
      isValid = false;
    } else {
      cardholderNameWarning.classList.add("d-none");
    }
  
    // Expiry Date Validation
    const expiryDate = document.getElementById("expiryDate").value.trim();
    const expiryDateWarning = document.getElementById("expiryDateWarning");
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      expiryDateWarning.classList.remove("d-none");
      isValid = false;
    } else {
      expiryDateWarning.classList.add("d-none");
    }
  
    // CVV Validation
    const cvv = document.getElementById("cvv").value.trim();
    const cvvWarning = document.getElementById("cvvWarning");
    if (cvv.length !== 3) {
      cvvWarning.classList.remove("d-none");
      isValid = false;
    } else {
      cvvWarning.classList.add("d-none");
    }
  
    return isValid;
  }

  // date New 

  function validateExpiryDate() {
    const expiryDate = document.getElementById("expiryDate");
    const expiryDateWarning = document.getElementById("expiryDateWarning");
    const currentDate = new Date();
    const nextYearDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth());
  
    // Reset warning
    expiryDateWarning.classList.add("d-none");
  
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(expiryDate.value.trim())) {
      expiryDateWarning.textContent = "Enter a valid expiry in MM/YY format (e.g., 12/24).";
      expiryDateWarning.classList.remove("d-none");
      return false;
    }
  
    const [month, year] = expiryDate.value.split("/").map(Number);
    const expiryFullDate = new Date(`20${year}`, month - 1);
  
    if (expiryFullDate < currentDate) {
      expiryDateWarning.textContent = "Your card expiration date has passed.";
      expiryDateWarning.classList.remove("d-none");
      return false;
    } else if (expiryFullDate > nextYearDate) {
      expiryDateWarning.textContent = "Your card expiration date must be within the next year.";
      expiryDateWarning.classList.remove("d-none");
      return false;
    }
  
    // If valid, hide the warning
    expiryDateWarning.classList.add("d-none");
    return true;
  }
  
  function validateCardNumber() {
    const cardNumber = document.getElementById("cardNumber");
    const cardNumberWarning = document.getElementById("cardNumberWarning");
  
    cardNumberWarning.classList.add("d-none");
  
    if (cardNumber.value.replace(/\s/g, "").length < 16) {
      cardNumberWarning.textContent = "Please enter at least 16 digits for the card number.";
      cardNumberWarning.classList.remove("d-none");
      return false;
    }
  
    return true;
  }
  
  function validateCardholderName() {
    const cardholderName = document.getElementById("cardholderName");
    const cardholderNameWarning = document.getElementById("cardholderNameWarning");
  
    cardholderNameWarning.classList.add("d-none");
  
    if (cardholderName.value.trim().length < 8) {
      cardholderNameWarning.textContent = "Please enter at least 8 letters for the full name.";
      cardholderNameWarning.classList.remove("d-none");
      return false;
    }
  
    return true;
  }
  
  function handleFormSubmit(event) {
    const isExpiryValid = validateExpiryDate();
  
    // Prevent form submission if expiry date validation fails
    if (!isExpiryValid) {
      event.preventDefault(); // Prevent form submission
    }
  }

  function validateCVV() {
    const cvv = document.getElementById("cvv");
    const cvvWarning = document.getElementById("cvvWarning");
  
    // Reset warning
    cvvWarning.classList.add("d-none");
  
    // Check if CVV is exactly 3 digits
    if (!/^\d{3}$/.test(cvv.value.trim())) {
      cvvWarning.textContent = "Please enter exactly 3 digits for the CVV.";
      cvvWarning.classList.remove("d-none");
      return false;
    }
  
    return true;
  }
  
  // Ensure the event listener is used for real-time validation
  document.getElementById("cvv").addEventListener("input", validateCVV);
  
  
  
  function saveCardDetails(event) {
    event.preventDefault();
  
    // Validate individual fields
    const isExpiryValid = validateExpiryDate();
    const isCardNumberValid = validateCardNumber();
    const isCardholderNameValid = validateCardholderName();
    const isCVVValid = validateCVV();
  
    // Save card details only if all fields are valid
    if (isExpiryValid && isCardNumberValid && isCardholderNameValid && isCVVValid) {
      const cardDetails = {
        cardNumber: document.getElementById("cardNumber").value.trim(),
        cardholderName: document.getElementById("cardholderName").value.trim(),
        expiryDate: document.getElementById("expiryDate").value.trim(),
        cvv: document.getElementById("cvv").value.trim(),
      };
  
      // Save to localStorage
      localStorage.setItem("cardDetails", JSON.stringify(cardDetails));
  
      // Show success message
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
  
      // Hide the success message after a short delay
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
  
      console.log("Card details saved:", cardDetails);
    } else {
      console.log("Validation failed. Card details not saved.");
    }
  }

  // Load card details from localStorage
function loadCardDetails() {
  const savedCardDetails = JSON.parse(localStorage.getItem("cardDetails"));
  const paymentRadio = document.getElementById("paymentRadio");

  if (savedCardDetails) {
    document.getElementById("cardNumber").value = savedCardDetails.cardNumber;
    document.getElementById("cardholderName").value = savedCardDetails.cardholderName;
    document.getElementById("expiryDate").value = savedCardDetails.expiryDate;
    document.getElementById("cvv").value = savedCardDetails.cvv;

    // Enable the radio button if all fields are valid
    paymentRadio.disabled = false;
  } else {
    // Disable the radio button if no saved data
    paymentRadio.disabled = true;
  }
}

// Call this function when the page loads
window.onload = function () {
  loadCardDetails();
};
  
  
  
  function handleInputChange() {
    const cardNumber = document.getElementById("cardNumber");
    const cardholderName = document.getElementById("cardholderName");
    const expiryDate = document.getElementById("expiryDate");
    const cvv = document.getElementById("cvv");
    const paymentRadio = document.getElementById("paymentRadio");
  
    // Validate the fields dynamically
    const isCardNumberValid = cardNumber.value.trim().length >= 16;
    const isCardholderNameValid = cardholderName.value.trim().length >= 8;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const isExpiryDateValid = expiryRegex.test(expiryDate.value.trim());
    const isCvvValid = cvv.value.trim().length === 3;
  
    // Disable the radio button if any field becomes invalid
    paymentRadio.disabled = !(isCardNumberValid && isCardholderNameValid && isExpiryDateValid && isCvvValid);
  
    // Uncheck the radio button if it gets disabled
    if (paymentRadio.disabled) {
      paymentRadio.checked = false;
    }
  }
  
  function validateFormBeforeSelect() {
    const cardNumber = document.getElementById("cardNumber");
    const cardholderName = document.getElementById("cardholderName");
    const expiryDate = document.getElementById("expiryDate");
    const cvv = document.getElementById("cvv");
  
    // Revalidate the form when the radio button is clicked
    const isCardNumberValid = cardNumber.value.trim().length >= 16;
    const isCardholderNameValid = cardholderName.value.trim().length >= 8;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const isExpiryDateValid = expiryRegex.test(expiryDate.value.trim());
    const isCvvValid = cvv.value.trim().length === 3;
  
    if (!(isCardNumberValid && isCardholderNameValid && isExpiryDateValid && isCvvValid)) {
      alert("Please fill in all fields correctly before selecting the payment method.");
      document.getElementById("paymentRadio").checked = false; // Uncheck the radio button
    }
  }

//  Debit or Credit Card <span class="arrow">⬎</span> go down disapier, go up 

  function toggleArrow(anchor) {
    const collapseCard = document.querySelector('#collapseCard');
    const arrow = anchor.querySelector('.arrow');
  
    if (collapseCard.classList.contains('show')) {
      // If expanded, remove the arrow
      arrow.style.display = 'none';
    } else {
      // If collapsed, show the arrow
      arrow.style.display = '';
    }
  }
  
  // Alternatively, for Bootstrap's 'collapse' event handling:
  document.querySelector('#collapseCard').addEventListener('shown.bs.collapse', () => {
    document.querySelector('.arrow').style.display = 'none';
  });
  
  document.querySelector('#collapseCard').addEventListener('hidden.bs.collapse', () => {
    document.querySelector('.arrow').style.display = '';
  });



  