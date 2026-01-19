const filterData = ["pendant", "ceiling", "overhead", "point", "nightlights"];
const checkBoxes = document.querySelectorAll(".custom-checkbox__count");

export const prepareFilters = (data) => {
  checkBoxes.forEach((span, i) => {
    span.textContent = data.filter((item) =>
      item.type.includes(filterData[i])
    ).length;
  });
};
