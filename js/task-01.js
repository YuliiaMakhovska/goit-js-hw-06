const listCategory = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listCategory.length}`);

[...listCategory].forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryEl = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryEl}`);
});
