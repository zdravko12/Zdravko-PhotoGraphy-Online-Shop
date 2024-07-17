document.addEventListener('DOMContentLoaded', function() {
    let currentSlideIndex = 0;
    let slides = [];
    let productNames = [];

    // Function to open modal
    function openModal(index) {
        currentSlideIndex = index;
        let modal = document.getElementById('imageModal');
        let modalImage = document.getElementById('modal-image');
        let modalProductName = document.getElementById('modal-product-name');
        modalImage.src = slides[currentSlideIndex];
        modalProductName.innerText = productNames[currentSlideIndex];
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    // Function to close modal
    window.closeModal = function(modalId) {
        let modal = document.getElementById(modalId);
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Reset overflow-x
    }

    // Function to navigate slides
    window.plusSlides = function(n) {
        currentSlideIndex += n;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        } else if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        openModal(currentSlideIndex);
    };

    // Event listener for product images
    document.querySelectorAll('.cart-product-image').forEach((img, index) => {
        let productName = img.closest('tr').querySelector('.product-name').innerText;
        slides.push(img.src);
        productNames.push(productName);
        img.addEventListener('click', function() {
            openModal(index);
        });
    });
});