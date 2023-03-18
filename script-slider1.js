
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");

const block4a = document.querySelector(".block-4a");
const block4b = document.querySelector(".block-4b");

let whiteObject = document.querySelectorAll (".white-object")

buttonLeft.addEventListener("click", function (){
    block4a.classList.toggle("active-block");
    block4b.classList.toggle("active-block");
    whiteObject.classList.toggle("red-object");

})

buttonRight.addEventListener("click",function(){
    block4a.classList.toggle("active-block");
    block4b.classList.toggle("active-block");

})

