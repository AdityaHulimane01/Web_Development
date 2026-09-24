// (IIFE) Immidieatly Invoke Function Expression.

async function sleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
} 
// Methode of Immidieatly Invoking.
(async function main() {      
    let a = await sleep()
    console.log(a)
     let b = await sleep()
    console.log(b)
})()