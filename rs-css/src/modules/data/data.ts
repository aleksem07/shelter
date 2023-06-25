import { Level } from "../types/types";

const level: Level[] = [
  {
    name: "Select the circle",
    answer: "circle",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: `<div class="board">
        <circle />
        <circle />
        </div>`,
    completed: false,
    board: ["circle", "circle"],
  },
  {
    name: "second task",
    answer: "answer",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: `<div class="board">
        <circle />
        <circle />
        <circle />
        </div>`,
    completed: false,
    board: ["circle", "circle", "circle"],
  },
  {
    name: "third task",
    answer: "answer",
    description:
      "Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",
    example:
      "<strong>#cool</strong> selects any element with <strong>id='cool'</strong>",
    htmlViewer: `<div class="board">
        <square />
        <circle />
        <square />
        </div>`,
    completed: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "four task",
    answer: "answer four task",
    description:
      "Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",
    example:
      "<strong>#cool</strong> selects any element with <strong>id='cool'</strong>",
    htmlViewer: `<div class="board">
        <square />
        <square />
        <square />
        </div>`,
    completed: false,
    board: ["square", "square", "square"],
  },
];

export { level };
