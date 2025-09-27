const cards = document.querySelectorAll('.flip');

function randomFlip() {
    const available = Array.from(cards).filter(
        t => !t.matches(':hover')
    );

    if (available.length === 0) return;

    const card = available[Math.floor(Math.random() * available.length)];
    const dir = Math.random() > 0.5 ? 'flip-x' : 'flip-y';

    card.classList.add(dir);
    setTimeout(() => card.classList.remove(dir), 600);
}

setInterval(randomFlip, 500);