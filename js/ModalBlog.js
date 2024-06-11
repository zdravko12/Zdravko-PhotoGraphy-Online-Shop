var prevImages, nextImages, prevTitle, nextTitle;
window.selectedImageHasDiscount = false;
window.defaultPrice = 25;

// Function to update prices
function updatePrices(price, hasDiscount) {
    var originalPriceElement = document.getElementById("original-price");
    var discountedPriceElement = document.getElementById("discounted-price");

    if (isNaN(price)) {
        price = window.defaultPrice; // Ensure the price is set to the default if it's NaN
    }

    if (hasDiscount) {
        var discountedPrice = (price * 0.75).toFixed(2);
        originalPriceElement.innerText = "€" + price;
        discountedPriceElement.innerText = "€" + discountedPrice;
        discountedPriceElement.style.display = 'inline';
        originalPriceElement.classList.add('no-discount');
    } else {
        originalPriceElement.innerText = "€" + price;
        discountedPriceElement.style.display = 'none';
        originalPriceElement.classList.remove('no-discount');
    }
}

// Function to open the modal
function openModal(images, title, element) {
    // Get the modal and update content
    var modal = document.getElementById("myModal");
    document.getElementById('modal-image').src = images[0];
    document.getElementById('modal-title').textContent = title;
    modal.style.display = "block";

    // Check the data-dimensionsMaterial attribute
    var showDimensionsMaterial = element.getAttribute('data-dimensionsMaterial') === 'true';
    var hasDiscount = element.getAttribute('data-discount') === 'true';
    window.selectedImageHasDiscount = hasDiscount;

    // Toggle the display of dimensions and material inputs based on the attribute
    var dimensionsContainer = document.getElementById('dimensions-container');
    var materialContainer = document.getElementById('material-container');
    if (showDimensionsMaterial) {
        dimensionsContainer.style.display = 'block';
        materialContainer.style.display = 'block';
        var savedDimension = localStorage.getItem('selectedDimension');
        var price = savedDimension ? parseFloat(savedDimension) : window.defaultPrice;
        updatePrices(price, window.selectedImageHasDiscount);
    } else {
        dimensionsContainer.style.display = 'none';
        materialContainer.style.display = 'none';
        updatePrices(window.defaultPrice, hasDiscount);
    }

    // Store images and title for later use
    prevImages = images;
    nextImages = images;
    prevTitle = title;
    nextTitle = title;

    // Load saved selections from local storage
    if (showDimensionsMaterial) {
        var savedDimension = localStorage.getItem('selectedDimension');
        if (savedDimension) {
            document.getElementById('dimensions').value = savedDimension;
        }
    }
    var savedMaterial = localStorage.getItem('selectedMaterial');
    if (savedMaterial) {
        document.getElementById('material').value = savedMaterial;
    }
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    var formats = modal.querySelectorAll('.format');
    formats.forEach(function(el) {
        el.style.display = 'none'; // Reset to hidden when closing
    });
}

// Event listener for closing the modal when clicking outside of it
window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal('myModal');
    }
});

// JavaScript for slideshow functionality
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
var currentIndex = 0; // Initialize currentIndex outside the function

function plusSlides(n, images, title) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('modal-image').src = images[currentIndex];
}

// Event listener for image clicks to set the active image, check for discounts, and toggle dimensions/material inputs
document.querySelectorAll('.product-item, .img-fluid1, .img-fluid').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        
        var hasDiscount = this.getAttribute('data-discount') === 'true';
        window.selectedImageHasDiscount = hasDiscount;

        var showDimensionsMaterial = this.getAttribute('data-dimensionsMaterial') === 'true';
        var price = showDimensionsMaterial ? parseFloat(document.getElementById("dimensions").value) : window.defaultPrice;
        updatePrices(price, hasDiscount);

        // Toggle the display of dimensions and material inputs based on the attribute
        var dimensionsContainer = document.getElementById('dimensions-container');
        var materialContainer = document.getElementById('material-container');
        if (showDimensionsMaterial) {
            dimensionsContainer.style.display = 'block';
            materialContainer.style.display = 'block';
        } else {
            dimensionsContainer.style.display = 'none';
            materialContainer.style.display = 'none';
        }
    });
});

// Update price based on selected dimensions
document.getElementById("dimensions").addEventListener("change", function() {
    var price = parseFloat(this.value);
    if (isNaN(price)) {
        price = window.defaultPrice; // Default to 25 if the parsed value is NaN
    }
    var hasDiscount = window.selectedImageHasDiscount;
    updatePrices(price, hasDiscount);

    // Save the selected dimension to local storage
    localStorage.setItem('selectedDimension', this.value);
});

// Save the selected material to local storage
document.getElementById("material").addEventListener("change", function() {
    localStorage.setItem('selectedMaterial', this.value);
});

// Add to cart functionality
document.getElementById("addToCart").addEventListener("click", function() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("dimensions").value);
    if (isNaN(price)) {
        price = window.defaultPrice; // Default to 25 if the parsed value is NaN
    }
    var material = document.getElementById("material").value;

    // Ensure a dimension and material are selected
    if (isNaN(price) || !material) {
        alert("Please select both a dimension and a material.");
        return;
    }

    var hasDiscount = window.selectedImageHasDiscount;
    var discountedPrice = hasDiscount ? price * 0.75 : price;
    var totalPrice = (discountedPrice * quantity).toFixed(2);

    // You can handle adding the item to the cart here
    console.log("Added to cart - Quantity: " + quantity + ", Total Price: €" + totalPrice + ", Material: " + material);
});

// Quantity increment and decrement functionality
(function () {
  const quantityContainer = document.querySelector(".quantity");
  const minusBtn = quantityContainer.querySelector(".minus");
  const plusBtn = quantityContainer.querySelector(".plus");
  const inputBox = quantityContainer.querySelector(".input-box");

  updateButtonStates();

  quantityContainer.addEventListener("click", handleButtonClick);
  inputBox.addEventListener("input", handleQuantityChange);

  function updateButtonStates() {
    const value = parseInt(inputBox.value);
    minusBtn.disabled = value <= 1;
    plusBtn.disabled = value >= parseInt(inputBox.max);
  }

  function handleButtonClick(event) {
    if (event.target.classList.contains("minus")) {
      decreaseValue();
    } else if (event.target.classList.contains("plus")) {
      increaseValue();
    }
  }

  function decreaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.max(value - 1, 1);
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function increaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function handleQuantityChange() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : value;

    // Execute your code here based on the updated quantity value
    console.log("Quantity changed:", value);
  }
})();