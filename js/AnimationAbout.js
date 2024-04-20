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


// za boja na button home shop now 
window.addEventListener('scroll', function() {
    var button = document.getElementById('ButtonColor');
    var scrollPosition = window.scrollY;
  
    // Add a condition to change the button color when scrolling down
    if (scrollPosition > 0) { 
      button.style.backgroundColor = '#c7dc0d'; // Dark yellow
      button.style.color = '#000'; // White 
    } else {
      // Reset to initial color if scrolling back to the top
      button.style.backgroundColor = '#dcba0d'; // Light gray
      button.style.color = '#000'; // Black
    }
  });









// za scrool effect na text store Crafted with excellent material.
window.addEventListener('scroll', function() {
    var element = document.querySelector('.section-title');
    var position = element.getBoundingClientRect();

    // Checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('scroll-effect');
    } else {
        element.classList.remove('scroll-effect');
    }
});


// Function to check if an element is in viewport Fast & Free Shipping Easy to Shop 24/7 Support Hassle Free Returns
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add 'active' class to elements in viewport Why Choose Us Text
  function addActiveClass() {
    var elements = document.querySelectorAll('.Text24, .paragrafText');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });
  }
  
  // Add 'active' class to elements initially in viewport
  addActiveClass();
  
  // Add event listener for scroll event to add 'active' class to elements when scrolled into view
  window.addEventListener('scroll', addActiveClass);


// slikata desno kon levo Why Choose Us slikata

window.addEventListener('scroll', function() {
    var image = document.getElementById('image');
    var imagePosition = image.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5; /* Adjust scroll position as needed */
  
    if (imagePosition < screenPosition) {
      image.classList.remove('move');
    } else {
      image.classList.add('move');
    }
  });


// sliki slideshow home page 
$(document).ready(function() {
    var images = [
        "/Images/img-grid-1.png",
        "/Images/Choose-Us-About1.jpg",
        "/Images/Choose-Us-About2.jpg",
        "/Images/Choose-Us-About4.jpg",
        "/Images/Choose-Us-About5.jpg",
        "/Images/Choose-Us-About6.jpg",
        "/Images/Choose-Us-About7.jpg",
        "/Images/Choose-Us-About3.jpg",
        // Add more image URLs as needed
    ];

    var currentIndex = 0;

    function slideShow() {
        $('.slideshow img').attr('src', images[currentIndex]);
        $('.slideshow img').removeClass('active');
        currentIndex = (currentIndex + 1) % images.length;
        $('.slideshow img').addClass('active');
        setTimeout(slideShow, 4000); // Change slide every 3 seconds
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


// za text zoom out About bojata na tekstot da se smeni 
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var highlightedElements = document.querySelectorAll('.TextNewAnimation');
    
    highlightedElements.forEach(function(element) {
      if (scrollPosition > 105) {
        element.classList.add('highlight');
      } else {
        element.classList.remove('highlight');
      }
    });
  });
