const clockConatiner = document.querySelector(".clock-container"),
      dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateClock(){
  const fullDate = new Date();
  const year = fullDate.getFullYear();
  const month = fullDate.getMonth();
  const date = fullDate .getDate();
  const day = fullDate.getDay();

  clockConatiner.innerHTML =
    `year : ${year},
    month : ${month},
    date : ${date},
    day : ${dayArray[day]},
    hour: ${fullDate.getHours()},
    min: ${fullDate.getMinutes()},
    sec: ${fullDate.getSeconds()}`;
}

function init() {
  setInterval(updateClock);
}

init();
