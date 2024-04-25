 // sliki slideshow home page 
 $(document).ready(function() {
    var images = [
        "/Images/Cover-Blog4.jpg",
        "/Images/Cover-Blog4.1.jpg",
        "/Images/Cover-Blog4.2.jpg",
        "/Images/Cover-Blog4.3.jpg",
        "/Images/Cover-Blog4.4.jpg",
        
       
    ];

    var currentIndex = 0;

    function slideshow() {
        $('#slideshowCalendar img').fadeOut('slow', function() {
            $(this).attr('src', images[currentIndex]).fadeIn('slow');
        });
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(slideshow, 4000); // Change the slide every 3 seconds
    }

    slideshow();
});