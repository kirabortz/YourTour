const header = document.querySelector(".header");
const logo = document.querySelectorAll("#logo_img path");
const selectedVariantTour = document.querySelectorAll(".variant_link");

selectedVariantTour.forEach((elem) => {
  elem.addEventListener("click", () => {
    selectedVariantTour.forEach((item) => {
      item.classList.remove("active");
    });
    elem.classList.add("active");
  });
});
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 450;
  changeClass(header, "scrolled_container_nav_bar", isScrolled);
  logo.forEach((item) => (item.style.fill = isScrolled ? "black" : "white"));
});

const changeClass = (elem, className, isScrolled) => {
  isScrolled ? elem.classList.add(className) : elem.classList.remove(className);
};
