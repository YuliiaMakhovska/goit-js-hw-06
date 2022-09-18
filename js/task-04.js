let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");

function changedValue(newValue) {
  counterValueRef.textContent = newValue;
}

buttonDecrement.addEventListener("click", () => {
  console.log((counterValue -= 1));
  changedValue(counterValue);
});
buttonIncrement.addEventListener("click", () => {
  console.log((counterValue += 1));
  changedValue(counterValue);
});
