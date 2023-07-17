const header = document.querySelector(".header");
const logo = document.querySelector(".logo>img");
const selectedVariantTour = document.querySelectorAll(".variant_link");

for (let i = 0; i < selectedVariantTour.length; i++) {
  selectedVariantTour[i].addEventListener("click", () => {
    for (let k = 0; k < selectedVariantTour.length; k++) {
      selectedVariantTour[k].classList.remove("active");
    }
    selectedVariantTour[i].classList.add("active");
  });
}

window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 450;
  changeClass(header, "scrolled_container_nav_bar", isScrolled);
  logo.src = `./img1920/header/YourTour-${isScrolled ? "black" : "white"}.svg`;
});

const changeClass = (elem, className, isScrolled) => {
  isScrolled ? elem.classList.add(className) : elem.classList.remove(className);
};
