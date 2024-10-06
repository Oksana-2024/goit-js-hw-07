function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const span = document.querySelector(".color");

document.querySelector(".change-color").addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.style.color = color;
});
