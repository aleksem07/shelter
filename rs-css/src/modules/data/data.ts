import { Level } from "../types/types";

const level: Level[] = [
  {
    name: "Select the circle",
    answer: "circle",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: `
      <div class="board">
        <circle />
        <circle />
      <div>
      `,
    completed: false,
    board: `
      <tag1/>
      <tag2/>
    `,
  },
  {
    name: "second task",
    answer: "answer second task",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: "htmlViewer",
    completed: false,
    board: `
      <tag1/>
      <tag2/>
    `,
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
    board: `
      <tag1/>
      <tag2/>
    `,
  },
];

export { level };
