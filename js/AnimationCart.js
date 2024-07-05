$(document).ready(function() {
    var images = [
      "/Images/LogoFormLogin.png",
      "/Images/LogoFormLoginSlideshow2.png",
      "/Images/LogoFormLoginSlideshow3.png",
      "/Images/LogoFormLoginSlideshow2.png",
      "/Images/LogoFormLoginSlideshow1.png",
      "/Images/LogoFormLoginSlideshow4.png",
      "/Images/LogoFormLoginSlideshow5.png",
  
     
    ];
  
    var currentIndex = 0;
  
    function preloadImages() {
      for (var i = 0; i < images.length; i++) {
        $('<img/>')[0].src = images[i];
      }
    }
  
    function slideshow() {
      $('#slideshow1 img').fadeOut('slow', function() {
        $(this).attr('src', images[currentIndex]).fadeIn('slow');
      });
      currentIndex = (currentIndex + 1) % images.length;
      setTimeout(slideshow, 4000); // Change the slide every 4 seconds
    }
  
    preloadImages(); // Preload images
    slideshow(); // Start slideshow
  });




// za fade na Login

document.addEventListener("DOMContentLoaded", function() {
  var lastScrollTop = 0;
  var fadeImages = document.querySelectorAll(".fade-image");

  function fadeInImage() {
    fadeImages.forEach(function(image) {
      var positionFromTop = image.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (positionFromTop - windowHeight <= 0) {
        image.style.animation = "fadeIn 1s ease-in-out forwards";
      } else {
        image.style.animation = "fadeOut 1s ease-in-out forwards";
      }
    });
  }

  window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      fadeInImage();
    } else {
      // Scrolling up
      fadeInImage();
    }
    lastScrollTop = currentScroll;
  });

  // Initially fade in images in view on page load
  fadeInImage();
});