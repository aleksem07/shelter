import { createAndAppendElement } from "../util";
import { getRequest, url, urlWinners } from "../fetch";

const createMain = {
  elements: {
    body: document.querySelector("body"),
    main: null as HTMLElement | null,
    button: null as HTMLElement | null,
    buttonPrev: null as HTMLElement | null,
    buttonNext: null as HTMLElement | null,
    h1: null as HTMLElement | null,
    div: null as HTMLElement | null,
    p: null as HTMLElement | null,
  },

  initMain() {
    this.elements.main = createAndAppendElement("main", "main");
    this.elements.body?.appendChild(this.elements.main);
  },

  async initGarage(pageCount: number) {
    let carsAll = 0;
    await getRequest("GET", url).then((data) => {
      return (carsAll = data.length);
    });
    //name
    this.elements.h1 = createAndAppendElement("h1", "garage-title");
    this.elements.h1.textContent = "My Garage";
    this.elements.main?.appendChild(this.elements.h1);
    //container car/page counter
    this.elements.div = createAndAppendElement(
      "div",
      "garage-counter-container"
    );
    this.elements.main?.appendChild(this.elements.div);
    this.elements.buttonPrev = createAndAppendElement(
      "button",
      "button button-prev"
    );
    this.elements.buttonPrev.textContent = "<";
    this.elements.div?.appendChild(this.elements.buttonPrev);
    //page numb
    this.elements.p = createAndAppendElement("p", "page-number");
    this.elements.p.textContent = `Page number ${pageCount}`;
    this.elements.div?.appendChild(this.elements.p);
    this.elements.buttonNext = createAndAppendElement(
      "button",
      "button button-next"
    );
    this.elements.buttonNext.textContent = ">";
    this.elements.div?.appendChild(this.elements.buttonNext);
    //all count car in base
    this.elements.p = createAndAppendElement("p", "database-counter");
    this.elements.p.textContent = `All cars ${carsAll}`;
    this.elements.div?.appendChild(this.elements.p);
  },

  async initWinners(pageCount: number) {
    let winnersAll = 0;
    await getRequest("GET", urlWinners).then((data) => {
      return (winnersAll = data.length);
    });
    //name
    this.elements.h1 = createAndAppendElement("h1", "garage-title");
    this.elements.h1.textContent = "Winners";
    this.elements.main?.appendChild(this.elements.h1);

    //container car/page counter
    this.elements.div = createAndAppendElement(
      "div",
      "garage-counter-container"
    );
    this.elements.main?.appendChild(this.elements.div);
    this.elements.buttonPrev = createAndAppendElement(
      "button",
      "button button-prev"
    );
    this.elements.buttonPrev.textContent = "<";
    this.elements.div?.appendChild(this.elements.buttonPrev);
    //page numb
    this.elements.p = createAndAppendElement("p", "page-number");
    this.elements.p.textContent = `Page number ${pageCount}`;
    this.elements.div?.appendChild(this.elements.p);

    this.elements.buttonNext = createAndAppendElement(
      "button",
      "button button-next"
    );
    this.elements.buttonNext.textContent = ">";
    this.elements.div?.appendChild(this.elements.buttonNext);
    //all count car in base
    this.elements.p = createAndAppendElement("p", "database-counter");
    this.elements.p.textContent = `All winners ${winnersAll}`;
    this.elements.div?.appendChild(this.elements.p);
  },

  clear() {
    if (this.elements.main) {
      this.elements.main.innerHTML = "";
    }
  },
};

export { createMain };
