const videoFiles = [
    "file (1).mp4",
    "file (2).mp4",
    "file (3).mp4",
    "file (4).mp4",
    "file (5).mp4",
    "file (6).mp4",
    "file (7).mp4",
    "file (8).mp4",
    "file (9).mp4",
    "file (10).mp4",
    "file (11).mp4",
    "file (12).mp4",
    "file (13).mp4",
    "file (14).mp4",
    "file (15).mp4",
    "file (16).mp4",
    "file (17).mp4",
    "file (18).mp4",
    "file (19).mp4",
    "file (20).mp4",
    "file (21).mp4",
    "file.mp4"
];

const videoPosters = [
    "cover.png",
    "f15607_00d9bd62f73749e6bdf9e3ad09a34740~mv2.jpg",
    "f15607_0492a743463c4f6e85c8b156e18f9bc1~mv2.jpg",
    "f15607_04f2a79659c54376887d38fef8548609~mv2.jpg",
    "f15607_07f18ccd619141c282bc4f352d88edf8~mv2.jpg",
    "f15607_0aa5e02c8a884110a78bbb839959764e~mv2.jpg",
    "f15607_0e36a73a6f35444a9e990adf81bc071b~mv2.jpg",
    "f15607_0ed66b80ec3d4f42806c4d3fee586a78~mv2.jpg",
    "f15607_0f10ce00fd07417cb187085dd3abbbfb~mv2.jpg",
    "f15607_11cb690efde84ae58242657b2d4448b5~mv2.jpg",
    "f15607_13299411e5084afd9a24499e8132d21a~mv2.jpg",
    "f15607_1380eb71a7ad43159d40634e80ab5ab2~mv2.jpg",
    "f15607_138a48c38e644943acd2de324fff6f0b~mv2.jpg",
    "f15607_17e1aaf797e34b2fb65d5711d5283ad8~mv2.jpg",
    "f15607_1a3ed3d6aeff485692a0f1d74fe9390c~mv2.jpg",
    "f15607_1c576e96c460443791583a2f9d2978a5~mv2.jpg",
    "f15607_23bb5009dbfb441bb6e477c696d19ed9~mv2.jpg",
    "f15607_26743124ebcc453fb6b78efd4f5fcf56~mv2.jpg",
    "f15607_28720557be43413f97aee3ced77e4603~mv2.jpg",
    "f15607_295f7ed6e394472ca343853d8d8b82ef~mv2.jpg",
    "f15607_2c92d4653ed4408689bf1e41e0ae4ddb~mv2.jpg",
    "f15607_2ca867babd394e60b775af9d35eb5df8~mv2.jpg"
];

const videoCarousel = document.querySelector("#video-carousel-stage");

if (videoCarousel) {
    const videos = videoFiles.map((filename, index) => ({
        filename,
        poster: videoPosters[index]
    }));
    const positions = [
        { name: "far-left", offset: -2 },
        { name: "left", offset: -1 },
        { name: "center", offset: 0 },
        { name: "right", offset: 1 },
        { name: "far-right", offset: 2 }
    ];
    const count = document.querySelector("#video-count");
    const previousButton = document.querySelector("#video-previous");
    const nextButton = document.querySelector("#video-next");
    const lightbox = document.querySelector(".video-lightbox");
    const player = lightbox.querySelector("video");
    const playbackError = lightbox.querySelector(".lightbox-video-error");
    const lightboxCount = lightbox.querySelector(".lightbox-count");
    const downloadLink = lightbox.querySelector(".lightbox-download");
    let activeIndex = 0;
    let animationTimer;

    const videoPath = (filename) => `assets/videos/${encodeURIComponent(filename)}`;
    const posterPath = (filename) => `assets/images/${encodeURIComponent(filename)}`;

    function renderCarousel() {
        positions.forEach(({ name, offset }) => {
            const card = videoCarousel.querySelector(`[data-position="${name}"]`);
            const index = (activeIndex + offset + videos.length) % videos.length;
            const video = videos[index];
            const thumbnail = document.createElement("img");
            thumbnail.src = posterPath(video.poster);
            thumbnail.alt = `Preview of video memory ${index + 1} of Akhila Reji`;
            thumbnail.loading = "eager";
            thumbnail.decoding = "async";

            const playIcon = document.createElement("span");
            playIcon.className = "carousel-play";
            playIcon.setAttribute("aria-hidden", "true");
            playIcon.textContent = "▶";

            card.dataset.videoIndex = String(index);
            card.setAttribute("aria-label", `Play video memory ${index + 1} of ${videos.length}`);
            card.replaceChildren(thumbnail, playIcon);
            card.onclick = () => openVideo(index);
        });

        count.textContent = `${activeIndex + 1} of ${videos.length}`;
    }

    function moveCarousel(direction) {
        if (videoCarousel.classList.contains("is-changing")) {
            return;
        }

        videoCarousel.classList.add("is-changing");
        window.clearTimeout(animationTimer);
        animationTimer = window.setTimeout(() => {
            activeIndex = (activeIndex + direction + videos.length) % videos.length;
            renderCarousel();
            window.requestAnimationFrame(() => videoCarousel.classList.remove("is-changing"));
        }, 160);
    }

    function showVideo(index) {
        activeIndex = (index + videos.length) % videos.length;
        const video = videos[activeIndex];
        const path = videoPath(video.filename);

        player.pause();
        player.src = path;
        player.poster = posterPath(video.poster);
        playbackError.hidden = true;
        playbackError.textContent = "";
        lightboxCount.textContent = `${activeIndex + 1} of ${videos.length}`;
        downloadLink.href = path;
        downloadLink.download = video.filename;
    }

    function playCurrentVideo() {
        player.play().catch(() => {
            playbackError.textContent = "Press play on the video controls to start playback.";
            playbackError.hidden = false;
        });
    }

    function openVideo(index) {
        showVideo(index);
        lightbox.showModal();
        playCurrentVideo();
    }

    function moveLightbox(direction) {
        showVideo(activeIndex + direction);
        renderCarousel();
        playCurrentVideo();
    }

    previousButton.addEventListener("click", () => moveCarousel(-1));
    nextButton.addEventListener("click", () => moveCarousel(1));
    lightbox.querySelector(".lightbox-previous").addEventListener("click", () => moveLightbox(-1));
    lightbox.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));
    lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });
    lightbox.addEventListener("close", () => {
        player.pause();
        player.removeAttribute("src");
        player.load();
        playbackError.hidden = true;
    });
    player.addEventListener("error", () => {
        playbackError.textContent = "This video could not be played in this browser.";
        playbackError.hidden = false;
    });
    lightbox.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveLightbox(-1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            moveLightbox(1);
        }
    });

    renderCarousel();
}
