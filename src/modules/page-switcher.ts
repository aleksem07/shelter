import { createMain } from "./ui/main";
import { getGarageUI, getWinnersUI } from "./app";

let updateCurrentPage = {};

document.addEventListener("DOMContentLoaded", () => {
  const garage = document.querySelector(".button-garage");
  const winners = document.querySelector(".button-winners");

  if (garage) {
    garage.addEventListener("click", (evt) => {
      evt.preventDefault();
      createMain.clear();
      updateCurrentPage = {
        page: 0,
      };
      localStorage.setItem("currentPage", JSON.stringify(updateCurrentPage));
      getGarageUI();
      location.reload();
    });
  } else {
    console.error("not find garage button");
  }

  if (winners) {
    winners.addEventListener("click", (evt) => {
      evt.preventDefault();
      createMain.clear();

      updateCurrentPage = {
        page: 1,
      };
      localStorage.setItem("currentPage", JSON.stringify(updateCurrentPage));

      getWinnersUI();
    });
  } else {
    console.error("not find winners button");
  }
});
