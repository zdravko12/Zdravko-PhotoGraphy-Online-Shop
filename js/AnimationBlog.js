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


//  Text shop h1 element
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var header = document.querySelector('.BlogTextMove11');
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

  document.addEventListener("DOMContentLoaded", function() {
    // Select the elements with the class "TextMoveHome"
    const textElements = document.querySelectorAll('.TextMoveHome');
  
    // Loop through each text element and add fading effect
    textElements.forEach(function(element, index) {
      // Set a timeout to start fading in for each element
      setTimeout(function() {
        element.style.opacity = 1;
      }, index * 1000); // Change 3000 to the desired duration in milliseconds
    });
  });


  // sliki slideshow Blog page 
$(document).ready(function() {
    var images = [
        "/Images/FrameZp10.jpg",
        "/Images/FrameZp9.jpg",
        "/Images/BlogCalendar1.png",
        "/Images/BlogCalendar2.jpg",
        "/Images/BlogCalendar3.jpg",
        "/Images/FrameZp13.jpg",
        "/Images/FramePhotosZP1.jpg",
        "/Images/FramePhotosZP3.png",
       
    ];

    var currentIndex = 0;

    function slideshow() {
        $('#slideshow1 img').fadeOut('slow', function() {
            $(this).attr('src', images[currentIndex]).fadeIn('slow');
        });
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(slideshow, 4000); // Change the slide every 3 seconds
    }

    slideshow();
});
  

  //blog Fade effects 
  document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;
    var fadeImages = document.querySelectorAll(".fade-image");
  
    function fadeInImage() {
      fadeImages.forEach(function(image) {
        var positionFromTop = image.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
  
        if (positionFromTop - windowHeight <= 0) {
          image.style.animation = "fadeIn 2s ease-in-out forwards";
        } else {
          image.style.animation = "fadeOut 2s ease-in-out forwards";
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