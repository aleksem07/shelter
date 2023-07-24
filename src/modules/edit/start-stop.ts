import { createAndAppendElement } from "./../ui/util";
import { BestTimeEntry, WinnerCar } from "./../type";
import { sendRequest, urlWinners } from "../fetch";

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
      targetElement.disabled = true;
      await toggleEngine(id, startStatus);
      time = +(time / 1000).toFixed(2);

      car.style.transition = `all ${time}s ease-out`;
      toggleCarEngine(car, stopLight, firstLight, true);
    }
    if (targetElement.classList.contains("one-stop-button")) {
      const startButton =
        targetElement.previousElementSibling as HTMLButtonElement;
      startButton.disabled = false;
      car.style.transition = `all 0s ease-out`;
      toggleCarEngine(car, stopLight, firstLight, false);
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
      const startButton =
        targetElement.previousElementSibling as HTMLButtonElement;
      startButton.disabled = false;
      cars.forEach((car) => {
        (car as HTMLElement).style.transition = `all 0s ease-out`;
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

const startAllCar = () => {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLInputElement;
    let bestTime: BestTimeEntry[] = [];
    if (targetElement.classList.contains("start-button")) {
      targetElement.disabled = true;
      const cars = document.querySelectorAll(".car");

      await cars.forEach(async (car) => {
        car.classList.add("car-motor");
        const carParent = car.parentElement?.parentElement;
        const nameElement = carParent?.querySelector(".car-name");
        const name = nameElement?.textContent || "";
        const id = Number(carParent?.getAttribute("id"));
        const color = car.getAttribute("data-color") || "";
        await toggleEngine(id, startStatus);
        time = +(time / 1000).toFixed(2);
        bestTime.push({ time, name, color });
        await setCarTransition(car as HTMLElement, time);
        const stopLight = car.querySelector(".car-left") as HTMLElement;
        const firstLight = car.querySelector(".car-right") as HTMLElement;
        toggleCarEngine(car as HTMLElement, stopLight, firstLight, true);
      });
      setTimeout(() => {
        const sortedBestTime = bestTime.sort((a, b) => a.time - b.time);
        const winner = sortedBestTime[0];
        const time = winner ? winner.time : 10;
        const name = winner ? winner.name : "CarName";
        const color = winner ? winner.color : "grey";
        modalWinner(name, time);
        winnerPost(name, time, color);
        setTimeout(() => {
          const modal = document.querySelector(".modal-container");
          bestTime = [];
          modal?.remove();
        }, 6000);
      }, 1500);
    }
  });
};

const winnerPost = async (name: string, time: number, color: string) => {
  const body: WinnerCar = {
    name,
    time,
    color,
  };
  await sendRequest("POST", urlWinners, body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
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
