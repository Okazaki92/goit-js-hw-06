const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((i) => {
    console.log(`Category: ${i.firstElementChild.textContent}`);
    console.log(`Elements: ${i.lastElementChild.children.length}`);
});