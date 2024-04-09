window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var header = document.querySelector('.text1Home');
    if (scrollPosition > 100) { // Adjust as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// za text zoom out Home
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


    
    window.addEventListener('scroll', function() {
      var textElement = document.getElementById('text');
      var scrollPosition = window.scrollY;

      // Check if the scroll position is greater than a certain threshold
      if (scrollPosition > 100) {
        // Apply the border effect with a fade
        textElement.classList.add('TextEffects');
      } else {
        // Remove the border effect
        textElement.classList.remove('TextEffects');
      }
      
      // Check if the scroll position is greater than a certain threshold to fade in the plus sign
      if (scrollPosition > 200) {
        // Apply the fade-in effect to the plus sign
        textElement.classList.add('plus');
      } else {
        // Remove the plus sign fade-in effect
        textElement.classList.remove('plus');
      }
    });

    
    // za slikite po red da idat so effects
    document.addEventListener("DOMContentLoaded", function() {
      // Select all product thumbnails
      const productThumbnails = document.querySelectorAll('.product-thumbnail');
      
      // Function to display images with a fade-in effect, vertical translation, and delay
      function displayImagesWithDelay() {
        let delay = 1000; // Initial delay in milliseconds
        productThumbnails.forEach(function(thumbnail, index) {
          setTimeout(function() {
            thumbnail.style.opacity = '1'; // Fade in the image
            thumbnail.style.transform = 'translateY(0)'; // Remove vertical translation
          }, delay * index); // Set the delay for each image
          delay += 100; // Increase delay for the next image
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

    // za scrol bojata na kopceto i shadows
    window.addEventListener('scroll', function() {
      var button = document.getElementById('exploreBtn');

      // Check if the user is scrolling down or up
      if (this.oldScroll > this.scrollY) {
          // Scrolling up, change button color to black
          button.classList.remove('gray');
      } else {
          // Scrolling down, change button color to gray
          button.classList.add('gray');
      }
      
      // Store the current scroll position
      this.oldScroll = this.scrollY;
  });

  // Initialize oldScroll variable
  window.onload = function() {
      window.oldScroll = window.scrollY;
  };


// za tekst effects ChooseUs Home
  let lastScrollTopMoveText = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTopMoveText){
        // scrolling down
        document.body.classList.add("scroll-down");
    } else {
        // scrolling up
        document.body.classList.remove("scroll-down");
    }
    lastScrollTopMoveText = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

// za skrol za text Why Choose Us

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const containerHeight = document.querySelector('.container').offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollThreshold = containerHeight - windowHeight;
  if (scrollPosition >= scrollThreshold) {
      document.querySelectorAll('.image').forEach((img, index) => {
          setTimeout(() => {
              img.classList.add('scroll-animation');
              if (index % 2 === 0) {
                  img.style.animation = `moveLeftToRight 2s ease-in-out forwards`;
              } else {
                  img.style.animation = `moveRightToLeft 2s ease-in-out forwards`;
              }
          }, index * 3000);
      });
  }
});



// Function to check if an element is in viewport
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


// slikata desno kon levo

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


// slika od 3 prvata grid move1

window.addEventListener('scroll', function() {
  var image = document.getElementById('PhotoGridHome');
  var imagePosition = image.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2; /* Adjust scroll position as needed */

  if (imagePosition < screenPosition) {
    image.classList.remove('moveNewFrist');
  } else {
    image.classList.add('moveNewFrist');
  }
});

// slika 2 od grid move

window.addEventListener('scroll', function() {
  var image = document.getElementById('PhotoGridHome1');
  var imagePosition2 = image.getBoundingClientRect().top;
  var screenPosition3 = window.innerHeight / 1.2; /* Adjust scroll position as needed */

  if (imagePosition2 < screenPosition3) {
    image.classList.remove('moveNewFrist2');
  } else {
    image.classList.add('moveNewFrist2');
  }
});

// slika 3 od grid move

window.addEventListener('scroll', function() {
  var image = document.getElementById('PhotoGridHome2');
  var imagePosition2 = image.getBoundingClientRect().top;
  var screenPosition3 = window.innerHeight / 1.1; /* Adjust scroll position as needed */

  if (imagePosition2 < screenPosition3) {
    image.classList.remove('moveNewFrist3');
  } else {
    image.classList.add('moveNewFrist3');
  }
});
// text 1 od grid 
window.addEventListener('scroll', function() {
  var element = document.getElementById('scrolling-text');
  var position = element.getBoundingClientRect();

  // Checking if the element is in the viewport
  if (position.top < window.innerHeight) {
    element.classList.add('show-animation');
  } else {
    element.classList.remove('show-animation');
  }
});

 // Function to check if an element is in the viewport --- za  We help you make a modern text
 function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var element = document.getElementById('scrolling-textMove1');
  if (isInViewport(element)) {
      element.classList.add('show');
  } else {
      element.classList.remove('show');
  }
}

// Add scroll event listener ----- za sliki kategori We help you make a modern
window.addEventListener('scroll', handleScroll);
// Call the handleScroll function initially to check if the element is already in view
handleScroll();


const items = document.querySelectorAll('.item');

function checkPosition() {
  const triggerBottom = window.innerHeight * 0.8;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkPosition);
checkPosition();


// Most Wanted slikite effects
$(document).ready(function() {
  $(window).scroll(function() {
    $('.product-item-sm').each(function() {
      var position = $(this).offset().top;
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (position < scrollPosition + windowHeight - 80) {
        $(this).addClass('show');
      }else{
        $(this).removeClass('show');
      }
    });
  });
});

// Recent Blog za blog slikata
$(document).ready(function() {
  $(window).scroll(function() {
    $('.ChangeEffects').each(function() {
      var position = $(this).offset().top;
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (position < scrollPosition + windowHeight - 100) {
        $(this).addClass('move');
      }else{
        $(this).removeClass('move');
      }
    });
  });
});


// Recent Blog za blog slikata 2
$(document).ready(function() {
  $(window).scroll(function() {
    $('.ChangeEffects1').each(function() {
      var position = $(this).offset().top;
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (position < scrollPosition + windowHeight - 40) {
        $(this).addClass('move1');
      }else{
        $(this).removeClass('move1');
      }
    });
  });
});

// Recent Blog za blog slikata 2
$(document).ready(function() {
  $(window).scroll(function() {
    $('.ChangeEffects2').each(function() {
      var position = $(this).offset().top;
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (position < scrollPosition + windowHeight - 150) {
        $(this).addClass('move2');
      }else{
        $(this).removeClass('move2');
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






