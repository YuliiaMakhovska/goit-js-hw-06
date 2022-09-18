// Напиши скрипт, який реагує на зміну значення
//  input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sizeChanges = document.querySelector("#font-size-control");
const textChanges = document.querySelector("#text");

sizeChanges.addEventListener("input", onNewSize);
textChanges.style.fontSize = `${sizeChanges.value}px`;
function onNewSize(event) {
  const size = event.currentTarget.value;
  textChanges.style.fontSize = `${size}px`;
}
