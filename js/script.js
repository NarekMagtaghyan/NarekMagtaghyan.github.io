window.addEventListener('DOMContentLoaded', () => {
    const menuWrapper = document.querySelector(".menu-icon-wrapper"),
        menuIcon = document.querySelector(".menu-icon"),
        navHolder = document.querySelector(".nav__list-holder");

    menuWrapper.addEventListener("click", () => {
        menuIcon.classList.toggle("menu-icon-active");
        navHolder.classList.toggle("nav__list-holder--visible");

        if (document.querySelector("body").style.overflow !== "hidden") {
            document.querySelector("body").style.overflow = "hidden";
        } else {
            document.querySelector("body").style.overflow = "auto";
        }
    });
});