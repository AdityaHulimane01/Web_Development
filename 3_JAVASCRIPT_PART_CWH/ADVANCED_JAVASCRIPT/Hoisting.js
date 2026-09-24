 // Hoisting methode in the Javascript
 
 async function sleep()  {
    console.log(a)

    //let a = 45  // Here we used (let) for declaring the (a) and first tried to print it and then declared this will throw
                  //  error in console

   // const a = 45  // Same for (const) also 

    var a = 45  // Here used (var) which virtually places the declaration of variable at the top of function or block of code
                // placing of variable at top of code is called the Hoisting.
 }

 (async function main(params) {
    let A = await sleep()
 })()

 //Note : The variable that is created inside the function can only be accessed by that function
 // and if it is created outside of function then that can be used globally