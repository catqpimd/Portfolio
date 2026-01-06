
// album scroll animation
window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to(".rotating-container", {
      duration: 2,
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: ".album-trigger",
        start: "top center",
        end: "+=40%",
        scrub: 1,
      }
    });
  
    ScrollTrigger.refresh(); // re-calculate positions
  });

//album modal
const descriptions = {
    "album1.png": {
        title: "Album: Swimming",
        Artist: "Artist: Mac Miller",
        genre: "Genre: Alternative Hip-Hop, R&B",
        description: " Reflective and mellow, blending introspective lyrics with smooth, jazzy beats. The album has a relaxed, dreamlike quality, focusing on personal growth and vulnerability.",
        spotifyEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4gT3mNJA8lnlkYFqGZ8IA2?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    "album2.png": {
        title: "Album: Hold On Now, Youngster...",
        Artist: "Artist: Los Campesinos",
        genre: "Genre: British Indie Rock, Noise Pop",
        description: "Upbeat and youthful, with energetic, infectious melodies. The album captures the feeling of angst and excitement, with witty, emotionally charged lyrics.",
        spotifyEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1sIOUk8T8yxYL0lJptiyt6?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    "album3.png": {
        title: "Album: CHASE",
        Artist: "Artist: Aaron May",
        genre: "Genre: Hip-Hop, R&B",
        description: " Laid-back yet introspective, with smooth production and a focus on self-discovery. The album blends melodic rap with soulful vibes and deep lyrical themes.",
        spotifyEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3RKLJPyyMZfwebsePAzqjL?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    "album4.png": {
        title: "Album: Fetch The Bolt Cutters",
        Artist: "Artist: Fiona Apple",
        genre: "Genre: Experimental Rock",
        description: "Raw, experimental, and unapologetic. The album combines unconventional song structures with deeply personal lyrics, exploring themes of freedom, betrayal, and empowerment.",
        spotifyEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/17QLp5uadHptxnmq9clK8U?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    "album5.png": {
        title: "Album: Martyr Parade",
        Artist: "Artist: Des Rocs",
        genre: "Genre: Alternative Rock",
        description: "Bold and anthemic, mixing rock elements with electronic beats. The album conveys a sense of defiance and power, with high-energy tracks that build intensity.",
        spotifyEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7BVo8X0ckrgdSwOwvKEcjh?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    "album6.png": {
        title: "Album: Short n' Sweet",
        Artist: "Artist: Sabrina Carpenter",
        genre: "Genre: Pop",
        description: " Fun, catchy, and lighthearted. The album features upbeat pop melodies with a youthful, carefree vibe, touching on themes of love and self-expression.",
        spotifyEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1UHS8Rf6h5Ar3CDWRd3wjF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    "album7.png": {
        title: "Album: Gemini Rights",
        Artist: "Artist: Steve Lacy",
        genre: "Genre: R&B, Soul, Funk",
        description: "Smooth and sensual with a blend of funk, soul, and electronic influences. The album explores themes of love, identity, and self-awareness with a groovy, soulful sound.",
        spotifyEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0J119Oas2ox6JTTHUGZxHN?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    "album8.png": {
        title: "Album: eternal sunshine",
        Artist: "Artist: Ariana Grande",
        genre: "Genre: Pop, R&B",
        description: " Dreamy and ethereal, with a modern twist on classic pop and R&B sounds. The album features uplifting melodies and explores themes of love, personal growth, and positivity.",
        spotifyEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/142PiXzA84lmEw2RstFHFa?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    }
};


function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalContentWrapper = document.querySelector(".modal-content-wrapper");
    const modalImg = document.getElementById("modalImg");
    const modalText = document.getElementById("modalText");
    const spotifyEmbed = document.getElementById("spotifyEmbed");

    const imgFileName = img.src.split('/').pop();
    const album = descriptions[imgFileName] || {
        title: "Unknown Album",
        Artist: "Unknown Artist",
        Genre: "Genre Unknown",
        description: "No description available.",
        spotifyEmbed: ""
    };

    modalImg.src = img.src;
    modalText.innerHTML = `
        <h2>${album.title}</h2>
        <h3>${album.Artist}</h3>
        <h4>${album.genre}</h4>
        <p>${album.description}</p>
    `;
    spotifyEmbed.innerHTML = album.spotifyEmbed;

    modal.style.display = "flex";
    modalContentWrapper.style.display = "flex";
}

// Close modal when clicking outside of content
document.getElementById("imageModal").addEventListener("click", function (event) {
    const modalContent = document.querySelector(".modal-content-wrapper");
    const spotifyEmbed = document.getElementById("spotifyEmbed");

    if (!modalContent.contains(event.target)) {
        this.style.display = "none";
        modalContent.style.display = "none";
        spotifyEmbed.innerHTML = ""; // Clear embedded track
    }
});

