type Board = string[];

type Level = {
  name: string;
  answer: string;
  animation: string;
  description: string;
  example: string;
  htmlViewer: string;
  completed: boolean;
  help: boolean;
  board: Board;
};

export { Level, Board };
