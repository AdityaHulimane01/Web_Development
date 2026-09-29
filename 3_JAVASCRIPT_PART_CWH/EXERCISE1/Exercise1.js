let a = prompt("Enter the first value");
let b = prompt("Enter the operation you want to perform");
let c = prompt("Enter the second value");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "*"
}

if( Math.random() > 0.1){
  
    alert(`The answer is ${eval(`${a} ${b} ${c}`)}`);
}
else
    b=obj[b]
    
 alert(`The answer is ${eval(`${a} ${b} ${c}`)}`);
