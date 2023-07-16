import { createMain } from "./ui/main";

const garage = document.querySelector(".button-garage");
const winners = document.querySelector(".button-winners");

garage?.addEventListener("click", (evt) => {
  evt.preventDefault();
  createMain.clear();
  createMain.initGarage();
});

winners?.addEventListener("click", (evt) => {
  evt.preventDefault();
  createMain.clear();
  createMain.initWinners();
});
