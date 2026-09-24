// Methods of Destructuring

(async function main() {      
  // let x , y = [1 , 2]   //this is wrong methode but we can do something else for assigning x = 1 and y = 2 that is ,
  //  let [x , y] = [1 , 2]  // methode 1
   //console.log(x , y)
  
  //let [x , y , ...rest] = [1 , 2 , 3 , 4 , 5 , 6 , 7] // 3 Dots are must  //methode 2
  // console.log(x , y , rest)

let obj = {     // Methode 3
    a: 2,
    b: 4,
    c: 6
}
  
let {a , b} = obj   // For pulling out only required Things from the Specific object.
console.log(a , b)
})()