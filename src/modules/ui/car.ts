import { Car } from "../type";
import { Button, createAndAppendElement } from "../util";
import { getRequest } from "../fetch";

const createCar = {
  elements: {
    main: null as HTMLElement | null,
    container: null as HTMLElement | null,
    div: null as HTMLElement | null,
    button: null as HTMLElement | null,
    p: null as HTMLElement | null,
    road: null as HTMLElement | null,
    flag: null as HTMLElement | null,
    pole: null as HTMLElement | null,
    checkered: null as HTMLElement | null,
    car: null as HTMLElement | null,
  },

  init(carName: string, id: string) {
    this.elements.main = document.querySelector("main");
    this.elements.container = createAndAppendElement(
      "div",
      "container car-box"
    );
    this.elements.container.setAttribute("id", `${id}`);
    if (this.elements.main) {
      this.elements.main.appendChild(this.elements.container);
    } else {
      console.error("Not find <main></main>");
    }

    const selectBtn = new Button("select");
    const removeBtn = new Button("remove");
    const aBtn = new Button("start", "lightgreen");
    const bBtn = new Button("stop", "lightyellow");

    const btn = (btn: Button, classAdd: string) => {
      this.elements.button = createAndAppendElement(
        "button",
        `button editor-button ${classAdd}`,
        btn.name
      );
      this.elements.button.style.backgroundColor = btn.color;
      this.elements.container?.appendChild(this.elements.button);
    };

    btn(selectBtn, "select-button");
    btn(removeBtn, "remove-button");
    btn(aBtn, "one-start-button");
    btn(bBtn, "one-stop-button");

    this.elements.p = createAndAppendElement("p", "car-name");
    this.elements.p.textContent = `${carName} #${id}`;
    this.elements.container?.appendChild(this.elements.p);
  },
  road(color: string) {
    this.elements.road = createAndAppendElement("div", "car-road");
    this.elements.container?.appendChild(this.elements.road);

    this.elements.flag = createAndAppendElement("div", "flag");
    this.elements.road?.appendChild(this.elements.flag);
    this.elements.pole = createAndAppendElement("div", "pole");
    this.elements.flag?.appendChild(this.elements.pole);
    this.elements.checkered = createAndAppendElement("div", "checkered");
    this.elements.flag?.appendChild(this.elements.checkered);

    this.elements.car = createAndAppendElement("div", "car");
    this.elements.car.setAttribute("data-color", color);
    this.elements.road?.appendChild(this.elements.car);
    this.elements.div = createAndAppendElement("div", "car-body");
    this.elements.div.style.backgroundColor = color;
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement("div", "car-window");
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement("div", "car-wheel car-front");
    this.elements.div.style.backgroundColor = color;
    this.elements.div.style.filter = "hue-rotate(90deg) invert(70%)";
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement("div", "car-wheel car-rear");
    this.elements.div.style.backgroundColor = color;
    this.elements.div.style.filter = "hue-rotate(90deg) invert(70%)";
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement("div", "car-headlight car-left");
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement(
      "div",
      "car-headlight car-right"
    );
    this.elements.car?.appendChild(this.elements.div);
  },
};
const url = "http://localhost:3000/garage/";

const getCars = (carsPageCount: number) => {
  getRequest("GET", url + `?_page=${carsPageCount}&_limit=7`).then((cars) => {
    cars.forEach((car: Car) => {
      createCar.init(car.name, car.id.toString());
      createCar.road(car.color);
    });
  });
};

export { getCars };
