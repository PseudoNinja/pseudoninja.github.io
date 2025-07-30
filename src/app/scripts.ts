document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(
        ".nav-toggle"
    ) as HTMLButtonElement | null;
    const navMenu = document.querySelector(
        ".nav-menu"
    ) as HTMLDivElement | null;

    if (toggleButton && navMenu) {
        toggleButton.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    } else {
        console.warn("Navigation toggle or menu not found");
    }
});
