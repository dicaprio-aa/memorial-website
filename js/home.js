(() => {
    const heroImage = document.querySelector(".hero-portrait img");
    if (heroImage) {
        const portraits = [
            "assets/images/f15607_295f7ed6e394472ca343853d8d8b82ef~mv2.jpg",
            "assets/images/f15607_536f770d8bc64a7aabb70030f6729486~mv2.jpg",
            "assets/images/f15607_7413375f574143b8b4c40714e8fe6287~mv2.jpg",
            "assets/images/f15607_a41d0e751dee41e2b9a0c80ed0a7c50d~mv2.jpg"
        ];
        const storageKey = "akhila-home-hero-photo";
        const currentPhoto = heroImage.getAttribute("src");
        let previousPhoto = "";
        try { previousPhoto = sessionStorage.getItem(storageKey) || ""; } catch { /* Storage may be unavailable. */ }

        const choices = portraits.filter((photo) => photo !== currentPhoto && photo !== previousPhoto);
        if (choices.length) {
            const nextPhoto = choices[Math.floor(Math.random() * choices.length)];
            const preload = new Image();
            preload.onload = () => {
                heroImage.classList.add("is-fading");
                window.setTimeout(() => {
                    heroImage.src = nextPhoto;
                    window.requestAnimationFrame(() => heroImage.classList.remove("is-fading"));
                }, 230);
                try { sessionStorage.setItem(storageKey, nextPhoto); } catch { /* The image still changes without storage. */ }
            };
            preload.src = nextPhoto;
        }
    }

    const toggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector("#primary-navigation");

    if (toggle && navigation) {
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
    }

    const track = document.querySelector("#memory-track");
    if (track) {
        const scrollOneCard = (direction) => {
            const card = track.querySelector(".memory-card");
            if (!card) return;
            const styles = window.getComputedStyle(track);
            const gap = Number.parseFloat(styles.columnGap) || 0;
            track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
        };

        document.querySelector(".carousel-prev")?.addEventListener("click", () => scrollOneCard(-1));
        document.querySelector(".carousel-next")?.addEventListener("click", () => scrollOneCard(1));
    }
})();
