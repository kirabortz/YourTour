const selectDirection = document.getElementById("direction");
const containerNavBar = document.querySelector(".container_nav_bar");
const logo = document.querySelector(".logo>a>img");
const navBarMenu = document.querySelectorAll(".menu_item");
const navBarTel = document.querySelector(".menu_tel");

selectDirection.addEventListener("change", () => {
  selectDirection.style.color = selectDirection.selectedIndex && "black";
});

window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 450;
  changeClass(containerNavBar, "scrolled_container_nav_bar", isScrolled);
  changeClass(navBarTel, "scrolled_nav_bar_tel", isScrolled);
  logo.src = `/img1920/header/YourTour_${isScrolled ? "black" : "white"}.svg`;
  navBarMenu.forEach((item) => changeClass(item, "scrolled_nav_bar_menu", isScrolled));
});

const changeClass = (elem, className, isScrolled) => {
  isScrolled ? elem.classList.add(className) : elem.classList.remove(className);
};
