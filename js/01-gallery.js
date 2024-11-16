// import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
console.log("Number of categories:", galleryEl.children.length); // #1

const itemsGallery = [...galleryEl.children];
itemsGallery.forEach((e) => {
  console.log(`
    Category: ${e.firstElementChild.textContent} 
    Elements: ${e.lastElementChild.children.length}
  `);
});
