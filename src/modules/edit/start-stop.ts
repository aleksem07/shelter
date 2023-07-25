import { createAndAppendElement, patchEngine } from "../util";
import { BestTimeEntry, WinnerCar } from "./../type";
import { sendRequest, getRequest, urlWinners } from "../fetch";

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

let isRaceFinished = false;

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
      isRaceFinished = false;
    }
  });
};

const startCarEngine = async (car: Element): Promise<BestTimeEntry> => {
  let id = -1;
  try {
    car.classList.add("car-motor");
    const stopLight = car?.querySelector(".car-left") as HTMLElement;
    const firstLight = car?.querySelector(".car-right") as HTMLElement;
    const carParent = car.parentElement?.parentElement;
    id = Number(carParent?.getAttribute("id"));
    const color = car.getAttribute("data-color") || "";

    const nameElement = carParent?.querySelector(".car-name");
    const name = nameElement?.textContent || "";
    await toggleEngine(id, startStatus);
    time = +(time / 2500).toFixed(2);
    (car as HTMLElement).style.transition = `all ${time}s ease-out`;
    await toggleCarEngine(car, stopLight, firstLight, true);
    await patchEngine(id, "drive");
    return { time, name, color };
  } catch (error) {
    console.log("двигатель сломался");
    const carParent = car.parentElement?.parentElement;
    const nameElement = carParent?.querySelector(".car-name");
    const name = nameElement?.textContent || "";
    const stopLight = car?.querySelector(".car-left") as HTMLElement;
    const firstLight = car?.querySelector(".car-right") as HTMLElement;
    toggleCarEngine(car as HTMLElement, stopLight, firstLight, false);
    if (id !== -1) {
      toggleEngine(id, stopStatus);
    }
    return { time, name: `${name}`, color: "" };
  }
};

const startAllCar = () => {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLInputElement;
    if (targetElement.classList.contains("start-button") && !isRaceFinished) {
      targetElement.disabled = true;
      isRaceFinished = true;
      const cars = document.querySelectorAll(".car");
      const promises: Promise<BestTimeEntry>[] = [];
      cars.forEach(async (car) => {
        const promise = startCarEngine(car);
        await promises.push(promise);
      });
      try {
        const results = await Promise.all(promises);
        let winner = results.reduce((minTimeCar, car) => {
          return car.time < minTimeCar.time ? car : minTimeCar;
        });

        if (winner.time === 0) {
          winner = results.find((car) => car.time !== 0) || winner;
        }

        const time = winner.time;
        const name = winner.name || "CarName";
        const color = winner.color || "grey";
        await winnerPost(name, time, color);
        modalWinner(name, time, color);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        const modal = document.querySelector(".modal-container");
        if (modal) {
          modal.remove();
        }
      }, 1000);
    }
  });
};

const winnerPost = async (
  name: string,
  time: number,
  color: string,
  winsCount = 1
) => {
  const body: WinnerCar = {
    name,
    time,
    color,
    winsCount,
  };

  try {
    const getData: WinnerCar[] = await getRequest("GET", urlWinners);
    const existingWinnerName = getData.findIndex((item) => item.name === name);

    if (existingWinnerName !== -1) {
      const existingWinner = getData[existingWinnerName];
      const id = existingWinner.id;
      if (time < existingWinner.time) {
        existingWinner.time = time;
        existingWinner.winsCount += 1;
        const updateData = await sendRequest(
          "PUT",
          urlWinners + id,
          existingWinner
        );
        console.log("Record updated:", updateData);
      } else {
        console.log("time is not faster");
      }
    } else {
      const setData = await sendRequest("POST", urlWinners, body);
      console.log("added:", setData);
    }
  } catch (err) {
    console.log(err);
  }
};

const modalWinner = (name: string, time: number, color: string) => {
  console.log(color);
  const main = document.querySelector("main");
  const modalContainer = createAndAppendElement("div", "modal-container");
  const modalText = createAndAppendElement("p", "modal-text");
  if (time === 0) {
    modalText.textContent = `Winner: No working cars found. Please press RESET.`;
  } else {
    modalText.textContent = `Winner ${time}s ${name}`;
  }
  modalContainer.appendChild(modalText);
  if (main) {
    main.appendChild(modalContainer);
  } else {
    console.log("main is not found");
  }
};

export { startAndStopOneCar, startAllCar, stopAllCar };
