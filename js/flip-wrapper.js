document.addEventListener("DOMContentLoaded", () => {
    const flipCards = document.querySelectorAll(".card.flip");

    // Detect Gecko (Firefox engine)
    const isGecko = navigator.userAgent.toLowerCase().includes("gecko") &&
        !navigator.userAgent.toLowerCase().includes("webkit") &&
        !navigator.userAgent.toLowerCase().includes("trident");

    // Only wrap if NOT Firefox/Gecko
    if (!isGecko) {
        flipCards.forEach(card => {
            // Create wrapper
            const wrapper = document.createElement("div");
            wrapper.classList.add("flip-wrapper");

            // Insert wrapper in DOM right before the card
            card.parentNode.insertBefore(wrapper, card);

            // Move the card inside the wrapper
            wrapper.appendChild(card);
        });
    }
});