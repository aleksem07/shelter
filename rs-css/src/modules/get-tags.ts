import { level } from "./data/data";
import { Board } from "./types/types";
//table
const table = document.querySelector(".task__table") as HTMLElement;
const htmlDisabled = document.querySelector(".html__disabled--start");

const tagsArr: Board[] = [];
level.map((i) => tagsArr.push(i.board));

const addTagsOnTable = (pageCount: number) => {
  tagsArr[pageCount].map((i) => {
    const div = document.createElement("div");
    div.className = i;

    if (div.classList.contains(level[pageCount].answer)) {
      div.classList.add("anima");
    }
    table.appendChild(div);
  });
  if (htmlDisabled) {
    htmlDisabled.innerHTML = "";
    htmlDisabled.insertAdjacentHTML("afterbegin", level[pageCount].htmlViewer);
    const child = document.querySelector(".html__disabled--start");
    if (child) {
      for (let i = 0; i < child.children.length; i++) {
        child.children[i].textContent = child.children[i].outerHTML;
      }
    }
  }
};

const clearTagsOnTable = () => {
  table.innerHTML = "";
};

export { addTagsOnTable, clearTagsOnTable };
