// page count
if (localStorage.getItem("currentPage") === null) {
  const currentPage = {
    page: 0,
  };
  localStorage.setItem("currentPage", JSON.stringify(currentPage));
}

// car count
if (localStorage.getItem("currentCarPage") === null) {
  const currentPage = "1";
  localStorage.setItem("currentCarPage", JSON.stringify(currentPage));
}

// win count
if (localStorage.getItem("currentWinPage") === null) {
  const currentWinPage = "1";
  localStorage.setItem("currentWinPage", JSON.stringify(currentWinPage));
}

const getPageJson = localStorage.getItem("currentPage");
const page = getPageJson ? JSON.parse(getPageJson) : null;

const getCarPageJson = localStorage.getItem("currentCarPage");
const pageCar = getCarPageJson ? JSON.parse(getCarPageJson) : null;

const getWinPageJson = localStorage.getItem("currentWinPage");
const pageWin = getWinPageJson ? JSON.parse(getWinPageJson) : null;

//arr cars
let carsAll: Array<object> = [];
const getCarDefault = "http://localhost:3000/garage/";

fetch(getCarDefault)
  .then((responce) => responce.json())
  .then((data) => {
    carsAll = data;
    if (localStorage.getItem("carsAll") === null) {
      localStorage.setItem("carsAll", JSON.stringify(carsAll));
    }
  })
  .catch((err) => console.log(err + " localhost:3000/garage/ not found"));

export { page, pageCar, pageWin };
