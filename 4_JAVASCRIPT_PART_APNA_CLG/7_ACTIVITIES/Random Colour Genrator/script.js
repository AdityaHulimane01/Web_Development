let txt = document.querySelector("h1")
let btn = document.querySelector("button");
let box = document.querySelector(".color-box");

btn.addEventListener("click", function () {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;

    box.style.backgroundColor = color;
    txt.innerText = color;
});