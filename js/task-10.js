function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("#controls>input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxCollection = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    let newBox = document.createElement("div");
    newBox.style.height = `${30 + 10 * i}px`;
    newBox.style.width = `${30 + 10 * i}px`;
    newBox.style.background = getRandomHexColor();
    boxCollection.insertAdjacentElement("beforeend", newBox);
  }
};

createBtn.addEventListener("click", createBoxes);

const destroyBoxes = () => {
  boxCollection.innerHTML = "";
};

destroyBtn.addEventListener("click", destroyBoxes);
