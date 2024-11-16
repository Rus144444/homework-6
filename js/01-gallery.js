const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(".ingredients");

// #1

// const markup = ingredients
//   .map((item) => `<li class='item'>${item}</li>`)
//   .join("");
// console.log(markup);
// list.insertAdjacentHTML("beforebegin", markup);

// #2

// const markup = [];

// for (let i = 0; i < ingredients.length; i++) {
//   const item = document.createElement("li");
//   item.classList.add("item");
//   item.textContent = ingredients[i];
//   markup.push(item);
// }

// console.log(markup);
// list.append(...markup);

// #3

const markup = ingredients.map((el) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = el;
  return item;
});

console.log(markup);
list.append(...markup);
