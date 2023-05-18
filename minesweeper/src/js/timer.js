const startTimer = () => {
  let startTime = new Date().getTime(); // сохраняем время начала отсчета
  let timer = setInterval(() => {
    let currentTime = new Date().getTime(); // получаем текущее время
    let timeElapsed = currentTime - startTime; // вычисляем время, прошедшее с начала отсчета
    let minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60)); // получаем количество минут
    let seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000); // получаем количество секунд
    let timeDisplay = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`; // форматируем отображение времени
    document.querySelector(".panel__time").innerHTML = timeDisplay; // вставляем отформатированное значение времени на страницу
  }, 1000); // функция обновляет время каждую секунду
};

export { startTimer };
