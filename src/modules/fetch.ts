import { Car } from "./type";
const url = "http://localhost:3000/garage/";
const urlWinners = "http://localhost:3000/winners/";

const getRequest = async (method: string, url: string) => {
  return await fetch(url).then((response) => {
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

const sendRequest = async (
  method: string,
  url: string,
  body: object | null = null
) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => response.json());
};

const deleteCar = async (id: number, url: string) => {
  const body = {};
  await sendRequest("DELETE", url + `${id}`, body).then(() =>
    console.log(`delete car id:${id}`)
  );
};

const deleteAllCar = async (url: string) => {
  await getRequest("GET", url).then((data) => {
    data.forEach((item: Car) => deleteCar(item.id, url));
  });
};

export { deleteCar, getRequest, sendRequest, deleteAllCar, url, urlWinners };
