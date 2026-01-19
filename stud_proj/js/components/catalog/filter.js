const catalogForm = document.querySelector(".catalog-form");

const filterByStatus = ({ availability }) => {
  const formRadio = catalogForm.querySelector(".custom-radio__field:checked");
  if (formRadio && formRadio.value === "instock") {
    return (
      availability.moscow ||
      availability.orenburg ||
      availability.saintPetersburg
    );
  }
  return true;
};

const filterByType = ({ type }) => {
  const formCheckboxes = document.querySelectorAll(
    ".custom-checkbox__field:checked"
  );
  if (formCheckboxes.length) {
    return Array.from(formCheckboxes).some((item) => type.includes(item.value));
  }
  return true;
};

export const filterData = (item) => filterByStatus(item) && filterByType(item);
