// Spread operator usage and Syntax of using it

function sum(a , b , c){
    return a+b+c
}

let arr = [2 , 4 , 6 , 8] 
// If we want to add the numbers that are inside the array we have 3 methods

console.log(arr[0] + arr[1] + arr[2])  // Methode 1

console.log(sum(arr[0] , arr[1] , arr[2]))  // Methode 2

console.log(sum(...arr))  // Methode 3  // (...arr) means spread arr and this is the [spread operator(...)]

console.log(...arr) // prints the whole array