import { Level } from "../types/types";

const level: Level[] = [
  {
    name: "Select the circle",
    answer: "circle",
    animation: "circle",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: `
    <circle></circle>
    <circle></circle>
    `,
    completed: false,
    help: false,
    board: ["circle", "circle"],
  },
  {
    name: "Select elements by their type",
    answer: "square",
    animation: "square",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>p</strong> selects all <tag>p</tag> elements.",
    htmlViewer: `
        <square></square>
        <circle></circle>
        <square></square>
        `,
    completed: false,
    help: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "Select the id",
    answer: "#circle",
    animation: "circle-id",
    description:
      "Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",
    example:
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
    htmlViewer: `
    <square id="fancy"/>
    <circle/>
    <square/>
    `,
    completed: false,
    help: false,
    board: ["circle-id", "circle", "square"],
  },
  {
    name: "Select an element inside another element",
    answer: "circle triangle",
    animation: "circle-smallincircle",
    description:
      "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    example:
      "<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>",
    htmlViewer: `
    <square/>
    <circle>
      <triangle/>
    </circle>
    <triangle/>
    `,
    completed: false,
    help: false,
    board: ["square", "circle", "circle-smallincircle", "circle-small"],
  },
];

export { level };
