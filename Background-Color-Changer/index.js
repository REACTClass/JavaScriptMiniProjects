const colors = ["red", "blue", "green", "yellow", "orange", "lavender", "magenta", "coral", "cyan", "purple", "pink", "violet", "#4b0082", "#7cfc00", "#b0c4de", "#ffdead", "#7cfc00", "#ff00ff"]

let btnEl = document.getElementById("btn")

const color = document.querySelector(".color")

btnEl.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomNumber];
    color.textContent =
        "Background Color : " + colors[randomNumber];
});

