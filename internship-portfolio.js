const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const darkToggle = document.getElementById("dark-toggle");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
