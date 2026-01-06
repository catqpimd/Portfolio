let currentIndex = 0;
let timer;
let images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function moveSlide(direction) {
  const carouselImages = document.querySelector('.carousel-images');

  // Update index
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1; // Wrap around to last image
    updateCarousel('right'); // Transition to the right to loop smoothly
  } else if (currentIndex >= totalImages) {
    currentIndex = 0; // Wrap around to first image
    updateCarousel('left'); // Transition to the left to loop smoothly
  } else {
    updateCarousel(direction === 1 ? 'left' : 'right');
  }

  resetTimer();
}

function updateCarousel(direction) {
  const carouselImages = document.querySelector('.carousel-images');

  if (direction === 'left') {
    carouselImages.style.transition = 'transform 0.5s ease';
    carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
  } else if (direction === 'right') {
    // Temporarily slide right
    carouselImages.style.transition = 'transform 0s'; // No transition for the reset
    carouselImages.style.transform = `translateX(${-((currentIndex + 1) % totalImages) * 100}%)`;

    // After the reset, transition left again
    setTimeout(() => {
      carouselImages.style.transition = 'transform 0.5s ease';
      carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
    }, 50); // Delay the reset to allow smooth transition
  }
}

function startAutoRotate() {
  timer = setInterval(() => {
    moveSlide(1); // Move forward every 5 seconds
  }, 5000);
}

function resetTimer() {
  clearInterval(timer); // Clear the existing timer
  startAutoRotate();    // Start a new timer
}

// Start automatic image rotation when the page loads
startAutoRotate();



// Mayor Lewis pop up
window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    // Show the pop-up by default when the page loads
    popup.style.display = 'block';

    // Close the pop-up when the "X" is clicked
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Move the pop-up to the corner if clicked outside
    window.addEventListener('click', (event) => {
        if (!popup.contains(event.target)) {
            popup.classList.add('corner');
        }
    });

    // If the user clicks on the pop-up again, return it to the center
    popup.addEventListener('click', () => {
        popup.classList.remove('corner');
    });
});
