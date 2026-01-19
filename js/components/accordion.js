export const initAccordion = () => {
  const accordionButtons = document.querySelectorAll(".accordion__btn");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activeButton = document.querySelector(".accordion__btn--active");
      if (activeButton) {
        activeButton.classList.remove("accordion__btn--active");
      }
      button.classList.toggle(
        "accordion__btn--active",
        button !== activeButton
      );
    });
  });
};
