let h4 = document.querySelector('h4');

function colourChange(colour , delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h4.style.color = colour;
            console.log('The colour is changed to ' + colour);
            resolve();
        }, delay);
    });
}

async function demo(){
    await colourChange('red', 1000);
    await colourChange('orange', 1000);
    await colourChange('yellow', 1000);
    await colourChange('green', 1000);
}

demo()

