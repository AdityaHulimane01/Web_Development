function Person(name , age){
   this.name = name
   this.age = age
}

Person.prototype.talk = function(){ 
    console.log(`Hii Iam ${this.name}`)
}

let p1 = new Person("Adam" , 25)
let p2 = new Person("eve" , 25)
