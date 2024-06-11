var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-image");
var modalTitle = document.getElementById("modal-title");
var closeBtn = document.querySelector(".close");
var secondModal = document.getElementById("secondModal");
var secondModalImg = document.getElementById("second-modal-image");

var currentIndex = 0;
var images = [];

function openModal(imgArray, imgTitle) {
    images = imgArray;
    currentIndex = 0;
    modalImg.src = images[currentIndex];
    modalTitle.textContent = imgTitle;
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    if (modalId === 'myModal') {
        modalImg.src = '';
        modalTitle.textContent = '';
    }
}

function plusSlides(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    modalImg.src = images[currentIndex];
}

function openSecondModal() {
    secondModalImg.src = modalImg.src; // Pass the current image from the first modal to the second modal
    secondModal.style.display = "block";
}

function plusSlidesSecond(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    secondModalImg.src = images[currentIndex];
}

closeBtn.addEventListener("click", function() {
    closeModal('myModal');
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal('myModal');
    } else if (event.target == secondModal) {
        closeModal('secondModal');
    }
});

