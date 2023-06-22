import { level } from "./data/data";
import { Board } from "./types/types";
//table
const table = document.querySelector(".task__table") as HTMLElement;

const tagsArr: Board[] = [];
level.map((i) => tagsArr.push(i.board));

const addTagsOnTable = (pageCount: number) => {
  tagsArr[pageCount].map((i) => {
    const div = document.createElement("div");
    div.className = i;
    table.appendChild(div);
  });
};

const clearTagsOnTable = () => {
  table.innerHTML = "";
};

export { addTagsOnTable, clearTagsOnTable };
