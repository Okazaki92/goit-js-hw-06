function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("#controls>input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxCollection = document.querySelector("#boxes");

let lastBox = 30;

const createBoxes = (amount) => {
	amount = input.value;
	for (let i = 0; i < amount; i += 1) {
		let newBox = document.createElement("div");
		newBox.style.height = `${lastBox}px`;
		newBox.style.width = `${lastBox}px`;
		newBox.style.background = getRandomHexColor();
		boxCollection.insertAdjacentElement("beforeend", newBox);
		lastBox += 10;
	}
};

createBtn.addEventListener("click", createBoxes);

const destroyBoxes = (amount) => {
	amount.preventDefault();
	lastBox = 30;
	boxCollection.innerHTML = "";
};

destroyBtn.addEventListener("click", destroyBoxes);

// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const input = document.querySelector("#controls>input");
// const createBtn = document.querySelector("button[data-create]");
// const destroyBtn = document.querySelector("button[data-destroy]");
// const boxCollection = document.querySelector("#boxes");

// let lastBox = 30;

// const createBoxes = (amount) => {
// 	amount = input.value;
// 	for (let i = 0; i < amount; i += 1) {
// 		let newBox = document.createElement("div");
// 		if (boxCollection.lastChild !== null) {
// 			lastBox = boxCollection.lastElementChild.clientHeight;
// 		}
// 		newBox.style.height = `${lastBox + 10 * i}px`;
// 		newBox.style.width = `${lastBox + 10 * i}px`;
// 		newBox.style.background = getRandomHexColor();
// 		boxCollection.insertAdjacentElement("beforeend", newBox);
// 	}
// };

// createBtn.addEventListener("click", createBoxes);

// const destroyBoxes = (amount) => {
// 	amount.preventDefault();
// 	lastBox = 30;
// 	boxCollection.innerHTML = "";
// };

// destroyBtn.addEventListener("click", destroyBoxes);
