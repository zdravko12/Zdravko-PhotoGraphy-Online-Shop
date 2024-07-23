document.addEventListener('DOMContentLoaded', function() {
    let currentSlideIndex = 0;
    let slides = [];
    let productNames = [];

    // Function to update slides and product names arrays
    function updateSlidesAndProductNames() {
        slides = [];
        productNames = [];
        document.querySelectorAll('.cart-product-image').forEach((img, index) => {
            let productName = img.closest('tr').querySelector('.product-name').innerText;
            slides.push(img.src);
            productNames.push(productName);
            img.addEventListener('click', function() {
                openModal(index);
            });
        });
    }

    // Function to open modal
    function openModal(index) {
        currentSlideIndex = index;
        let modal = document.getElementById('imageModal');
        let modalImage = document.getElementById('modal-image');
        let modalProductName = document.getElementById('modal-product-name');
        let prevButton = document.querySelector('.prev');
        let nextButton = document.querySelector('.next');

        modalImage.src = slides[currentSlideIndex];
        modalProductName.innerText = productNames[currentSlideIndex];
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        // Show or hide navigation buttons based on the number of slides
        if (slides.length > 1) {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
        } else {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }
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

    // Function to remove a product from the cart and refresh the site
    window.removeProductFromCart = function(productIndex) {
        // Remove the product from the DOM (example implementation)
        let productRows = document.querySelectorAll('.cart-product-row');
        if (productRows[productIndex]) {
            productRows[productIndex].remove();
        }

        // Reload the page to refresh the site
        location.reload();
    };

    // Prevent default form submission behavior (if remove buttons are inside a form)
    document.querySelectorAll('.remove-product-button').forEach((btn) => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission if button is inside a form
            let productIndex = parseInt(btn.dataset.index); // Assuming you have a data-index attribute on your remove button
            removeProductFromCart(productIndex);
        });
    });

    // Initial setup for product images
    updateSlidesAndProductNames();
});