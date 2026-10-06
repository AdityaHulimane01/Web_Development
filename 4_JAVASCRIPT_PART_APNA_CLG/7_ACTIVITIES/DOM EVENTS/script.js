let inp = document.querySelector("input")
let btn = document.querySelector("button")
let h2 = document.querySelector("h2")

inp.addEventListener("mouseout" , function(){
    console.log("Mouse is out of the input feild")
})

inp.addEventListener("keypress", function(){
    console.log("Key is pressed")
})

window.addEventListener("scroll", function(){
    console.log("Mouse is scrolled")
})

window.addEventListener('load', function() {
  console.log('Load event detected!');
});

inp.addEventListener("input", function(){
    let valid = inp.value.replace(/[^a-zA-Z ]/g, "");
    inp.value = valid;
    h2.innerText = valid;
});

