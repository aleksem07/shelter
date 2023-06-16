import { Level } from "../types/types";

const level: Level[] = [
  {
    name: "first task",
    answer: "answer first task",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: "htmlViewer",
    completed: false,
  },
  {
    name: "second task",
    answer: "answer second task",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: "htmlViewer",
    completed: false,
  },
  {
    name: "third task",
    answer: "answer third task",
    description:
      "Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",
    example:
      "<strong>#cool</strong> selects any element with <strong>id='cool'</strong>",
    htmlViewer: "htmlViewer",
    completed: false,
  },
];

export { level };

console.log(level);
