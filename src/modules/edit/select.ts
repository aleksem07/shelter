function updateCar() {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLElement;
    const parenElement = targetElement.parentNode as HTMLElement;
    if (targetElement.classList.contains("select-button")) {
      // await deleteCar(Number(parenElement.getAttribute("id")));
      console.log(parenElement);
      location.reload();
    }
  });
}

export { updateCar };
