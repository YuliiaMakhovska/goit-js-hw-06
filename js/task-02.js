// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.
//   Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

// for (let i = 0; i < ingredients.length; i++) {
//   const itemsEl = document.createElement("li");
//   itemsEl.classList.add("item");
//   itemsEl.textContent = ingredients[i];
//   ingredientsListEl.append(itemsEl);
//   console.log(itemsEl);
// }

const items = ingredients.map((item) => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("item");
  itemsEl.textContent = item;
  return itemsEl;
});
console.log(items);
ingredientsListEl.append(...items);
