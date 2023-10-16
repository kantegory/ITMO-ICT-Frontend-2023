const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");
const userAccountLink = document.querySelector(".link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  userAccountLink.classList.toggle("active");
});
