/*=========================================
    Vijay Multi Specialist Hospital
    Main JavaScript File
==========================================*/

// =============================
// Navbar Shadow on Scroll
// =============================
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

// =============================
// Scroll to Top Button
// =============================

// Create Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Button Style
topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topBtn.style.transition = ".3s";

// Show Button
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Scroll Top
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =============================
// Card Hover Animation
// =============================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// =============================
// Image Fade Animation
// =============================

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.style.opacity = "0";

});

window.addEventListener("load", () => {

    images.forEach((img, index) => {

        setTimeout(() => {

            img.style.transition = "1s";
            img.style.opacity = "1";

        }, index * 200);

    });

});

// =============================
// Scroll Reveal Animation
// =============================

const revealElements = document.querySelectorAll("section");

function reveal() {

    revealElements.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "1s";

        }

    });

}

revealElements.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// =============================
// Current Year in Footer
// =============================

const footer = document.querySelector("footer");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = footer.innerHTML.replace("2026", year);

}

// =============================
// Welcome Message
// =============================

console.log("Welcome to Vijay Multi Specialist Hospital Website");

// =============================
// Appointment Button Alert
// =============================

const appointmentBtns = document.querySelectorAll(".btn-success");

appointmentBtns.forEach(btn => {

    btn.addEventListener("click", function () {

        alert("Redirecting to Appointment Page...");

    });

});