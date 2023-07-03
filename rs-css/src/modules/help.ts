// import { level } from "./data/data";
import { getDataTags, setDataTags } from "./local-storage";

const help = document.querySelector(".task__help") as HTMLAreaElement;
const aside = document.querySelector("aside") as HTMLAreaElement;
const buttonPrev = document.querySelector(
  ".levels-header__prev"
) as HTMLAreaElement;
const buttonNext = document.querySelector(
  ".levels-header__next"
) as HTMLAreaElement;

const level = getDataTags();

const getHelp = (pageCount: number) => {
  help.addEventListener("click", (evt) => {
    if (!aside.querySelector("p")) {
      evt.preventDefault();
      const p = document.createElement("p");
      p.textContent = level[pageCount].answer;
      level[pageCount].help = true;
      setDataTags(level);
      aside.appendChild(p);
    }
  });

  const removeP = () => {
    const p = aside.querySelector("p");
    if (p) {
      p.remove();
    }
  };

  buttonPrev.addEventListener("click", () => {
    removeP();
  });
  buttonNext.addEventListener("click", () => {
    removeP();
  });
};

export { getHelp };
