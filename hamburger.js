const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeIcon = document.getElementById("close-icon");

// otevření menu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// zavření menu
closeIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
