export const initBasket = () => {
  document
    .querySelector(".header__user-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".basket").classList.toggle("basket--active");
    });
};
