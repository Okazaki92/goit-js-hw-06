// let counterValue = 0;

// const showValue = document.querySelector("#value");
// const btnMinus = document.querySelector('button[data-action="decrement"]');
// const btnPlus = document.querySelector('button[data-action="increment"]');

// btnMinus.addEventListener("click", () => {
// 	counterValue--;
// 	showValue.textContent = counterValue;
// });
// btnPlus.addEventListener("click", () => {
// 	counterValue++;
// 	showValue.textContent = counterValue;
// });

let counterValue = 0;

const showValue = document.querySelector("#value");
const buttons = document.querySelectorAll("button[data-action]");

buttons.forEach((button) =>
	button.addEventListener("click", () => {
		counterValue += button.dataset.action === "increment" ? 1 : -1;
		showValue.textContent = counterValue;
	}),
);