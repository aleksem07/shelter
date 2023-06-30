import { Level } from "../types/types";

const level: Level[] = [
  {
    name: "Select the circle",
    answer: "circle",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: `
    <circle></circle>
    <circle></circle>
    `,
    completed: false,
    board: ["circle", "circle"],
  },
  {
    name: "second task",
    answer: "square",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>p</strong> selects all <tag>p</tag> elements.",
    htmlViewer: `
        <square></square>
        <circle></circle>
        <square></square>
        `,
    completed: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "third task",
    answer: "#circle",
    description: "You can combine any selector with the descendent selector.",
    example:
      "<strong>#cool</strong> selects any element with <strong>id='cool'</strong>",
    htmlViewer: `
        <square></square>
        <circle id="circle"/></circle>
        <square></square>
        `,
    completed: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "Select the circle",
    answer: "circle",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: `
    <circle></circle>
    <circle></circle>
    `,
    completed: false,
    board: ["circle", "circle"],
  },
  {
    name: "second task",
    answer: "square",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>p</strong> selects all <tag>p</tag> elements.",
    htmlViewer: `
        <square></square>
        <circle></circle>
        <square></square>
        `,
    completed: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "third task",
    answer: "#circle",
    description: "You can combine any selector with the descendent selector.",
    example:
      "<strong>#cool</strong> selects any element with <strong>id='cool'</strong>",
    htmlViewer: `
        <square></square>
        <circle id="circle"/></circle>
        <square></square>
        `,
    completed: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "Select the circle",
    answer: "circle",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: `
    <circle></circle>
    <circle></circle>
    `,
    completed: false,
    board: ["circle", "circle"],
  },
  {
    name: "second task",
    answer: "square",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>p</strong> selects all <tag>p</tag> elements.",
    htmlViewer: `
        <square></square>
        <circle></circle>
        <square></square>
        `,
    completed: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "third task",
    answer: "#circle",
    description: "You can combine any selector with the descendent selector.",
    example:
      "<strong>#cool</strong> selects any element with <strong>id='cool'</strong>",
    htmlViewer: `
        <square></square>
        <circle id="circle"/></circle>
        <square></square>
        `,
    completed: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "Select the circle",
    answer: "circle",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: `
    <circle></circle>
    <circle></circle>
    `,
    completed: false,
    board: ["circle", "circle"],
  },
  {
    name: "second task",
    answer: "square",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>p</strong> selects all <tag>p</tag> elements.",
    htmlViewer: `
        <square></square>
        <circle></circle>
        <square></square>
        `,
    completed: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "third task",
    answer: "#circle",
    description: "You can combine any selector with the descendent selector.",
    example:
      "<strong>#cool</strong> selects any element with <strong>id='cool'</strong>",
    htmlViewer: `
        <square></square>
        <circle id="circle"/></circle>
        <square></square>
        `,
    completed: false,
    board: ["square", "circle", "square"],
  },
];

export { level };
