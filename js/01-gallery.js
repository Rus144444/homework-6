const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// #1

// const list = document.querySelector(".gallery");
// console.log(list);

// const items = images.map((element) => {
//   const item = document.createElement("li");
//   item.classList.add("item");
//   const img = document.createElement("img");
//   img.classList.add("img");
//   img.setAttribute(
//     "url",
//     "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260"
//   );
//   img.setAttribute("alt", "White and Black Long Fur Cat");
//   item.append(img);
//   return item;
// });

// console.log(items);
// list.append(...items);

// # 2

const list = document.querySelector(".gallery");
console.log(list);

const items = images
  .map(({ url, alt }) => {
    return `<li class='item'><img url='${url}' alt='${alt}'></li>`;
  })
  .join(" ");

console.log(items);
list.insertAdjacentHTML("beforebegin", items);
