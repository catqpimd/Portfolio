const images = ['images/spring.png', 'images/summer.png', 'images/fall.png', 'images/winter.png']; 
let currentImageIndex = 0;

const imageDisplay = document.getElementById('imageDisplay');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const contentBoxes = document.querySelectorAll('.content-box'); // Select all text and image sections

// Set the initial image and display the first season's text and images
imageDisplay.src = images[currentImageIndex];
updateVisibility();

function updateVisibility() {
    // Hide all content boxes
    contentBoxes.forEach(box => box.style.display = 'none');

    // Show the correct one based on current index
    if (contentBoxes[currentImageIndex]) {
        contentBoxes[currentImageIndex].style.display = 'flex';
    }
}

// Event Listeners for Navigation Buttons
prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    imageDisplay.src = images[currentImageIndex];
    updateVisibility();
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageDisplay.src = images[currentImageIndex];
    updateVisibility();
});


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
