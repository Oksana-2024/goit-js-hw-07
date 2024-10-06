function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroyBoxes = () => {
  const boxes = document.querySelector("#boxes");
  while (boxes.firstChild) {
    boxes.removeChild(boxes.lastChild);
  }
};

document.querySelector("[data-create]").addEventListener("click", () => {
  const number = document.querySelector("input").value;
  if (number > 100 || number < 1) {
    return;
  }

  let a = 0;
  destroyBoxes();
  while (a < number) {
    const box = document.createElement("div");
    box.style.width = `${a * 10 + 30}px`;
    box.style.height = `${a * 10 + 30}px`;
    box.style.backgroundColor = getRandomHexColor();
    document.querySelector("#boxes").append(box);
    a++;
  }
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
