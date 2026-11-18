document.querySelectorAll("img").forEach((image) => {
    const showImage = () => {
        if (!image.naturalWidth) {
            return;
        }

        image.hidden = false;
        const frame = image.closest(".memory-card, .story-image");
        if (frame) {
            frame.classList.remove("image-missing");
        }

        const galleryItem = image.closest(".gallery-item");
        if (galleryItem) {
            galleryItem.classList.add("has-image");
        }
    };

    const showFallback = () => {
        image.hidden = true;
        const frame = image.closest(".memory-card, .story-image");
        if (frame) {
            frame.classList.add("image-missing");
        }
        const galleryCard = image.closest(".gallery-card");
        if (galleryCard) {
            galleryCard.hidden = true;
        }
    };

    image.addEventListener("load", showImage);
    image.addEventListener("error", showFallback);

    if (image.complete) {
        if (image.naturalWidth) {
            showImage();
        } else {
            showFallback();
        }
    }
});

document.querySelectorAll(".video-card video[data-src]").forEach((video) => {
    const source = video.dataset.src;
    const placeholder = video.closest(".video-frame").querySelector(".video-placeholder");
    const downloadLink = video.closest(".video-card").querySelector(".video-download");

    placeholder.addEventListener("click", () => {
        if (!source) {
            return;
        }

        placeholder.hidden = true;
        video.hidden = false;
        video.src = source;
    });

    video.addEventListener("loadeddata", () => {
        video.hidden = false;
        placeholder.hidden = true;
        downloadLink.href = source;
        downloadLink.hidden = false;
    });

    video.addEventListener("error", () => {
        video.hidden = true;
        placeholder.hidden = false;
        placeholder.querySelector("span:last-child").textContent =
            "Unable to play here. Download the video instead.";
        downloadLink.hidden = false;
        video.removeAttribute("src");
    });
});

document.querySelectorAll(".inner-nav-toggle").forEach((toggle) => {
    const navigation = document.getElementById(toggle.getAttribute("aria-controls"));
    if (!navigation) return;

    const closeNavigation = () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
        navigation.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
        navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeNavigation();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeNavigation();
    });
    document.addEventListener("click", (event) => {
        if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeNavigation();
    });
});
