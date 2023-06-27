import { level } from "./data/data";
import { Level } from "./types/types";
// import { Level } from "./types/types";

const setDataTags = (data: Level[]) => {
  localStorage.setItem("dataLevels", JSON.stringify(data));
};

if (!localStorage.getItem("dataLevels")) {
  setDataTags(level);
}

const getDataTags = () => {
  const getData = localStorage.getItem("dataLevels");
  if (getData) {
    return JSON.parse(getData);
  }
};

console.log(getDataTags());

const clearLocalStorage = () => {
  localStorage.clear();
};

export { setDataTags, getDataTags, clearLocalStorage };
