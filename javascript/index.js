const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

const spans = document.querySelectorAll(".word span");

spans.forEach((span, idx) => {
  span.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });
  span.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });

  // Initial animation
  setTimeout(() => {
    span.classList.add("active");
  }, 750 * (idx + 1));
});
