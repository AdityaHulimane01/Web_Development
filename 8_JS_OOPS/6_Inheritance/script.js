class Person {
    constructor(name, age) {
        console.log("Inside Person class")
        this.name = name
        this.age = age
    }

    talk() {
    console.log(`Hii Iam ${this.name}`)
}
}

class Student extends Person {
    constructor(name , age , marks){
        console.log("Inside Student class")
        super(name , age)         // calls the parent class constructor
        this.marks = marks
    }
}

class Teacher extends Person {
    constructor(name , age , subject){
        console.log("Inside Teacher class")
        super(name , age)         // calls the parent class constructor
        this.subject = subject
    }
}