let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navlink-lg");
let brand = document.querySelector(".navbar-brand");
let iconWhite = document.querySelectorAll(".icon-white");
let menu = document.querySelectorAll(".menu");
let dot = document.querySelector(".rounded-circle");
let iconDark = document.querySelectorAll(".icon-dark");
let heroSection = document.querySelector("#home");

window.addEventListener("load",() => {
    ChangeNavbarAppearance();
});

window.addEventListener("scroll",() => {
    ChangeNavbarAppearance();
});

function ChangeNavbarAppearance() {
    if (heroSection.getBoundingClientRect().top <= -100) {
        navbar.classList.add("bg-white");
        navbar.classList.add("shadow-sm");
        brand.classList.replace("text-primary", "text-dark");
        dot.classList.replace("bg-primary", "bg-dark");
        navLinks.forEach(element => {
            element.classList.replace("text-primary", "text-dark");
        });
        iconDark.forEach(i => {
            i.classList.remove("d-none");
        })
        menu[0].classList.add("d-none");
        menu[1].classList.remove("d-none");
        iconWhite.forEach(i => {
            i.classList.add("d-none");
        })
    } 
    else {
        navbar.classList.remove("bg-white");
        navbar.classList.remove("shadow-sm");
        brand.classList.replace("text-dark", "text-primary");
        dot.classList.replace("bg-dark", "bg-primary");
        navLinks.forEach(element => {
            element.classList.replace("text-dark", "text-primary");
        });
        iconDark.forEach(i => {
            i.classList.add("d-none");
        })
        menu[0].classList.remove("d-none");
        menu[1].classList.add("d-none");
        iconWhite.forEach(i => {
            i.classList.remove("d-none");
        })
    }
};
