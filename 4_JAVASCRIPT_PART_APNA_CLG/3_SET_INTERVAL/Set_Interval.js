
console.log("Start . . . . ")

let id1 = setInterval(() => {   // Function repeats its execution after given exact time until we use clearInterval(id1)
    console.log("Hello World")
}, 2000);

let id2 = setInterval(() => {  // Function repeats its execution after given exact time until we use clearInterval(id2)
    console.log("Iam Human")
}, 2000);

setTimeout(() => {
    clearInterval(id1)
    clearInterval(id2)
    console.log("Cleared the Intervals")
}, 10000);
