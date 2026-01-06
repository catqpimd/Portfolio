//Gallery 1

gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("image-track");

gsap.set(track, { xPercent: 0 });

gsap.to(track, {
    xPercent: -100, 
    ease: "none",
    scrollTrigger: {
        trigger: track,
        start: "center center", 
        end: "+=200%", 
        scrub: 1,
        pin: true, 
    }
});

const images = track.getElementsByClassName("image");
gsap.utils.toArray(images).forEach((image) => {
    gsap.to(image, {
        objectPosition: "50% center", 
        ease: "none",
        scrollTrigger: {
            trigger: track,
            start: "center center", 
            end: "+=200%",
            scrub: 1,
        }
    });
});

// Gallery 2

gsap.registerPlugin(ScrollTrigger);

const trackRight = document.getElementById("image-track-right");

gsap.set(trackRight, { xPercent: -50 });

gsap.to(trackRight, {
    xPercent: 75, 
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery-right",
        start: "center center",
        end: "+=200%",
        scrub: 1,
        pin: true,
      }      
});

const imagesRight = trackRight.getElementsByClassName("image");
gsap.utils.toArray(imagesRight).forEach((image) => {
    gsap.to(image, {
        objectPosition: "50% center",
        ease: "none",
        scrollTrigger: {
            trigger: trackRight,
            start: "center center",
            end: "+=200%",
            scrub: 1,
        }
    });
});
