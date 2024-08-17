var prevImages, nextImages, prevTitle, nextTitle;
window.selectedImageHasDiscount = false;
window.defaultPrice = 25;

function updatePrices(price, hasDiscount) {
    var originalPriceElement = document.getElementById("original-price");
    var discountedPriceElement = document.getElementById("discounted-price");

    if (isNaN(price)) {
        price = window.defaultPrice;
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

function openModal(images, title, element , firstImageUrl) {
     var modal = document.getElementById("myModal");
    document.getElementById('modal-image').src = images[0];
    document.getElementById('modal-title').textContent = title;
    modal.style.display = "block";

    // Store the first image URL in a hidden input for later use
    let firstImageInput = document.getElementById('first-image-url');
    if (!firstImageInput) {
        firstImageInput = document.createElement('input');
        firstImageInput.type = 'hidden';
        firstImageInput.id = 'first-image-url';
        document.body.appendChild(firstImageInput);
    }
    firstImageInput.value = firstImageUrl;

    var showDimensionsMaterial = element.getAttribute('data-dimensionsMaterial') === 'true';
    var defaultFormat = element.getAttribute('data-default-format');
    var hasDiscount = element.getAttribute('data-discount') === 'true';
    window.selectedImageHasDiscount = hasDiscount;
    
    var defaultDimensionContainer = document.getElementById('default-dimension-container');
    var dimensionsContainer = document.getElementById('dimensions-container');
    var materialContainer = document.getElementById('material-container');
    var dimensionsSelect = document.getElementById('dimensions');
    var materialSelect = document.getElementById('material');

    if (defaultFormat === 'false') {
        defaultDimensionContainer.style.display = 'none'; // Hide the container
    } else {
        defaultDimensionContainer.style.display = 'block'; // Show the container
    }


    if (showDimensionsMaterial) {
        defaultDimensionContainer.style.display = 'none'; // Hide default dimension select
    } else {
        defaultDimensionContainer.style.display = 'block'; // Show default dimension select
    }

    var showDimensionsMaterial = element.getAttribute('data-dimensionsMaterial') === 'true';
    var hasDiscount = element.getAttribute('data-discount') === 'true';
    window.selectedImageHasDiscount = hasDiscount;

    var dimensionsContainer = document.getElementById('dimensions-container');
    var materialContainer = document.getElementById('material-container');
    var dimensionsSelect = document.getElementById('dimensions');
    var materialSelect = document.getElementById('material');

    if (showDimensionsMaterial) {
        dimensionsContainer.style.display = 'block';
        materialContainer.style.display = 'block';

        dimensionsSelect.innerHTML = `
            <option selected disabled>Select format</option>
            <option value="25">30x45cm - €25</option>
            <option value="70">50x70cm - €70</option>
            <option value="139">70x100cm - €139</option>
        `;

        materialSelect.innerHTML = '<option selected disabled>Select material type</option>';
        var materials = element.getAttribute('data-default-material').split(' ');
        materials.forEach(material => {
            var option = document.createElement('option');
            option.value = material;
            option.textContent = material.charAt(0).toUpperCase() + material.slice(1);
            materialSelect.appendChild(option);
        });

        // Retrieve stored selection from localStorage
        var selectedDimension = localStorage.getItem('selectedDimension');
        var selectedMaterial = localStorage.getItem('selectedMaterial');

        if (selectedDimension) {
            dimensionsSelect.value = selectedDimension;
        }
        if (selectedMaterial) {
            materialSelect.value = selectedMaterial;
        }
    } else {
        dimensionsContainer.style.display = 'block';
        materialContainer.style.display = 'none';

        dimensionsSelect.innerHTML = '<option value="25" selected>30x45cm - €25</option>';
        materialSelect.innerHTML = '<option value="canvas" selected>Canvas</option>'; // Default material

        var price = 25; // Default price for 30x45cm format
        updatePrices(price, hasDiscount);
    }

    prevImages = images;
    nextImages = images;
    prevTitle = title;
    nextTitle = title;
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
  var formats = modal.querySelectorAll('.format');
  formats.forEach(function(el) {
      el.style.display = 'none';
  });
}

window.addEventListener("click", function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      closeModal('myModal');
  }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
  var currentIndex = 0;

  function plusSlides(n, images, title) {
    currentIndex += n;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    document.getElementById('modal-image').src = images[currentIndex];
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Initialize button state and default values
    updateButtonState();
    setDefaultValues();

    // Attach event listeners for dropdowns
    var dimensionsSelect = document.getElementById("dimensions");
    var materialSelect = document.getElementById("material");

    if (dimensionsSelect && materialSelect) {
        dimensionsSelect.addEventListener("change", validateSelections);
        materialSelect.addEventListener("change", validateSelections);
    }
});

// Function to set default values and price
function setDefaultValues() {
    var dimensionsSelect = document.getElementById("dimensions");
    var defaultDimensionValue = "25"; // Default value
    dimensionsSelect.value = defaultDimensionValue;

    updatePriceBasedOnDimension(defaultDimensionValue);
}

// Function to validate if both selections are made
function validateSelections() {
    var dimensionsValue = document.getElementById("dimensions").value;
    var materialValue = document.getElementById("material").value;
    var addToCartButton = document.getElementById("addToCart");

    // Enable the button only if both dimensions and material are selected
    if (dimensionsValue && materialValue) {
        addToCartButton.disabled = false;
    } else {
        addToCartButton.disabled = true;
    }
}

// Function to update button state based on product selection
function updateButtonState() {
    document.querySelectorAll('.product-item, .img-fluid1, .img-fluid').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            var showDimensionsMaterial = this.getAttribute('data-dimensionsMaterial') === 'true';
            var dimensionsContainer = document.getElementById('dimensions-container');
            var materialContainer = document.getElementById('material-container');
            var addToCartButton = document.getElementById("addToCart");

            var hasDiscount = this.getAttribute('data-discount') === 'true';
            window.selectedImageHasDiscount = hasDiscount;

            if (showDimensionsMaterial) {
                dimensionsContainer.style.display = 'block';
                materialContainer.style.display = 'block';

                // Clear previous selections and reinitialize the button state
                document.getElementById("dimensions").value = "25"; // Set default value programmatically
                document.getElementById("material").value = ""; // Reset material selection

                // Ensure the button is disabled until selections are made
                addToCartButton.disabled = true;

                // Attach event listeners to validate selections
                document.getElementById("dimensions").addEventListener("change", validateSelections);
                document.getElementById("material").addEventListener("change", validateSelections);

                // Update price based on the default dimension
                updatePriceBasedOnDimension("25");


                // Initialize select options
                var dimensionsSelect = document.getElementById('dimensions');
                dimensionsSelect.innerHTML = '<option value="25">30x45cm</option>' +
                    '<option value="25">30x45cm</option>' +
                    '<option value="70">50x70cm</option>' +
                    '<option value="139">70x100cm</option>';
      
                var materialSelect = document.getElementById('material');
                materialSelect.innerHTML = '<option value="" disabled selected>Select material type</option>' +
                    '<option value="canvas">Canvas</option>' +
                    '<option value="paper">Paper</option>';
                
            } else {
                dimensionsContainer.style.display = 'none';
                materialContainer.style.display = 'block';

                // Enable the button as no dimensions/material are required
                addToCartButton.disabled = false;

                var dimensionsSelect = document.getElementById('dimensions');
                dimensionsSelect.innerHTML = '<option value="25">30x45cm</option>';

                var defaultMaterial = this.getAttribute('data-default-material');
                var materialSelect = document.getElementById('material');
                materialSelect.innerHTML = '';

                // Split the default material value into an array of options
                var materialOptions = defaultMaterial.split(' ');
                materialOptions.forEach(option => {
                    var materialOption = document.createElement('option');
                    materialOption.value = option;
                    materialOption.text = option.charAt(0).toUpperCase() + option.slice(1);
                    materialSelect.appendChild(materialOption);
                });

                // Set the default material value
                materialSelect.value = materialOptions[0];
            }

            // Update price based on default or selected dimension
            var price = showDimensionsMaterial ? parseFloat(document.getElementById("dimensions").value) : 25; // Default price for non-dimensionsMaterial items
            updatePrices(price, hasDiscount);
        });
    });
}

// Function to update price based on selected dimensions
document.getElementById("dimensions").addEventListener("change", function() {
    updatePriceBasedOnDimension(this.value);
});

function updatePriceBasedOnDimension(selectedDimension) {
    var price;
    switch (selectedDimension) {
        case '25':
            price = 25;
            break;
        case '70':
            price = 70;
            break;
        case '139':
            price = 139;
            break;
        default:
            price = 25; // Default price
    }
    var hasDiscount = window.selectedImageHasDiscount || false;
    updatePrices(price, hasDiscount);
}

// Object to track added products
var addedProducts = {};

// Add to cart functionality
document.getElementById("addToCart").addEventListener("click", function() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("dimensions").value);
    if (isNaN(price)) {
        price = 25; // Default to 25 if the parsed value is NaN
    }
    var material = document.getElementById("material").value;

    // Make sure dimension and material are selected
    if (isNaN(price) || !material) {
        alert("Please select both dimension and material.");
        return;
    }

    var hasDiscount = window.selectedImageHasDiscount || false;
    var discountedPrice = hasDiscount ? price * 0.75 : price;
    var totalPrice = (discountedPrice * quantity).toFixed(2);

    // Get the product name
    var productNameElement = document.getElementById('modal-title');
    var productName = productNameElement ? productNameElement.textContent : "Unknown product";

    // Assuming formatDimensions is available
    var formatDimensions = document.getElementById("dimensions").selectedOptions[0].text;

    // Create a unique key for the product
    var productKey = productName + material + formatDimensions;

    // Check if the product has already been added
    if (addedProducts[productKey]) {
        alert("This product has already been added to the cart.");
        return;
    }

    // Mark the product as added
    addedProducts[productKey] = true;

    // This handles adding the item to the cart
    console.log("Added to Cart - Product: " + productName + ", Quantity: " + quantity + ", Total Price: €" + totalPrice + ", Material: " + material + ", Format Dimensions: " + formatDimensions);

    // Disable the button after adding to cart
    var addToCartButton = document.getElementById("addToCart");
    addToCartButton.innerHTML = "<span>&#10003;</span> Item added";
    addToCartButton.classList.add("added-to-cart");
    addToCartButton.disabled = true; // Disable the button

    // Optionally reset the button's text and opacity after a few seconds
    setTimeout(function() {
        addToCartButton.innerHTML = "<span>Add to Cart</span>";
        addToCartButton.classList.remove("added-to-cart");
        addToCartButton.disabled = false; // Re-enable the button
    }, 2300);
});
(function() {
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
      console.log("Quantity changed:", value);
  }
})();