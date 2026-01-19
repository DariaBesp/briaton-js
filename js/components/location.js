export const initLocation = () => {
  const locationCity = document.querySelector(".location__city");
  const locationSubList = document.querySelector(".location__sublist");

  locationCity.addEventListener("click", () =>
    locationCity.classList.toggle("location__city--active")
  );

  locationSubList.addEventListener("click", (event) => {
    const target = event.target.closest(".location__sublink");
    if (target) {
      locationCity.textContent = target.textContent;
      locationCity.classList.toggle("location__city--active");
    }
  });
};
