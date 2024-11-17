const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

inputEl.addEventListener("change", handelValidationInput);

function handelValidationInput() {
  if (inputEl.getAttribute("data-length") >= inputEl.value.length) {
    inputEl.style.borderColor = "green";
  } else {
    inputEl.style.borderColor = "red";
  }
}
