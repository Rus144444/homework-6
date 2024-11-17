const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("change", handlerChangeOnInput);

function handlerChangeOnInput(event) {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
