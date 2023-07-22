const startStatus = "started";
const stopStatus = "stopped";
let time = 60;

const toggleEngine = async (id: number, status: string) => {
  try {
    const response = await fetch(
      "http://localhost:3000/engine?id=" + id + "&status=" + status,
      {
        method: "PATCH",
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      const velocity = data.velocity;
      const distance = data.distance;
      time = distance / velocity;
    } else if (response.status === 400) {
      const errorData = await response.json();
      console.error("Error:", errorData);
    } else if (response.status === 404) {
      console.error("Car not found.");
    } else if (response.status === 500) {
      console.error("Car engine is broken down.");
    } else {
      console.error("Unexpected error:", response);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const disableButtonTimer = (el: HTMLInputElement, sec: number) => {
  el.disabled = true;
  setTimeout(() => {
    el.disabled = false;
  }, sec);
};

const startOneCar = () => {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLInputElement;
    const parenElement = targetElement.parentNode as HTMLElement;
    const car = parenElement.querySelector(".car") as HTMLElement;
    const stopLight = car?.querySelector(".car-left") as HTMLElement;
    const firstLight = car?.querySelector(".car-right") as HTMLElement;
    const id = Number(parenElement.getAttribute("id"));

    if (targetElement.classList.contains("one-start-button")) {
      car.classList.add("car-motor");
      stopLight.classList.add("car-left-light");
      firstLight.classList.add("car-right-light");
      disableButtonTimer(targetElement, 5000);
      const carId = id;
      await toggleEngine(carId, startStatus);
      time = +(time / 1000).toFixed(2);

      car.style.transition = `all ${time}s ease-out`;
      car.classList.add("car-start");
    }
    if (targetElement.classList.contains("one-stop-button")) {
      disableButtonTimer(targetElement, 5000);
      car.style.transition = `all 1s ease-out`;
      if (
        car.classList.contains("car-start") &&
        car.classList.contains("car-motor") &&
        stopLight.classList.contains("car-left-light") &&
        firstLight.classList.contains("car-right-light")
      ) {
        car.classList.remove("car-start");
        car.classList.remove("car-motor");
        stopLight.classList.remove("car-left-light");
        firstLight.classList.remove("car-right-light");
      }
      const carId = id;
      toggleEngine(carId, stopStatus);
    }
  });
};

export { startOneCar };
