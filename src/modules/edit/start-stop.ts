function startOneCar() {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLElement;
    const parenElement = targetElement.parentNode as HTMLElement;
    const car = parenElement.querySelector(".car") as HTMLElement;
    const stopLight = car?.querySelector(".car-left") as HTMLElement;
    const firstLight = car?.querySelector(".car-right") as HTMLElement;

    if (targetElement.classList.contains("one-start-button")) {
      car.classList.add("car-start");
      stopLight.classList.add("car-left-light");
      firstLight.classList.add("car-right-light");
    }
    if (targetElement.classList.contains("one-stop-button")) {
      if (car.classList.contains("car-start")) {
        car.classList.remove("car-start");
      }
      if (stopLight.classList.contains("car-left-light")) {
        stopLight.classList.remove("car-left-light");
      }
      if (firstLight.classList.contains("car-right-light")) {
        firstLight.classList.remove("car-right-light");
      }
    }
  });
}

export { startOneCar };
