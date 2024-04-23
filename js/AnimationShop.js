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


