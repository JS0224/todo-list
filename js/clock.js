const clockConatiner = document.querySelector(".clock-container"),
      dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function init() {
  console.log("hello");
  const fullDate = new Date();
  const year = fullDate.getFullYear();
  const month = fullDate.getMonth();
  const date = fullDate .getDate();
  const day = fullDate.getDay();

  clockConatiner.innerHTML =
    `year : ${year}, month : ${month}, date : ${date},
    day : ${dayArray[day]}`;
}

init();
