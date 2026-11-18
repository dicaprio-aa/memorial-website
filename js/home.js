(() => {
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
