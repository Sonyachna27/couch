document.addEventListener("DOMContentLoaded", function () {

	const htmlElement = document.querySelector("html");

  const burgerMenu = document.querySelector(".burgerBtn");
  const headerNav = document.querySelector(".header__nav");
  const navLinks = document.querySelectorAll("nav a");

  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });
});