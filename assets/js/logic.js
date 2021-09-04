const menuNavEl = document.querySelector("#navbarMenu");
const burgerNavEl = document.querySelector("#navbarBurger");
const aboutEl = document.querySelector("#about-link");
const portfolioEl = document.querySelector("#portfolio-link");
const contactEl = document.querySelector("#contact-link");

let toggleMenu = (event) => {
  if (event.target === burgerNavEl) {
    event.preventDefault();
  }
  menuNavEl.classList.toggle("is-active");
};

burgerNavEl.onclick = toggleMenu;
aboutEl.onclick = toggleMenu;
portfolioEl.onclick = toggleMenu;
contactEl.onclick = toggleMenu;