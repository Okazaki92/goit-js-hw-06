// const textInput = document.querySelector("#validation-input");
// textInput.addEventListener("blur", (event) => {
//   if (event.currentTarget.value.length == textInput.dataset.length) {
//     textInput.classList.add("valid");
//     textInput.classList.remove("invalid");
//   } else {
//     textInput.classList.add("invalid");
//     textInput.classList.remove("valid");
//   }
// });

const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
	const isValid = input.value.length === parseInt(input.dataset.length);
	input.classList.toggle("valid", isValid);
	input.classList.toggle("invalid", !isValid);
});
