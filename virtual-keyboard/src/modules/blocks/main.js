console.log("main");

const body = document.querySelector(".page__body");

const main = document.createElement("main");
main.className = "main";

const screen = document.createElement("div");
screen.className = "screen";
const cursor = document.createElement("p");
cursor.textContent = "|";
cursor.className = "screen__cursor";

const keyboard = document.createElement("div");
keyboard.className = "keyboard";

const createMain = () => {
  body.appendChild(main);

  main.appendChild(screen);
  screen.appendChild(cursor);
  main.appendChild(keyboard);
};

createMain();
