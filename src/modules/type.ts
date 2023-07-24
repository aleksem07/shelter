type pageUi = () => void;

type Car = {
  id: number;
  name: string;
  color: string;
};

type WinnerCar = {
  id?: number;
  time: number;
  color: string;
  name: string;
};

interface BestTimeEntry {
  time: number;
  name: string;
  color: string;
}

export { pageUi, Car, WinnerCar, BestTimeEntry };
