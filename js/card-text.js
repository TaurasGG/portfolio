function resizeCardFonts() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const width = card.getBoundingClientRect().width;

        // Scale .title text (but ignore .title-fit)
        const titles = card.querySelectorAll('.title:not(.title-fit)');
        titles.forEach(title => {
            title.style.fontSize = (width * 0.075) + 'px';
        });

        // Scale all other text inside the card (except .title and .title-fit)
        const otherTexts = card.querySelectorAll('*:not(.title):not(.title-fit)');
        otherTexts.forEach(el => {
            if (el.nodeType === 1) { // element nodes only
                // If the element has class "skills", use 0.75 instead of 0.045
                const factor = el.classList.contains('first') ? 0.065 : 0.035;
                el.style.fontSize = (width * factor) + 'px';
            }
        });
    });
}

// Run on page launch
window.addEventListener('DOMContentLoaded', resizeCardFonts);

// Run on window resize
window.addEventListener('resize', resizeCardFonts);

// Run whenever a card is resized
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const observer = new ResizeObserver(resizeCardFonts);
    cards.forEach(card => observer.observe(card));
});