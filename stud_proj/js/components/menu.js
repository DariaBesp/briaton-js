export const initMenu = () => {
  const mainMenu = document.querySelector(".main-menu");
  const mainMenuOpen = document.querySelector(".header__catalog-btn");
  const mainMenuClose = document.querySelector(".main-menu__close");

  mainMenuOpen.addEventListener("click", () =>
    mainMenu.classList.toggle("main-menu--active")
  );
  mainMenuClose.addEventListener("click", () =>
    mainMenu.classList.toggle("main-menu--active")
  );
};
