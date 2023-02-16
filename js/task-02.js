const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newList = document.querySelector("#ingredients");
const newListItem = [];

ingredients.forEach((i) => {
  const newItem = document.createElement("li");
  newItem.className = "item";
  newItem.textContent = i;
  newListItem.push(newItem);
});

newList.append(...newListItem);
