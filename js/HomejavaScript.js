// sliki slideshow home page 
$(document).ready(function() {
    var images = [
        "/Images/FrameZp10.jpg",
        "/Images/FrameZp9.jpg",
        "/Images/FrameZp13.jpg",
        "/Images/FramePhotosZP1.jpg",
        "/Images/FramePhotosZP3.png",
        // Add more image URLs as needed
    ];

    var currentIndex = 0;

    function slideShow() {
        $('#slideshow img').attr('src', images[currentIndex]);
        $('#slideshow img').removeClass('active');
        currentIndex = (currentIndex + 1) % images.length;
        $('#slideshow img').addClass('active');
        setTimeout(slideShow, 3000); // Change slide every 3 seconds
    }

    slideShow();
});

// za Akcija odobruvanje za kolku dena
document.addEventListener("DOMContentLoaded", function() {
    var endDate = new Date();
    endDate.setDate(endDate.getDate() + 10); // Set the end date 10 days from now
  
    var countdown = document.getElementById("countdown");
  
    // Update the countdown every second
    var timer = setInterval(function() {
      var now = new Date().getTime();
      var distance = endDate - now;
  
      if (distance < 0) {
        clearInterval(timer);
        countdown.innerHTML = "EXPIRED";
        return;
      }
      
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdown.innerHTML =  days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
  });