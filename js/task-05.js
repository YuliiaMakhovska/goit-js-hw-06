// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  inputNameEl: document.querySelector("#name-input"),
  outputNameEl: document.querySelector("#name-output"),
};
refs.inputNameEl.addEventListener("input", (event) => {
  refs.outputNameEl.textContent = event.currentTarget.value || "Anonymous";
  console.log(event.currentTarget.value.trim());
});
