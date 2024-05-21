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


  // za slikite po red da idat so effects shop
  document.addEventListener("DOMContentLoaded", function() {
    // Select all product thumbnails
    const productThumbnails = document.querySelectorAll('.product-thumbnail');
    
    // Function to display images with a fade-in effect, vertical translation, and delay
    function displayImagesWithDelay() {
      let delay = 400; // Initial delay in milliseconds
      productThumbnails.forEach(function(thumbnail, index) {
        setTimeout(function() {
          thumbnail.style.opacity = '1'; // Fade in the image
          thumbnail.style.transform = 'translateY(0)'; // Remove vertical translation
        }, delay * index); // Set the delay for each image
        delay += 10; // Increase delay for the next image
      });
    }
  
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to handle scroll event
    function handleScroll() {
      if (isInViewport(productThumbnails[0])) {
        displayImagesWithDelay(); // Display images when the first image is in the viewport
        window.removeEventListener('scroll', handleScroll); // Remove scroll event listener
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });



  // sliki slideshow Shop cover  page 
$(document).ready(function() {
    var images = [
        "/Images/Shop1CoverReflection1.png",
        "/Images/Shop2Cover.png",
        "/Images/Shop3Cover.png",
        "/Images/Shop4Cover.png",
        "/Images/Shop5Cover.png",
        "/Images/Shop6Cover.png",
        // Add Photo
    ];

    var currentIndex = 0;

    function slideShow() {
        $('#slideshow1 img').attr('src', images[currentIndex]);
        $('#slideshow1 img').removeClass('active');
        currentIndex = (currentIndex + 1) % images.length;
        $('#slideshow1 img').addClass('active');
        setTimeout(slideShow, 5000); // Change slide every 3 seconds
    }

    slideShow();
});


//  Text shop h1 element
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var header = document.querySelector('.ShopTextMove11');
  if (scrollPosition > 100) { // Adjust as needed
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});


// Define variables  pagination number and next prev for shop [PHOTOS]
var currentPage = 0; // Initial page index
var itemsPerPage = 8; // Number of items per page

// Function to show items for the current page
function showItems() {
    var startIndex = currentPage * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;

    // Hide all items
    $('.col-12').hide();

    // Show items for the current page
    $('.col-12').slice(startIndex, endIndex).show();
}

// Function to generate pagination links
function generatePaginationLinks() {
    var totalItems = $('.col-12').length;
    var totalPages = Math.ceil(totalItems / itemsPerPage);

    $('#pagination').empty(); // Clear existing pagination links

    // Add "Previous" button
    if (currentPage > 0) {
        $('#pagination').append('<a href="#" id="prevBtn">&laquo; Prev</a>');
    } else {
        $('#pagination').append('<span class="disabled">&laquo; Prev</span>');
    }

    // Add numbered page links
    for (var i = 0; i < totalPages; i++) {
        var pageNum = i + 1;
        if (i === currentPage) {
            $('#pagination').append('<a href="#" class="active">' + pageNum + '</a>');
        } else {
            $('#pagination').append('<a href="#">' + pageNum + '</a>');
        }
    }

    // Add "Next" button
    if (currentPage < totalPages - 1) {
        $('#pagination').append('<a href="#" id="nextBtn">Next &raquo;</a>');
    } else {
        $('#pagination').append('<span class="disabled">Next &raquo;</span>');
    }
}
// Function to show items for the current page with fade effect
function showItemsWithFade() {
  var startIndex = currentPage * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;

  // Hide all items with fade effect
  $('#productItemsContainer').children('.col-12').fadeOut(200);

  // Show items for the current page with fade effect
  $('#productItemsContainer').children('.col-12').slice(startIndex, endIndex).delay(400).fadeIn(600);
}
// Pagination event handler for "Previous" button
$(document).on('click', '#prevBtn', function() {
  if (currentPage > 0) {
      currentPage--;
      showItemsWithFade(); // Use showItemsWithFade() instead of showItems()
      generatePaginationLinks();
  }
});

// Pagination event handler for "Next" button
$(document).on('click', '#nextBtn', function() {
  var totalItems = $('#productItemsContainer').children('.col-12').length;
  var totalPages = Math.ceil(totalItems / itemsPerPage);

  if (currentPage < totalPages - 1) {
      currentPage++;
      showItemsWithFade(); // Use showItemsWithFade() instead of showItems()
      generatePaginationLinks();
  }
});
// Pagination event handler for page numbers
$(document).on('click', '.pagination a:not(#prevBtn, #nextBtn)', function() {
  var pageNum = parseInt($(this).text()) - 1;
  if (pageNum !== currentPage) {
      currentPage = pageNum;
      showItemsWithFade(); // Use showItemsWithFade() instead of showItems()
      generatePaginationLinks();
  }
});

// Function to show items for the current page with fade effect
function showItemsWithFade() {
  var startIndex = currentPage * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;

  // Hide all items with fade effect
  $('#productItemsContainer').children('.col-12').fadeOut(200);

  // Show items for the current page with fade effect
  $('#productItemsContainer').children('.col-12').slice(startIndex, endIndex).delay(200).fadeIn(200);
}


// Pagination event handler for "Previous" button
$(document).on('click', '#prevBtn', function() {
  if (currentPage > 0) {
      currentPage--;
      showItems();
      generatePaginationLinks();
  }
});

// Pagination event handler for "Next" button
$(document).on('click', '#nextBtn', function() {
  var totalItems = $('.col-12').length;
  var totalPages = Math.ceil(totalItems / itemsPerPage);

  if (currentPage < totalPages - 1) {
      currentPage++;
      showItems();
      generatePaginationLinks();
  }
});

// Show initial page and generate pagination links
showItems();
generatePaginationLinks();

// Pagination event handlers
$(document).on('click', '#prevBtn', function() {
    if (currentPage > 0) {
        currentPage--;
        showItems();
        generatePaginationLinks();
    }
});

$(document).on('click', '#nextBtn', function() {
    var totalItems = $('.col-12').length;
    var totalPages = Math.ceil(totalItems / itemsPerPage);

    if (currentPage < totalPages - 1) {
        currentPage++;
        showItems();
        generatePaginationLinks();
    }
});


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

// When the user clicks on the close button, close the modal
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  closeModal(); // Close the modal
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

// Update price based on selected dimensions
document.getElementById("dimensions").addEventListener("change", function() {
  var price = document.getElementById("dimensions").value;
  document.getElementById("price").innerText = "€" + price;
});

// Add to cart functionality
document.getElementById("addToCart").addEventListener("click", function() {
  var quantity = document.getElementById("quantity").value;
  var price = document.getElementById("dimensions").value * quantity;
  var material = document.getElementById("material").value;
  // You can handle adding the item to the cart here
  console.log("Added to cart - Quantity: " + quantity + ", Price: €" + price + ", Material: " + material);
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







