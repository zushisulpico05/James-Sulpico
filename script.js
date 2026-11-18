
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

// Mobile navigation
menu.addEventListener("click", function() {
    nav.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        nav.classList.remove("active");
    });
});
