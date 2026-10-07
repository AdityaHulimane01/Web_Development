let h4 = document.querySelector('h4');

function colourChange(colour , delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h4.style.color = colour;
            resolve("Colour changed!");
        }, delay);
    });
}

colourChange('red', 1000)
.then((result) => {
    console.log(result)
    console.log("Colour changed to Red")
    return colourChange('blue' , 1000)
})
.then((result) => {
    console.log(result)
    console.log("Colour changed to Blue")
    return colourChange('green' , 1000)
})
.then((result) => {
     console.log(result)
    console.log("Colour changed to Green")
})
.catch((error) => {
    console.log(error)
})