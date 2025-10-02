if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"; // prevent Edge/Chrome scroll memory
}

function slowScrollToTop(duration = 6000) {
    const start = window.scrollY || document.documentElement.scrollTop;
    const startTime = performance.now();

    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out

        window.scrollTo(0, start * (1 - ease));

        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

window.addEventListener("load", () => {
    // Jump instantly to bottom first
    window.scrollTo(0, document.body.scrollHeight);

    // Allow browser to render bottom view
    requestAnimationFrame(() => {
        document.body.classList.add("ready"); // enable scrolling
        slowScrollToTop(1000);
    });
});