// $(document).ready(function(){

//     $(".nav .dropdown").focusin( function (){
//        $(this).find(".dropdown-menu").each(function(){
//          $(this).css({"display":'block','opacity':'1','top':'60px'}); 
//        });
//     });
    
//       $(".nav .dropdown").focusout( function (){
//        $(this).find(".dropdown-menu").each(function(){
//          $(this).css({"display":'block','opacity':'0','top':'0px'}); 
//        });
//     });
// });


//  Text shop h1 element
// window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
//     var header = document.querySelector('.BlogTextMove11');
//     if (scrollPosition > 100) { // Adjust as needed
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
//   });


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