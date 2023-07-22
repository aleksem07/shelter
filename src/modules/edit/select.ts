function updateCar() {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLElement;
    const parentElement = targetElement.parentNode as HTMLElement;
    const carName = parentElement.querySelector(".car-name") as HTMLElement;
    const updateInput = document.querySelector(
      ".update-input"
    ) as HTMLInputElement;
    if (targetElement.classList.contains("select-button")) {
      updateInput.value = `${carName.textContent?.slice(0, -3)}`;
      // location.reload();
    }
  });
}

export { updateCar };
