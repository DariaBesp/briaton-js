import { initSlider } from "./slider.js";
import { renderCatalog } from "./catalog.js";

export const initCatalog = () => {
  fetch("./data/data.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      initSlider(data);
      renderCatalog(data);
    });
};
