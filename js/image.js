const IMG_NUM = 6,
      IMG_SRC = "image/",
      BG_IMAGE_CL = "bg-image",
      body = document.querySelector("body");

function getRandomNumber(){
  return Math.ceil(Math.random() * IMG_NUM);
}

function drawBackground() {
  const num = getRandomNumber();
  const imageName = `image${num}.jpg`;
  const image = new Image();
  image.src = IMG_SRC + imageName;
  image.classList.add(BG_IMAGE_CL);
  body.prepend(image);
}

function init() {
  drawBackground();
}

init();
