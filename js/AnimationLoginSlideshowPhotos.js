$(document).ready(function() {
    var images = [
      "/Images/LogoFormLogin3.png",
      "/Images/LogoFormLogin2.png",
    
  
     
    ];
  
    var currentIndex = 0;
  
    function preloadImages() {
      for (var i = 0; i < images.length; i++) {
        $('<img/>')[0].src = images[i];
      }
    }
  
    function slideshow() {
      $('#slideshowSignUp img').fadeOut('slow', function() {
        $(this).attr('src', images[currentIndex]).fadeIn('slow');
      });
      currentIndex = (currentIndex + 1) % images.length;
      setTimeout(slideshow, 4000); // Change the slide every 4 seconds
    }
  
    preloadImages(); // Preload images
    slideshow(); // Start slideshow
  });