export const initTippy = (item, card) => {
  const tooltipBtn = card.querySelector(".tooltip__btn");

  tippy(tooltipBtn, {
    allowHTML: true,
    content: `<span class="tooltip__text"
                          >Наличие товара по городам:</span
                        >
                        <ul class="tooltip__list">
                          <li class="tooltip__item">
                            <span class="tooltip__text"
                              >Москва:
                              <span class="tooltip__count">${item.availability.moscow}</span></span
                            >
                          </li>
                          <li class="tooltip__item">
                            <span class="tooltip__text"
                              >Оренбург:
                              <span class="tooltip__count"> ${item.availability.orenburg}</span></span
                            >
                          </li>
                          <li class="tooltip__item">
                            <span class="tooltip__text"
                              >Санкт-Петербург:
                              <span class="tooltip__count">${item.availability.saintPetersburg}</span></span
                            >
                          </li>
                        </ul>
  `,
  });
};
