const imageArray = [
    "img/cat_black.png",
    "img/cat_calico.png",
    "img/cat_ginger.png",
    "img/cat_gray.png",
    "img/cat_spots.png",
    "img/cat_tabby.png",
    "img/cat_tuxedo.png",
    "img/cat_white.png"
];

const image = document.querySelector("img.kitten_picture");
const button = document.querySelector("button");

button.addEventListener("click", () => transformKitten(imageArray));

function transformKitten(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}