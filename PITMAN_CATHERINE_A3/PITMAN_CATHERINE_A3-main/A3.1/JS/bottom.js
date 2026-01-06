// Video

const video = document.getElementById("myVideo");

gsap.registerPlugin(ScrollTrigger);

// preload video
video.setAttribute("preload", "auto");
video.addEventListener("loadeddata", () => {
    const scrollDuration = 2000;

    gsap.to(video, {
        scrollTrigger: {
            trigger: ".video-container",
            start: "top top",
            end: `+=${scrollDuration}`, 
            scrub: 3, 
            pin: true, 
        },
        onUpdate: function () {
            let progress = this.progress();
            if (video.readyState >= 2 && progress !== undefined) {
                video.currentTime = progress * video.duration;
            }
        },
    });
});

// contact section

gsap.to(".contact-overlay", {
    scrollTrigger: {
        trigger: ".video-container",
        start: "bottom top", 
        end: "bottom+=500px top", 
        toggleActions: "none play none reverse",
        scrub: 1,
    },
    opacity: 1,
    display: "flex",
    pointerEvents: "auto",
    duration: 0.5,
});
