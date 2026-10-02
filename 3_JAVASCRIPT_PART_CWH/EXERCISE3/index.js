let n = 2;

function fact(n){
    let arr = Array.from(Array(n+1).keys());
    let c = arr.slice(1,).reduce((a,b) => a*b)
    return c;
}

console.log(fact(n));
