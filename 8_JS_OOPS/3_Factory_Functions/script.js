function PersonMaker(name , age){
    const person = {
        name : name,
        age : age,
        talk(){
           console.log(`Hii Iam ${name}`)
        }
    }
    return person
}

let p1 = PersonMaker("Adam" , 25)
let p2 = PersonMaker("eve" , 25)
