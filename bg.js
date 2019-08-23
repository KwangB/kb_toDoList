const body = document.querySelector("body");

const IMG_NUMBER = 1;

function paintImage(imgNumer){
    const image = new Image();
    image.src =  `images/${imgNumer + 1}.jpg`;
    image.classList.add("bgImage")
    body.prepend(image);
}

function genRandom(){
    const Number = Math.floor((Math.random()*IMG_NUMBER));
    return Number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init()