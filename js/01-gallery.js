let counterValue = 0;

const counterEl = document.querySelector("#counter");
const buttonFirst = counterEl.childNodes[1];
const spanElement = counterEl.childNodes[3];
const buttonSecond = counterEl.childNodes[5];

buttonFirst.addEventListener("click", incrementCounterValue);
buttonSecond.addEventListener("click", decrementCounterValue);

function incrementCounterValue() {
  spanElement.textContent = counterValue += 1;
  return counterValue;
}

function decrementCounterValue() {
  spanElement.textContent = counterValue -= 1;
  return counterValue;
}
