let slides = [];  // Array to store image paths
let productNames = [];  // Array to store product names
let currentSlideIndex = 0; // Keeps track of the current slide index

// Function to initialize slides (this should be called to set up images)
function updateSlidesAndProductNames() {
    // Example of slides initialization
    slides = [
        "image1.jpg", "image2.jpg", "image3.jpg"
    ]; // Replace with actual image paths
    productNames = [
        "Product 1", "Product 2", "Product 3"
    ]; // Replace with actual product names
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
function closeModal() {
    let modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Reset overflow-x
}

// Function to navigate slides
function plusSlides(n) {
    currentSlideIndex += n;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    openModal(currentSlideIndex);
}

// Initialize slides when the page is ready
document.addEventListener('DOMContentLoaded', function() {
    updateSlidesAndProductNames();
});