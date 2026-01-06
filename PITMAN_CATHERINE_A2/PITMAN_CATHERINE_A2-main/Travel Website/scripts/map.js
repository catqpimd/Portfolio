document.addEventListener("DOMContentLoaded", function () {
    const mapLabels = document.querySelectorAll(".map-label");
    const popup = document.getElementById("map-popup");
    const popupImage = document.getElementById("popup-image");
    const popupText = document.getElementById("popup-text");
    const closeButton = document.getElementById("close-popup");

    // Define map section details
    const locations = {
        farm: {
            image: "images/maps/farm.webp",alt:"Farm map",
            text: "Welcome to your farm! Grow crops, raise animals, and build your dream homestead."
        },
        beach: {
            image: "images/maps/beach.jpg",alt:"Beach map",
            text: "The beach is a perfect place for fishing, sunbathing, and enjoying the ocean breeze! Check out the tidepools for some extra special forage items!"
        },
        mountains: {
            image: "images/maps/mountains.png",alt:"Mountain map",
            text: "Located to the north of Pelican Town, the mountains are a perfect place for fishing mining and exploring!"
        },
        town: {
            image: "images/maps/town.png", alt:"Town map",
            text: "Pelican Town is the heart of Stardew Valley, featuring The Community Center, The Stardrop Saloon, The muesuem and a wide variety of local business!"
        },
        forest: {
            image: "images/maps/forest.png",alt:"Forest map",
            text: "Cindersap Forest is a foregers daydream! With tons of wild goodies to be found, take a stroll around the pond and maybe you'll discover some exciting secrets tucked away in this wilderness paradise. "
        },
        desert: {
            image: "images/maps/desert.png",alt:"Desert map",
            text: "Calico Desert is just a short bus ride away from Pelican Town, and is the site of the towns annual desert festival. While there those brave adventurers who dare to dive into the deeps of the skull caverns will be rewarded for their skills. And for the less adventurous type, nothing beats kicking back and relaxing in Oasis the local store with more than meets the eye. "
        },
        bus: {
            image: "images/maps/bus.png",alt:"Bus image",
            text: "If you choose to visit us in Stardew Valley, this is likely the first place you will step foot! Our newly rennovated Bus Stop."
    }
}

    // Event Listener for Clicking a Label
    mapLabels.forEach(label => {
        label.addEventListener("click", function () {
            const section = this.getAttribute("data-section");
            if (locations[section]) {
                popupImage.src = locations[section].image;
                popupText.innerText = locations[section].text;
                popup.classList.add("show");
            }
        });
    });

    // Close Popup when Clicking the Close Button
    closeButton.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    // Close Popup when Clicking Outside the Popup Content
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.classList.remove("show");
        }
    });
});
