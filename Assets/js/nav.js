// creando los selectores
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

const navSlide = () => {
  burger.addEventListener("click", function () {
    // toggle navbar
    nav.classList.toggle("nav-active");

    // animando los links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    // animacion hamburguesa/cruz
    burger.classList.toggle("toggle");
  });
};

navSlide();
