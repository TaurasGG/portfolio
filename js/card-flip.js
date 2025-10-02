document.addEventListener("DOMContentLoaded", () => {
    let flipCards = document.querySelectorAll(".card.flip");

    // Detect Gecko (Firefox engine)
    const isGecko = navigator.userAgent.toLowerCase().includes("gecko") &&
        !navigator.userAgent.toLowerCase().includes("webkit") &&
        !navigator.userAgent.toLowerCase().includes("trident");

    // Only wrap if NOT Firefox/Gecko
    if (!isGecko) {
        flipCards.forEach(card => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("flip-wrapper");
            card.parentNode.insertBefore(wrapper, card);
            wrapper.appendChild(card);
        });

        // refresh NodeList since cards are re-parented
        flipCards = document.querySelectorAll(".card.flip");
    }

    function randomFlip() {
        const available = Array.from(flipCards).filter(
            t => !t.matches(':hover')
        );

        if (available.length === 0) return;

        const card = available[Math.floor(Math.random() * available.length)];
        const dir = Math.random() > 0.5 ? 'flip-x' : 'flip-y';

        card.classList.add(dir);
        setTimeout(() => card.classList.remove(dir), 600);
    }

    setInterval(randomFlip, 500);
});