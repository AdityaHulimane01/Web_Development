// let obj = {
//     a: 1,
//     b: "Aditya"
// }
// console.log(obj)


// let Animal = {
//     eats:true
// }
// let rabbit = {
//     jumps:true
// }
//All the things in animal can be used by the rabbit by .__proto__
// rabbit.__proto__ = Animal //sets rabbit.[[prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created but of Animal class")
    }

    eats(){
        console.log("Animal Eats")
    }
    jumps(){
        console.log("Animal Jumps")
    }
}

class Lion extends Animal {
    constructor(name){
        super(name)   // No need to do [ this.name = name ] again super will call the constructor of the Animal class.
        console.log("Object is created but of Lion class")
    }

}

let a = new Animal("Bunny")
console.log(a)  // call all the functions in class by [ a.eats() / a.jumps() ] in console.


let b = new Lion("Sheru")
console.log(b)
