const headerBlock = document.querySelector(".header-block");
const logo = document.querySelectorAll("#logo-img path");
const selectedVariantTour = document.querySelectorAll(".h-menu__link");
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
  changeClass(headerBlock, "scrolled-nav", isScrolled);
  logo.forEach((item) => (item.style.fill = isScrolled ? "black" : "white"));
});

const changeClass = (elem, className, isScrolled) => {
  isScrolled ? elem.classList.add(className) : elem.classList.remove(className);
};
