let hamburger = document.querySelector(".hamburger");
let nav_items = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_items.classList.toggle("active");
});
