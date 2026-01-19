import { createBasketTemplate } from "./basket-template.js";

const basketList = document.querySelector(".basket__list");
const basketUserCount = document.querySelector(".header__user-count");

let counter = 0;

export const addToBasket = (data) => {
  counter += 1;
  basketUserCount.textContent = counter;
  const basketItem = document.createElement("li");
  document.querySelector(".basket__empty-block").style.display =
    counter > 0 ? "none" : "block";

  basketItem.classList.add("basket__item");
  basketItem.innerHTML = createBasketTemplate(data);
  basketList.append(basketItem);

  basketItem
    .querySelector(".basket__item-close")
    .addEventListener("click", () => {
      basketItem.remove();
      counter -= 1;
      basketUserCount.textContent = counter;
      document.querySelector(".basket__empty-block").style.display =
        counter > 0 ? "none" : "block";
    });
};
