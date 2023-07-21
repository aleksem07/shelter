import { Car } from "./type";
const url = "http://localhost:3000/garage/";

const getRequest = (method: string, url: string) => {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const err = new Error("Что-то пошло не так");
      error.data = error;
      throw err;
    });
  });
};

const sendRequest = (
  method: string,
  url: string,
  body: object | null = null
) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => response.json());
};

const deleteCar = (id: number) => {
  const body = {};
  sendRequest("DELETE", url + `${id}`, body).then(() =>
    console.log("delete car")
  );
};

const deleteOneCar = (index: number) => {
  getRequest("GET", url)
    .then((data) => deleteCar(data[index].id))
    .catch((err) => console.error("ID not found | " + err));
};

const deleteAllCar = () => {
  let carCount = 0;
  getRequest("GET", url).then((data) => {
    carCount = data.length;
    console.log(carCount);
    if (carCount > 0) {
      data.forEach((item: Car, index: number) => deleteCar(index));
    } else {
      console.log("All data deleted");
    }
  });
  localStorage.removeItem("carsAll");
};

export { getRequest, sendRequest, deleteOneCar, deleteAllCar, url };
