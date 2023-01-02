let btn = document.querySelector(".switch-btn");
let video = document.querySelector(".vid-container");

btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});

//let preloader = document.getElementsByClassName("preloader");
let preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader")
});

