const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const intro = document.querySelector(".intro");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.body.classList.toggle("add-space");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    document.body.classList.remove("add-space");
  });
});
