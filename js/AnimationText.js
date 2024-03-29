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