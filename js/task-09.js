function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChange = document.querySelector("button.change-color");
const body = document.querySelector("body");
const colorName = document.querySelector("span.color");

btnChange.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = body.style.backgroundColor;
});
