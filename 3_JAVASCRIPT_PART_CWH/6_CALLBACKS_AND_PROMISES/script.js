// ======================================= PART == 1 (SYNCHROUNUS AND ASYNCHOUNUS BEHAVIOUR OF THE SCRIPT)======================================


//All this (first , second , Third) was running before the setTimeout funcs becouse of their Synchrounus nature in script
//See the output on chrome inspect tab(console)
console.log("Aditya is Hacker")    //This will run first
console.log("suraj is not hacker")  //This will run second

setTimeout(() => {                  // As this is Asynchrounus func it will run after the whole script execution
    console.log("I am inside of timeout func first time")
}, 0);

setTimeout(() => {                  // As this is also Asynchrounus func it will run after the whole script execution
    console.log("I am inside of timeout func second time")
}, 0);

console.log("The End")  // This will run Third



