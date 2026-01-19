const selectForm = document.querySelector(".catalog__sort-select");

export const sortData = (a, b) => {
  let selectValue = selectForm.value;

  if (selectValue === "price-min") {
    return Number(a.price.new) - Number(b.price.new);
  }
  if (selectValue === "price-max") {
    return Number(b.price.new) - Number(a.price.new);
  }
  if (selectValue === "rating-max") {
    return Number(b.rating) - Number(a.rating);
  }
};
