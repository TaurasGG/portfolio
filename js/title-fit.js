function fitTextToSpan() {
    const spans = document.querySelectorAll('.title-fit');

    spans.forEach(span => {
        const spanWidth = span.parentElement.clientWidth * 0.8;
        let fontSize = 1;

        span.style.setProperty('font-size', fontSize + 'px', 'important');
        span.style.whiteSpace = 'nowrap';

        while (span.scrollWidth < spanWidth) {
            fontSize = fontSize + 0.25;
            span.style.setProperty('font-size', fontSize + 'px', 'important');
        }

        if (span.scrollWidth > spanWidth) {
            fontSize = fontSize - 0.25;
            span.style.setProperty('font-size', fontSize + 'px', 'important');
        }
    });
}

window.addEventListener('load', fitTextToSpan);
window.addEventListener('resize', fitTextToSpan);