import { getRequest, urlWinners } from "../fetch";
import { WinnerCar } from "../type";
import { createAndAppendElement } from "../util";

const createWinner = {
  elements: {
    main: null as HTMLElement | null,
    container: null as HTMLElement | null,
    div: null as HTMLElement | null,
    p: null as HTMLElement | null,
  },

  init(
    number: string,
    color: string,
    name: string,
    winsCount: string,
    bestTime: string
  ) {
    this.elements.main = document.querySelector("main");
    this.elements.container = createAndAppendElement(
      "div",
      "container winner-box"
    );
    if (this.elements.main) {
      this.elements.main.appendChild(this.elements.container);
    } else {
      console.error("Not find <main></main>");
    }

    this.elements.p = createAndAppendElement("p", "winner-data");
    this.elements.p.textContent = `${number}`;
    this.elements.container?.appendChild(this.elements.p);
    this.elements.p = createAndAppendElement("p", "winner-data");
    this.elements.p.textContent = `${color}`;
    this.elements.p.style.backgroundColor = `${color}`;
    this.elements.container?.appendChild(this.elements.p);
    this.elements.p = createAndAppendElement("p", "winner-data");
    this.elements.p.textContent = `${name}`;
    this.elements.container?.appendChild(this.elements.p);
    this.elements.p = createAndAppendElement("p", "winner-data");
    this.elements.p.textContent = `${winsCount}`;
    this.elements.container?.appendChild(this.elements.p);
    this.elements.p = createAndAppendElement("p", "winner-data");
    this.elements.p.textContent = `${bestTime}`;
    this.elements.container?.appendChild(this.elements.p);
  },
};

const getWinners = (carsPageCount: number) => {
  getRequest("GET", urlWinners + `?_page=${carsPageCount}&_limit=10`)
    .then((data) => data.sort((a: WinnerCar, b: WinnerCar) => a.time - b.time))
    .then((winners) => {
      winners.forEach((winner: WinnerCar, index: number) => {
        const color = Object.prototype.hasOwnProperty.call(winner, "color")
          ? winner.color
          : "darkgrey";
        const name = Object.prototype.hasOwnProperty.call(winner, "name")
          ? winner.name
          : "NoName";

        createWinner.init(
          (index + 1).toString(),
          color,
          name,
          winner.winsCount.toString(),
          `${winner.time} sec`
        );
      });
    });
};

export { createWinner, getWinners };
