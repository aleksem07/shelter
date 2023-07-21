import { deleteOneCar, deleteAllCar } from "../fetch";
import { createMain } from "./../ui/main";
import { getGarageUI } from "./../app";

setTimeout(() => {
  const removeBtn = document.querySelectorAll(".remove-button");
  console.log(removeBtn);
  removeBtn.forEach((removeBtn, index) => {
    removeBtn.addEventListener("click", () => {
      console.log(index);
      deleteOneCar(index);
      createMain.clear();
      getGarageUI();
    });
  });

  const dontTouch = document.querySelector(".dont-touch");
  console.log(dontTouch);
  if (dontTouch) {
    dontTouch.addEventListener("click", () => deleteAllCar());
  } else {
    console.log("not found dontTouch button");
  }
}, 100);
