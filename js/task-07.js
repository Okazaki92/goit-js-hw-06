const textInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text")
textOutput.style.fontSize = "30px";
textInput.addEventListener("input", event => {
    textOutput.style.fontSize = `${event.target.value}px`
})