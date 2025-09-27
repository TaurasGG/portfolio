function fitTextToSpan() {
    const spans = document.querySelectorAll('.title-fit');

    spans.forEach(span => {
        const spanWidth = span.parentElement.clientWidth * 0.8;
        let fontSize = 10;

        span.style.setProperty('font-size', fontSize + 'px', 'important');
        span.style.whiteSpace = 'nowrap';

        while (span.scrollWidth < spanWidth && fontSize < 300) {
            fontSize++;
            span.style.setProperty('font-size', fontSize + 'px', 'important');
        }

        if (span.scrollWidth > spanWidth) {
            fontSize--;
            span.style.setProperty('font-size', fontSize + 'px', 'important');
        }
    });
}

window.addEventListener('load', fitTextToSpan);
window.addEventListener('resize', fitTextToSpan);