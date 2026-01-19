import { addToBasket } from "./basket-data.js";
import { createCardTemplate } from "./card-template.js";
import { initTippy } from "../tooltip.js";

export const initSlider = (data) => {
  const dayProducts = document.querySelector(".day-products");
  const dayProductsList = document.querySelector(".day-products__list");
  const filteredData = data.filter((item) => item.goodsOfDay);

  if (!filteredData.length) {
    dayProducts.remove();
  }

  dayProductsList.innerHTML = " ";

  filteredData.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("day-products__item", "swiper-slide");
    li.innerHTML = createCardTemplate(item, "product-card--small");
    dayProductsList.append(li);
    initTippy(item, li);

    li.querySelector(".product-card__link--add").addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        addToBasket(item);
      }
    );
  });
  initSwiper();
};

function initSwiper() {
  const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".day-products__navigation-btn--next",
      prevEl: ".day-products__navigation-btn--prev",
    },
    spaceBetween: 40,
    slidesPerView: 4,
  });
}
