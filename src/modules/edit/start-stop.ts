import { createAndAppendElement } from "./../ui/util";
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

const toggleCarEngine = (
  car: Element,
  stopLight: HTMLElement,
  firstLight: HTMLElement,
  start: boolean
) => {
  if (start) {
    car.classList.add("car-motor", "car-start");
    stopLight.classList.add("car-left-light");
    firstLight.classList.add("car-right-light");
  } else {
    car.classList.remove("car-start", "car-motor");
    stopLight.classList.remove("car-left-light");
    firstLight.classList.remove("car-right-light");
  }
};

const setCarTransition = (car: HTMLElement, timeInSeconds: number) => {
  car.style.transition = `all ${timeInSeconds}s ease-out`;
};

const startAndStopOneCar = () => {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLInputElement;
    const parenElement = targetElement.parentNode as HTMLElement;
    const car = parenElement.querySelector(".car") as HTMLElement;
    const stopLight = car?.querySelector(".car-left") as HTMLElement;
    const firstLight = car?.querySelector(".car-right") as HTMLElement;
    const id = Number(parenElement.getAttribute("id"));

    if (targetElement.classList.contains("one-start-button")) {
      disableButtonTimer(targetElement, 5000);
      await toggleEngine(id, startStatus);
      time = +(time / 1000).toFixed(2);

      car.style.transition = `all ${time}s ease-out`;
      toggleCarEngine(car, stopLight, firstLight, true);
    }
    if (targetElement.classList.contains("one-stop-button")) {
      car.style.transition = `all 1s ease-out`;
      toggleCarEngine(car, stopLight, firstLight, false);
      disableButtonTimer(targetElement, 5000);
      const carId = id;
      await toggleEngine(carId, stopStatus);
    }
  });
};

const stopAllCar = () => {
  document.addEventListener("click", (evt) => {
    const targetElement = evt.target as HTMLInputElement;

    if (targetElement.classList.contains("reset-button")) {
      const cars = document.querySelectorAll(".car");

      cars.forEach((car) => {
        (car as HTMLElement).style.transition = `all 1s ease-out`;
        const carParent = car.parentElement?.parentElement;
        const id = Number(carParent?.getAttribute("id"));
        const stopLight = car.querySelector(".car-left") as HTMLElement;
        const firstLight = car.querySelector(".car-right") as HTMLElement;
        toggleCarEngine(car, stopLight, firstLight, false);
        toggleEngine(id, stopStatus);
      });
    }
  });
};

interface BestTimeEntry {
  time: number;
  name: string;
}

const startAllCar = () => {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLInputElement;

    let bestTime: BestTimeEntry[] = [];
    if (targetElement.classList.contains("start-button")) {
      const cars = document.querySelectorAll(".car");

      cars.forEach(async (car) => {
        const carParent = car.parentElement?.parentElement;
        const nameElement = carParent?.querySelector(".car-name");
        const name = nameElement?.textContent || "";

        const id = Number(carParent?.getAttribute("id"));
        disableButtonTimer(targetElement, 3000);
        await toggleEngine(id, startStatus);
        time = +(time / 1000).toFixed(2);

        bestTime.push({ time, name });
        await setCarTransition(car as HTMLElement, time);
        const stopLight = car.querySelector(".car-left") as HTMLElement;
        const firstLight = car.querySelector(".car-right") as HTMLElement;
        toggleCarEngine(car as HTMLElement, stopLight, firstLight, true);
      });
      setTimeout(() => {
        const time = bestTime.sort((a, b) => a.time - b.time)[0].time;
        const name = bestTime.sort((a, b) => a.time - b.time)[0].name;
        modalWinner(name, time);
        setTimeout(() => {
          const modal = document.querySelector(".modal-container");
          bestTime = [];
          modal?.remove();
        }, 3500);
      }, 5000);
    }
  });
};

const modalWinner = (name: string, time: number) => {
  const main = document.querySelector("main");
  const modalContainer = createAndAppendElement("div", "modal-container");
  const modalText = createAndAppendElement("p", "modal-text");
  modalText.textContent = `Winner ${time}s ${name}`;
  if (modalContainer.classList.contains("visually-hidden")) {
    modalContainer.classList.remove("visually-hidden");
  }
  modalContainer.appendChild(modalText);
  if (main) {
    main.appendChild(modalContainer);
  } else {
    console.log("main is not found");
  }
};

export { startAndStopOneCar, startAllCar, stopAllCar };
