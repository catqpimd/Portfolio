//JS features at the top of my page

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        preloader.style.display = 'none'; 
        mainContent.style.display = 'block'; 
    }, 3000); 
});

//nav bar

document.querySelectorAll('.nav-item').forEach(item => {
    const topText = item.querySelector('.nav-text.top');
    const bottomText = item.querySelector('.nav-text.bottom');

    item.addEventListener('mouseenter', () => {
        gsap.to(topText, {
            y: '-100%',
            duration: 0.2,
            ease: 'power3.out'
        });
        gsap.to(bottomText, {
            y: '0%',
            duration: 0.2,
            ease: 'power3.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(topText, {
            y: '0%',
            duration: 0.2,
            ease: 'power3.out'
        });
        gsap.to(bottomText, {
            y: '100%',
            duration: 0.2,
            ease: 'power3.out'
        });
    });
});

//email
document.getElementById('emailButton').addEventListener('click', function () {
    const email = 'catqpitman@gmail.com';
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Email copied to clipboard!');
});


//topography effect

const canvas = document.getElementById("topoCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}
resizeCanvas();

let width = canvas.width;
let height = canvas.height;

let mouseX = width / 2;
let mouseY = height / 2;

function noise(x, y, t) {
    return Math.sin(x * 0.003 + t * 0.1) + Math.cos(y * 0.003 + t * 0.1);
}

function draw(time) {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";

    const spacing = 10;
    const contourLevels = 10;

    for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();

        for (let x = 0; x < width; x += spacing) {
            const dx = x - mouseX;
            const dy = y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy) * 0.015;

            const n = noise(x, y, time * 0.0005 + dist);
            const elevation = Math.floor(n * contourLevels);

            if (elevation % 2 === 0) {
                ctx.lineTo(x, y);
            } else {
                ctx.moveTo(x, y);
            }
        }
        ctx.stroke();
    }

    requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

window.addEventListener("resize", () => {
    resizeCanvas();
    width = canvas.width;
    height = canvas.height;
});

draw(0);


document.addEventListener('DOMContentLoaded', function () {
    const animationStepDuration = 0.3;
    const gridSize = 7;
    const pixelSize = 100 / gridSize;
    const cards = document.querySelectorAll('[data-pixelated-image-reveal]');

    cards.forEach((card) => {
        const pixelGrid = card.querySelector('[data-pixelated-image-reveal-grid]');
        const activeCard = card.querySelector('[data-pixelated-image-reveal-active]');
        const existingPixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
        existingPixels.forEach(pixel => pixel.remove());
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const pixel = document.createElement('div');
                pixel.classList.add('pixelated-image-card__pixel');
                pixel.style.width = `${pixelSize}%`; 
                pixel.style.height = `${pixelSize}%`;
                pixel.style.left = `${col * pixelSize}%`; 
                pixel.style.top = `${row * pixelSize}%`; 
                pixelGrid.appendChild(pixel);
            }
        }
        const pixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
        const totalPixels = pixels.length;
        const staggerDuration = animationStepDuration / totalPixels; 
        let isActive = false; 
        let delayedCall;
        const animatePixels = (activate) => {
            isActive = activate;
            gsap.killTweensOf(pixels); 
            if (delayedCall) {
                delayedCall.kill();
            }
            gsap.set(pixels, { display: 'none' });
            gsap.to(pixels, {
                display: 'block',
                duration: 0,
                stagger: {
                    each: staggerDuration,
                    from: 'random'
                }
            });
            delayedCall = gsap.delayedCall(animationStepDuration, () => {
                if (activate) {
                    activeCard.style.display = 'block';
                    activeCard.style.pointerEvents = 'none';
                } else {
                    activeCard.style.display = 'none';
                }
            });
            gsap.to(pixels, {
                display: 'none',
                duration: 0,
                delay: animationStepDuration,
                stagger: {
                    each: staggerDuration,
                    from: 'random'
                }
            });
        };

        card.addEventListener('mouseenter', () => {
            if (!isActive) {
                animatePixels(true);
            }
        });
        card.addEventListener('mouseleave', () => {
            if (isActive) {
                animatePixels(false);
            }
        });
    }
    )
});

//Resume

let currentPage = 1; 
const totalPages = 2; 

function openResume() {
    document.getElementById('resumeModal').style.display = "flex"; 
    showPage(currentPage);
  }
  

function closeResume() {
  document.getElementById('resumeModal').style.display = "none";
}

function showPage(pageNumber) {
  const page1 = document.getElementById('resumePage1');
  const page2 = document.getElementById('resumePage2');

  if (pageNumber === 1) {
    page1.style.display = "block";
    page2.style.display = "none";
  } else if (pageNumber === 2) {
    page1.style.display = "none";
    page2.style.display = "block";
  }
}

function navigatePage(direction) {
  if (direction === 'right' && currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  } else if (direction === 'left' && currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

document.addEventListener('keydown', function(event) {
  if (document.getElementById('resumeModal').style.display === "block") {
    if (event.key === "ArrowRight" && currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    } else if (event.key === "ArrowLeft" && currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  }
});

