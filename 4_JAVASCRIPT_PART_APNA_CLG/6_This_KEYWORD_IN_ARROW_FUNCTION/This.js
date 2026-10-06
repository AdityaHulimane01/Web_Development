// 🔹 NORMAL FUNCTION
// - `this` depends on how the function is called (dynamic binding)
// - When called using an object → `this` refers to that object

const user1 = {
    name: "John",
    greet: function () {
        console.log(this.name); // `this` → user1 object
    }
};

user1.greet(); // John



// 🔹 ARROW FUNCTION
// - Arrow functions do NOT have their own `this`
// - They take `this` from the surrounding (parent) scope (lexical binding)

const user2 = {
    name: "John",
    greet: () => {
        console.log(this.name); 
        // `this` is NOT user2
        // It comes from outer scope (usually global → undefined in strict mode)
    }
};

user2.greet(); // undefined



// 🔹 BEST USE CASE OF ARROW FUNCTION
// - Useful inside callbacks to preserve `this`

const user3 = {
    name: "John",
    greet: function () {
        setTimeout(() => {
            console.log(this.name); 
            // Arrow function takes `this` from greet() → user3
        }, 1000);
    }
};

user3.greet(); // John



// 🔹 QUICK REVISION POINTS
// Normal Function → `this` depends on caller
// Arrow Function → `this` is fixed from parent scope
// Avoid arrow functions for object methods
// Use arrow functions for callbacks (like setTimeout, map, etc.)