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

document.getElementById("form").addEventListener("submit",(e) => {
    e.preventDefault()

    let key = document.getElementById("fav-kitten").value

    if (key =="") {
        alert("Please enter all the fields.")
    }
    else{
        setCookie(key, 1)
    }
})

function setCookie(key,time){
    let d = new Date()

    d.setTime(d.getTime() + (time*24*60*60*1000))

    let expires ="expires" + d.toUTCString()

    document.cookie= `${key};${expires};path="/"`

    window.location.reload()

}

function getCookies(){
    let cookies=document.cookie.split(";")
    let res;

    for (Let i=1; i<cookies.length; i++){
        res+= i+ "-" + cookies [i-1 + "<br>"]
    }

    document.getElementById("result").innerHTML = res
}
