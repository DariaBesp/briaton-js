import { initMenu } from "./components/menu.js";
import { initLocation } from "./components/location.js";
import { initAccordion } from "./components/accordion.js";
import { initForm } from "./components/form.js";
import { initCatalog } from "./components/catalog/init-catalog.js";
import { initBasket } from "./components/basket.js";

window.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initBasket();
  initLocation();
  initAccordion();
  initForm();
  initCatalog();
});
