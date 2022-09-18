// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і
// вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-create]");
const boxesEl = document.querySelector("#boxes");

let value = 30;
const boxes = [];
function createBoxes(amount) {
  amount = input.value;
  for (let i = 1; i < amount.length; i++) {
    value += 10;
    const box = document.querySelector("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${value}px`;
    box.style.width = `${value}px`;
    boxes.push(box);
  }
  boxesEl.append(...boxes);
}

createBtn.addEventListener("click", createBoxes);

// function onClick(event) {
//   console.log(event);
// }
