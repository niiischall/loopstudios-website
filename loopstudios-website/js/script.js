const menuBtn = document.getElementById("menu-btn");
const menuBanner = document.getElementById("menu-banner");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuBanner.classList.toggle("show-banner");
});
