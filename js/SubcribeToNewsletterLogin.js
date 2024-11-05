const nameInput = document.getElementById('name');
const emailInput = document.getElementById('emailNew');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailErrorNew');

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validation
    let valid = true;

    if (!name) {
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (!email || !validateEmail(email)) {
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // If the form is valid
    if (valid) {
        alert('You have successfully subscribed to the newsletter!');
        // Here you can add code to actually submit the form data, e.g., via AJAX
        document.getElementById('subscriptionForm').reset();
    }
});

// Real-time validation for name
nameInput.addEventListener('input', function() {
    if (nameInput.value.trim()) {
        nameError.style.display = 'none';
    }
});

// Real-time validation for email
emailInput.addEventListener('input', function() {
    if (validateEmail(emailInput.value.trim())) {
        emailError.style.display = 'none';
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}