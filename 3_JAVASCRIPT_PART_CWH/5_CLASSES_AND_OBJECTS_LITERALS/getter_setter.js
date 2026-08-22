// Class definition for User
class User {

    // Constructor is called automatically when a new object is created
    constructor(name){
        // Instead of directly assigning, this will call the setter
        this.name = name
    }

    // Getter method: used to access the name property
    get name(){
        return this._name   // Return the internal variable (_name)
    }

    // Setter method: used to set/update the name property
    set name(value){

        // Validation: name should be at least 4 characters long
        if(value.length < 4){
            console.log("Name is too short.")
            return   // Stop execution if invalid
        }

        // Store value in a different variable to avoid infinite loop
        this._name = value 
    }
}

// Creating a new User object
let user = new User("John")

// Accessing name → calls getter
console.log(user.name)   // Output: John

// Updating name → calls setter
user.name = "Harry"

// Accessing updated name → calls getter again
console.log(user.name)   // Output: Harry