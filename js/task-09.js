// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і
// виводить значення кольору в span.color.

const refs = {
  button: document.querySelector("button.change-color"),
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
};
refs.button.addEventListener("click", () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
