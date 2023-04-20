console.log("header \n sda");

const body = document.querySelector(".page__body");

const header = document.createElement("header");
header.className = "header";

const h1 = document.createElement("h1");
h1.className = "header__title";
h1.textContent = "Virtual keyboard";

const projectDesc = document.createElement("p");
projectDesc.className = "header__desc";
projectDesc.innerHTML =
  "Клавиатура создана в ОС Линукс \n переключение раскладки клавишей CAPS";

const createHeader = () => {
  body.appendChild(header);
  header.appendChild(h1);
  header.appendChild(projectDesc);
};

createHeader();
