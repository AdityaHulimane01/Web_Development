// async function getData() {
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject
// resolve means the promise is settled successfully
// reject means the promise is not settled successfully

async function getData() {
    //simulate getting the data from the server
    
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts' , {
               method: 'POST' ,
               body: JSON.stringify({
               title: 'foo',
               body: 'bar',
               userId: 1,
               }),       
               headers: {
              'Content-type': 'application/json; charset=UTF-8' ,
               },
               })
    let data = await x.json() //(x.text()) can be also used to get data in text format
    return data
}

// If we want to use the async functions we alaways need to create the async main function 
// and in that main function we call our async function by making the variable and storing the function in it by using (await) 
// by using await script waits for the execution of async function and then runs the remaining script.
async function main() {              
    console.log("Loading modules")
    console.log("do something else")
    console.log("Load data")
    
    let data = await getData()

    console.log(data)
    console.log("data processed")
    console.log("task 2")
}

main()   //  main function call