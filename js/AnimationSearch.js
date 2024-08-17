// za logo od gore pa nadole 
let logo = document.getElementById('LogoZP');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        logo.classList.add('scrolling-up');
    } else {
        // Scrolling up
        logo.classList.remove('scrolling-up');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


// Logo footer move up down 
$(document).ready(function() {
    $(window).scroll(function() {
      $('#footer-logo1').each(function() {
        var position = $(this).offset().top;
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        if (position < scrollPosition + windowHeight - 120) {
          $(this).addClass('LogoMoveFrame');
        }else{
          $(this).removeClass('LogoMoveFrame');
        }
      });
    });
  });


  // SlikaFrameView
$(document).ready(function() {
    $(window).scroll(function() {
      $('.ChangePhotoMove').each(function() {
        var position = $(this).offset().top;
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        if (position < scrollPosition + windowHeight - 150) {
          $(this).addClass('PhotoFrameViewMove');
        }else{
          $(this).removeClass('PhotoFrameViewMove');
        }
      });
    });
  });
  
  
  // ImageSubscribe to Newsletter
  $(document).ready(function() {
    $(window).scroll(function() {
      $('.SubscribeMove').each(function() {
        var position = $(this).offset().top;
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        if (position < scrollPosition + windowHeight - 80) {
          $(this).addClass('InputMove');
        }else{
          $(this).removeClass('InputMove');
        }
      });
    });
  });


  
  
    



  var prevImages, nextImages;
  var currentFirstImage = "";
  var currentIndex = 0; // Initialize currentIndex outside the function
  
  // First Modal Logic
  function openModal(images, title, index) {
      currentFirstImage = images[0];
  
      var modal = document.getElementById("myModal");
      document.getElementById('modal-image').src = images[0];
      document.getElementById('modal-title').textContent = title;
      modal.style.display = "block";
  
      // Store images and title for later use
      prevImages = images;
      nextImages = images;
      prevTitle = title;
      nextTitle = title;
      currentIndex = index;
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
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
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
// Function to handle the next/previous navigation for the second modal
function plusSlidesSecond(n) {
    // Update the current index
    currentIndex += n;

    // If the index goes out of bounds, wrap it around
    if (currentIndex < 0) {
        currentIndex = prevImages.length - 1; // Go to the last image
    } else if (currentIndex >= prevImages.length) {
        currentIndex = 0; // Go to the first image
    }

    // Update the image in the second modal
    document.getElementById('second-modal-image').src = prevImages[currentIndex];
}

 // Set the default price
 var defaultPrice = 25;
 var priceElement = document.getElementById("original-price");
 priceElement.innerText = "€" + defaultPrice;
 

 // Handle click events for product items
 document.querySelectorAll('.product-item, .img-fluid1, .img-fluid2').forEach(item => {
   item.addEventListener('click', function(event) {
     event.preventDefault();
     var hasDiscount = this.getAttribute('data-discount') === 'true';

     var price = defaultPrice;

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

 // Handle dimension changes
 document.getElementById('dimensions').addEventListener('change', function() {
   var selectedDimension = this.value;
   var price = defaultPrice;

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
       price = defaultPrice;
   }

   document.getElementById("original-price").innerText = "€" + price;

   var hasDiscount = document.querySelector('.product-item[data-discount="true"]');
   if (hasDiscount) {
     var discountedPrice = (price * 0.75).toFixed(2);
     document.getElementById("discounted-price").innerText = "€" + discountedPrice;
     document.getElementById("discounted-price").style.display = 'inline';
   } else {
     document.getElementById("discounted-price").style.display = 'none';
   }
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

// za dimenzi ne se klika dodeka ne se popolnat input polinja 
const dimensionsSelect = document.getElementById('dimensions');
const materialSelect = document.getElementById('material');
const addToCartButton = document.getElementById('addToCart');

function checkSelections() {
  const dimensionSelected = dimensionsSelect.value !== '';
  const materialSelected = materialSelect.value !== '';
  addToCartButton.disabled = !(dimensionSelected && materialSelected);
}

dimensionsSelect.addEventListener('change', checkSelections);
materialSelect.addEventListener('change', checkSelections);

addToCartButton.addEventListener('click', function(event) {
  if (addToCartButton.disabled) {
    alert('Please select both a format and a type of material before adding this product to your cart.');
    event.preventDefault();
  } else {
    // Existing add to cart functionality
  }
});

// Initial check in case there are pre-selected options (optional)
checkSelections();

// Object to track added products
var addedProducts = {};

// Add to cart functionality
document.getElementById("addToCart").addEventListener("click", function() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("dimensions").value);
    if (isNaN(price)) {
        price = window.defaultPrice || 25; // Defaults to 25 if the parsed value is NaN
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

  /// Optionally reset the button's text and opacity after a few seconds
  setTimeout(function() {
    addToCartButton.innerHTML = "<span>Add to Cart</span>";
    addToCartButton.classList.remove("added-to-cart");
    addToCartButton.disabled = false; // Re-enable the button
}, 2300);
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















