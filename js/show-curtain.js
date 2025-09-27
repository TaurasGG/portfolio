document.addEventListener("DOMContentLoaded", () => {
    const curtains = document.querySelectorAll(".curtain");

    // Restore last opened curtain from localStorage
    const openId = localStorage.getItem("curtain-open");
    if (openId) {
        const curtain = document.getElementById(openId);
        if (curtain) {
            showCurtain(curtain, false); // don't overwrite storage again
        }
    }

    // Bind show buttons
    document.querySelectorAll(".button[id^='show-']").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.id.replace("show-", "");
            const curtain = document.getElementById(targetId);
            if (curtain) {
                // close any other open curtain first
                const active = document.querySelector(".curtain.active");
                if (active && active !== curtain) {
                    hideCurtain(active);
                }
                showCurtain(curtain);
                localStorage.setItem("curtain-open", targetId);
            }
        });
    });

    // Bind close buttons and background clicks
    curtains.forEach(curtain => {
        const closeBtn = curtain.querySelector(".close");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                hideCurtain(curtain);
                localStorage.removeItem("curtain-open");
            });
        }

        // Close when clicking outside the content
        curtain.addEventListener("click", e => {
            if (e.target === curtain) {
                hideCurtain(curtain);
                localStorage.removeItem("curtain-open");
            }
        });
    });

    // Close with ESC key
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            const activeCurtain = document.querySelector(".curtain.active");
            if (activeCurtain) {
                hideCurtain(activeCurtain);
                localStorage.removeItem("curtain-open");
            }
        }
    });

    function showCurtain(curtain, save = true) {
        curtain.hidden = false;
        requestAnimationFrame(() => {
            curtain.classList.add("active");
        });
        document.body.style.overflow = "hidden"; // prevent background scroll
        if (save) {
            localStorage.setItem("curtain-open", curtain.id);
        }
    }

    function hideCurtain(curtain) {
        curtain.classList.remove("active");
        document.body.style.overflow = "";
        curtain.addEventListener("transitionend", () => {
            curtain.hidden = true;
        }, { once: true });
    }
});