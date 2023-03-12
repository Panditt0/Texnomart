

const button1 = document.querySelector(".control-slide-1");
const button2 = document.querySelector(".control-slide-2");
const button3 = document.querySelector(".control-slide-3");

const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");
const slide3 = document.querySelector(".slide-3");


button1.addEventListener("click", function () {
    button2.classList.remove("slide-button-on");
    button3.classList.remove("slide-button-on");
    button1.classList.add("slide-button-on");

    slide1.classList.add("slide-show");
    slide2.classList.remove("slide-show");
    slide3.classList.remove("slide-show");
})
button2.addEventListener("click", function () {
    button1.classList.remove("slide-button-on");
    button3.classList.remove("slide-button-on");
    button2.classList.add("slide-button-on")

    slide1.classList.remove("slide-show");
    slide2.classList.add("slide-show");
    slide3.classList.remove("slide-show");
})
button3.addEventListener("click", function () {
    button1.classList.remove("slide-button-on");
    button2.classList.remove("slide-button-on");
    button3.classList.add("slide-button-on")

    slide1.classList.remove("slide-show");
    slide2.classList.remove("slide-show");
    slide3.classList.add("slide-show")
})


