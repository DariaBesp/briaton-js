export const createCardTemplate = (data, className = " ") => {
  return `<div class="product-card ${className}">
   <div class="product-card__visual">
                  <img class="product-card__img" src="${data.image}" height="436" width="290"
                       alt="Изображение товара">
                  <div class="product-card__more">                 
                    <a href="#" class="product-card__link product-card__link--add btn btn--icon" data-id="${data.id}">                     
                      <span class="btn__text">В корзину</span>
                      <svg width="24" height="24" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-basket"></use>
                      </svg>
                    </a>
                    <a href="#" class="product-card__link btn btn--secondary">
                      <span class="btn__text">Подробнее</span>
                    </a>
                  </div>
                </div>
                <div class="product-card__info">
                  <h2 class="product-card__title">${data.name}</h2>
                  <span class="product-card__old">
                  <span class="product-card__old-number">${data.price.old}</span>
                  <span class="product-card__old-add">₽</span>
                </span>
                  <span class="product-card__price">
                  <span class="product-card__price-number">${data.price.new}</span>
                  <span class="product-card__price-add">₽</span>
                </span>
                  <div class="product-card__tooltip tooltip">
                    <button class="tooltip__btn" aria-label="Показать подсказку">
                      <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-i"></use>
                      </svg>
                    </button>
                    <div class="tooltip__content">
                      <span class="tooltip__text">Наличие товара по городам:</span>
                      <ul class="tooltip__list">
                        <li class="tooltip__item">
                          <span class="tooltip__text">Москва: <span class="tooltip__count">${data.availability.moscow}</span></span>
                        </li>
                        <li class="tooltip__item">
                          <span class="tooltip__text">Оренбург: <span class="tooltip__count">${data.availability.orenburg}</span></span>
                        </li>
                        <li class="tooltip__item">
                          <span class="tooltip__text">Санкт-Петербург: <span class="tooltip__count">${data.availability.saintPetersburg}</span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>           
        </div>
  `;
};
