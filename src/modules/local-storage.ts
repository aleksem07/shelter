// page count
if (localStorage.getItem("currentPage") === null) {
  const currentPage = {
    page: 0,
  };
  localStorage.setItem("currentPage", JSON.stringify(currentPage));
}

const getPageJson = localStorage.getItem("currentPage");
const page = getPageJson ? JSON.parse(getPageJson) : null;

//arr cars
let carsAll: Array<object> = [];
const getCarDefault = " http://localhost:3000/garage/";
fetch(getCarDefault)
  .then((responce) => responce.json())
  .then((data) => {
    carsAll = data;

    if (localStorage.getItem("carsAll") === null) {
      localStorage.setItem("carsAll", JSON.stringify(carsAll));
    }
  })

  .catch((err) => console.log(err + " localhost:3000/garage/ not find"));

export { page };
