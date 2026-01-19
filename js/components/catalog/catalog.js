import { createCardTemplate } from "./card-template.js";
import { filterData } from "./filter.js";
import { sortData } from "./sort.js";
import { prepareFilters } from "./prepare-filters.js";
import { addToBasket } from "./basket-data.js";
import { initTippy } from "../tooltip.js";

const catalogListEl = document.querySelector(".catalog__list");
const selectForm = document.querySelector(".catalog__sort-select");
const catalogForm = document.querySelector(".catalog-form");
const catalogPagination = document.querySelector(".catalog__pagination");

export const renderCatalogList = (data) => {
  catalogListEl.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("catalog__item");
    li.innerHTML = createCardTemplate(item);
    catalogListEl.append(li);
    initTippy(item, li);

    li.querySelector(".product-card__link--add").addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        addToBasket(item);
      }
    );
  });
};

//отрисовка (без пагинации) - renderCatalogList
//отрисовка с пагинацией - renderPagination

export const renderPagination = (data) => {
  catalogPagination.innerHTML = "";
  const maxCards = 6; //Можно вынести в аргумент функции
  const totalPages = Math.ceil(data.length / maxCards);

  let currentPage = 1;

  //функция - отрисовка страницы
  function renderPage(page) {
    const start = (page - 1) * maxCards;
    const end = start + maxCards;
    const arrPagination = data.slice(start, end);

    renderCatalogList(arrPagination);
  }

  //отрисовка кнопок/цифр
  for (let i = 1; i <= totalPages; i++) {
    const itemPagination = document.createElement("li");
    itemPagination.classList.add("catalog__pagination-item");
    itemPagination.innerHTML = `<button class="catalog__pagination-link">${i}</button>`;

    itemPagination
      .querySelector(".catalog__pagination-link")
      .addEventListener("click", () => {
        currentPage = i;
        renderPage(i);
      });

    catalogPagination.append(itemPagination);
  }

  renderPage(currentPage);
};

//Отрисовка каталога и всего остального
export const renderCatalog = (data) => {
  prepareFilters(data);
  const filteredData = data.filter(filterData).sort(sortData);
  //renderCatalogList(filteredData);
  renderPagination(filteredData);

  selectForm.addEventListener("change", () => {
    const filteredData = data.filter(filterData).sort(sortData);
    // renderCatalogList(filteredData);
    renderPagination(filteredData);
  });

  catalogForm.addEventListener("change", () => {
    const filteredData = data.filter(filterData).sort(sortData);
    // renderCatalogList(filteredData);
    renderPagination(filteredData);
  });

  catalogForm.addEventListener("reset", () => {
    setTimeout(() => {
      const filteredData = data.filter(filterData).sort(sortData);
      //  renderCatalogList(filteredData);
      renderPagination(filteredData);
    });
  });
};
