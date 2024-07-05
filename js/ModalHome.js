var prevImages, nextImages;
 
 // Get the modal
var modal = document.getElementById("myModal");
var prevImages, nextImages, prevTitle, nextTitle;

function openModal(images, title) {
    // Get the modal and update content
    var modal = document.getElementById("myModal");
    document.getElementById('modal-image').src = images[0];
    document.getElementById('modal-title').textContent = title;
    modal.style.display = "block";

    // Store images and title for later use
    prevImages = images;
    nextImages = images;
    prevTitle = title;
    nextTitle = title;
}

// Get the button that opens the modal
var btns = document.querySelectorAll(".product-item");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    modal.style.display = "block";
  });
});




// When the user clicks anywhere outside of the modal, close it
// Function to close the modal and reset its content
function closeModal() {
  
  var modal = document.getElementById("myModal");
  $('#modal-image').attr('src', ''); // Clear image
  $('#modal-title').text(''); // Clear title
  modal.style.display = "none"; // Hide modal
}

// JavaScript for slideshow functionality
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
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
        currentIndex = images.length - 1; // Go to the last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Go to the first image
    }
    document.getElementById('modal-image').src = images[currentIndex];
   
}


document.querySelectorAll('.product-item, .img-fluid1, .img-fluid2').forEach(item => {
  item.addEventListener('click', function(event) {
      event.preventDefault();
      var hasDiscount = this.getAttribute('data-discount') === 'true';
      var price = 25;  // Assuming the original price is 25 for the sake of this example

      if (hasDiscount) {
          var discountedPrice = (price * 0.75).toFixed(2);
          document.getElementById("original-price").innerText = "€" + price;
          document.getElementById("discounted-price").innerText = "€" + discountedPrice;
          document.getElementById("discounted-price").style.display = 'inline';
      } else {
          document.getElementById("original-price").innerText = "€" + price;
          document.getElementById("discounted-price").style.display = 'none';
      }
  });
});

// Global variable to track discount status
window.selectedImageHasDiscount = false;
window.defaultPrice = 25; // Set default price

// Function to update prices based on discount status
function updatePrices(price, hasDiscount) {
  var originalPriceElement = document.getElementById("original-price");
  var discountedPriceElement = document.getElementById("discounted-price");
  
  originalPriceElement.innerText = "€" + price;
  
  if (hasDiscount) {
      var discountedPrice = (price * 0.75).toFixed(2); // Applying 25% discount
      discountedPriceElement.innerText = "€" + discountedPrice;
      discountedPriceElement.style.display = 'inline';
      originalPriceElement.classList.add('no-discount');
  } else {
      discountedPriceElement.style.display = 'none';
      originalPriceElement.classList.remove('no-discount');
  }
}

// Initial price display
updatePrices(window.defaultPrice, window.selectedImageHasDiscount);

// Event listener for image clicks to set the active image and check for discounts
document.querySelectorAll('.product-item, .img-fluid1, .img-fluid2').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        window.selectedImageHasDiscount = this.getAttribute('data-discount') === 'true';
        var price = parseFloat(document.getElementById("dimensions").value) || window.defaultPrice;
        updatePrices(price, window.selectedImageHasDiscount);
    });
});

// Update price based on selected dimensions
// Update price based on selected dimensions
document.getElementById("dimensions").addEventListener("change", function() {
  var price = parseFloat(this.value);
  if (isNaN(price)) {
      price = window.defaultPrice; // Default to 25 if the parsed value is NaN
  }
  var hasDiscount = window.selectedImageHasDiscount;
  updatePrices(price, hasDiscount);
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

  // Get product name
  var productNameElement = document.getElementById('modal-title');
  var productName = productNameElement ? productNameElement.textContent : "Unknown Product";

  // Assuming formatDimensions is available
  var formatDimensions = document.getElementById("dimensions").selectedOptions[0].text;

  // You can handle adding the item to the cart here
  console.log("Added to cart - Product: " + productName + ", Quantity: " + quantity + ", Total Price: €" + totalPrice + ", Material: " + material + ", Format Dimensions: " + formatDimensions);
});

// quantity za plus minus click na quantity
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







