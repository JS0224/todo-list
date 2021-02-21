const userInfoForm = document.querySelector(".user-info-form"),
      userInfoInput = userInfoForm.querySelector("input"),
      NAME_LS = "NAME",
      nameContainer = document.querySelector(".name-container");


function printName(name) {
  nameContainer.innerHTML = `hello : ${name}`;
}

function saveName(name) {
  localStorage.setItem(NAME_LS,name);
}

function handleSubmit(event) {
  event.preventDefault();
  const value = userInfoInput.value;
  printName(value);
  saveName(value);
}

function askName() {
  userInfoForm.addEventListener("submit", handleSubmit);
}

function loadName() {
  const name = localStorage.getItem(NAME_LS);
  if (name === null) {
    askName();
  }
  else {
    printName(name);
  }
}

function init() {
  loadName();
}

init();
