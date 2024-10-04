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


