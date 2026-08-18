let arr = [5,3,7,9,2,4,0];
arr.sort();
console.log(arr);

arr.push(39 , 40);
console.log(arr);

arr.pop(40);
console.log(arr);

// these two functions can insert or delete the elements from starting indexes

arr.shift(0);        //this works same like pop methode
console.log(arr);

arr.unshift(-1);      //this works same like push methode
console.log(arr);

// this can join the multiple arrays
let b = [ 1 , 2 , 3];
let c = [ 4 , 5 , 6];
console.log(arr.concat(b,c));  //But this methode does not make any changes in the original arrays 

// By this methode we can perform the operation on every element of the array with single logic 
let newArr = arr.map((e) =>{
    return e**2;
});
console.log(newArr);

// We can filter the array by this 
const GreaterThanSeven = (e) => {
    if(e>7){
        return true;
    }
    return false;
}
console.log(arr.filter(GreaterThanSeven));

//This can convert the string to  character array
console.log(Array.from("Aditya"));

// there are more inbuiled functions in the javascript refer the notes for extraa