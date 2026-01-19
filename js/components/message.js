export const getMessage = (svg, textH, textP) => {
  const divMesEl = document.createElement("div");
  divMesEl.innerHTML = `
  <div class="message">
    <div class="message__content">
            <button class="message__close" type="button">
            <svg
              class="message__close"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use xlink:href="images/sprite.svg#icon-close"></use>
            </svg>
          </button>
          <div class="message__text-inner">
            <svg
              class="message__icon"
              width="44"
              height="44"
              aria-hidden="true"
            >
              <use xlink:href="images/sprite.svg#${svg}"></use>
            </svg>
            <h3 class="message__title">${textH}</h3>
            <span class="message__span">${textP}</span>
          </div>
        </div>
      </div>
    `;
  document.body.append(divMesEl);

  const btnClose = divMesEl.querySelector(".message__close");
  btnClose.addEventListener("click", () => {
    divMesEl.remove();
  });
};
