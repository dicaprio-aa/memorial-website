(() => {
    const layer = document.querySelector(".butterfly-layer");
    const artwork = document.querySelector(".home-art > img");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!layer || !artwork || reducedMotion.matches || !Element.prototype.animate) return;

    const colors = ["blue", "ivory", "gold", "orange", "ivory"];
    const routes = [
        { kind: "rise-left", direction: -1 },
        { kind: "rise-right", direction: -1 },
        { kind: "rise-right", direction: -1 },
        { kind: "rise-left", direction: 1 },
        { kind: "cross-sky", direction: 1 }
    ];
    const random = (min, max) => min + Math.random() * (max - min);
    const pause = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

    function pointFor(route, index, count, bounds) {
        const progress = index / (count - 1);
        const yRise = route.direction < 0 ? 1.04 - progress * 1.22 : .23 + progress * .57;
        if (route.kind === "rise-left") {
            return { x: random(.035, .23) * bounds.width, y: yRise * bounds.height };
        }
        if (route.kind === "rise-right") {
            return { x: random(.77, .965) * bounds.width, y: yRise * bounds.height };
        }
        return {
            x: (.75 + progress * .22 + random(-.025, .025)) * bounds.width,
            y: (.12 + Math.sin(progress * Math.PI * 2) * .085 + random(-.025, .025)) * bounds.height
        };
    }

    async function fly(butterfly, route, baseSize) {
        while (butterfly.isConnected && !reducedMotion.matches) {
            const bounds = artwork.getBoundingClientRect();
            if (!bounds.width || !bounds.height) { await pause(1000); continue; }
            const scale = Math.min(1, bounds.width / 1100);
            const size = baseSize * Math.max(.64, scale);
            butterfly.style.setProperty("--size", `${size}px`);
            const count = Math.floor(random(5, 8));
            const frames = [];

            for (let i = 0; i < count; i += 1) {
                const p = pointFor(route, i, count, bounds);
                const depth = random(.72, 1.17);
                const turn = route.kind === "cross-sky" ? random(-13, 13) : random(-19, 19);
                frames.push({
                    transform: `translate3d(${bounds.left + p.x - size / 2}px, ${bounds.top + p.y - size / 2}px, 0) rotate(${turn}deg) scale(${depth})`,
                    opacity: (i === 0 || i === count - 1) ? 0 : random(.62, .88),
                    offset: i / (count - 1),
                    easing: i === 0 || i === count - 2 ? "cubic-bezier(.37,0,.62,1)" : "cubic-bezier(.45,0,.55,1)"
                });
            }
            const duration = random(18000, 31000);
            const animation = butterfly.animate(frames, { duration, fill: "forwards", easing: "ease-in-out" });
            try { await animation.finished; } catch { return; }
            butterfly.style.opacity = "0";
            await pause(random(2200, 7500));
        }
    }

    routes.forEach((route, index) => {
        const butterfly = document.createElement("span");
        butterfly.className = `butterfly butterfly--${colors[index]}`;
        const wings = document.createElement("img");
        wings.src = "assets/butterflies/butterfly.svg";
        wings.alt = "";
        wings.draggable = false;
        butterfly.append(wings);
        layer.append(butterfly);
        window.setTimeout(() => fly(butterfly, route, random(35, 58)), random(300, 6500));
    });

    reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches) layer.replaceChildren();
    });
})();
