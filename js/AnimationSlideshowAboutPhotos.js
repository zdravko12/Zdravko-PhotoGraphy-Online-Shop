// sliki slideshow home page 
$(document).ready(function() {
    var images = [
        "/Images/FrameZp10.jpg",
        "/Images/FrameZp9.jpg",
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