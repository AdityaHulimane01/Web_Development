//==============================================================PART == 3 (PROMISES)=========================================================

console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No randome number was supprting to you")
    }
    else {
        setTimeout(() => {
            console.log("Yes iam done");
            resolve("harry")
        }, 3000);
    }
})

prom1.then((a) => {
    console.log(a);                // uses the resolved text or value from prom1
}).catch((error) => {              //used for catching error and throwing it as the text
    console.log(error);
})

// ===========================================Multiple Handling methode usage technique=====================================================
// let handle1 = () => {
//     console.log("trying 1st time");
// }

// let handle2 = () => {
//     console.log("trying 2nd time");
// }

// let handle3 = () => {
//     console.log("trying 3rd time");
// }

// prom1.then(handle1);        // for prblem i can use any handling methode among them


//===========================This is the example of one of the Promise API from the main 6 static APIs(.race)================================
// let prom2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 1 done"), 1000);
// });

// let prom3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 2 done"), 2000);
// });

// Promise.race([prom2, prom3])     //                       <----- Here it is used
//   .then(result => console.log("Winner:", result))
//   .catch(err => console.error(err));

