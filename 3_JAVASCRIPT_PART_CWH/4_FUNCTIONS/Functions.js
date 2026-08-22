// ================== FUNCTIONS BASICS ==================

// Function = reusable block of code
// Used to avoid repetition (write once, use many times)

function nice(name) {
    // 'name' = parameter (input)
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your Tshirt is nice!");
    console.log("Hey " + name + " your course is good too!");
}

// Calling function with different arguments
nice("Harry");
nice("Aditya");


// ================== FUNCTION TYPE 1 ==================

// Function that prints result directly
function sum(a , b){
    console.log(a + b);   // output inside function
}

sum(3 , 4);   // prints 7


// ================== FUNCTION TYPE 2 ==================

// Function that RETURNS value
function sum(a , b){
    return a + b;   // return sends value back
}

let result = sum(3 , 4);
console.log("The sum is", result);


// ================== ARROW FUNCTION ==================

// Short syntax for writing functions
const func1 = (x) => {
    console.log("I am an Arrow function " + x);
}

// Calling arrow function
func1(3);
func1(5);
func1(99);