var counterValue = 0;

const showValue = document.querySelector("#value");
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');

btnMinus.addEventListener("click", () => {
  counterValue--;
  showValue.textContent = counterValue;
});
btnPlus.addEventListener("click", () => {
  counterValue++;
  showValue.textContent = counterValue;
});
