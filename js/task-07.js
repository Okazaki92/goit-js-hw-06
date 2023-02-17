const textInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");
textOutput.style.fontSize = `${textInput.value}px`;
textInput.addEventListener("input", (event) => {
	textOutput.style.fontSize = `${event.target.value}px`;
});
