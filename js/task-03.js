const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const newList = document.querySelector(".gallery");
const markup = images
	.map(
		(img) =>
			`<li class ="cell"><img class ="img" src=${img.url} alt=${img.alt}></img></li>`,
	)
	.join("");

newList.insertAdjacentHTML("beforeend", markup);
const photos = document.querySelectorAll(".img");
photos.forEach((photo) => {
	photo.style.width = "100%";
	photo.style.display = "block";
});
const newListStyle = newList.style;
newListStyle.listStyle = "none";
newListStyle.padding = "0";
// const cat = document.getElementsByTagName("li")[0];
// cat.classList.add("cat");
// cat.style.gridArea = "cat";

// const fish = document.getElementsByTagName("li")[1];
// fish.classList.add("fish");
// fish.style.gridArea = "fish";

// const horse = document.getElementsByTagName("li")[2];
// horse.classList.add("horse");
// horse.style.gridArea = "horse";

// listStyle.display = "grid";
// listStyle.gridTemplateRows = "1fr";
// listStyle.gridRowGap = "20px";
// listStyle.gridColumnGap = "20px";
// listStyle.gridTemplateAreas = '"cat cat""fish horse"';
