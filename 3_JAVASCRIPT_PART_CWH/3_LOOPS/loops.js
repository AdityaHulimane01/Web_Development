// For loop example
let a = 1;
for(let i = 0  ; i < 100 ; i++){
 console.log(i)
}

// object creation Example
let obj = {
    name: "Aditya",
    role: "HR",
    company: "codewithAdi AI"
}

// forin loop for atribute printing that are present in the object specially used for the objects
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}

// forof loop used for the single alphabet printing may be can use for other work also
for (const c of "Aditya") {
    console.log(c);
}

// while loop Example
let i = 0;
while (i < 6) {
    console.log(i);
    i++;
}

// do while loop Example
let j = 0;
do {
    console.log(j);
    j++;
} while (j<6);

// Nested loops with arrays
let heros = [["Ironman" , "Spidy" , "Thor"] , ["Superman" , "Wonder-Women" , "Flash"]]

for(i = 0 ; i < heros.length ; i++){
    console.log(heros[i])
    for(j = 0 ; j < heros[i].length ; j++){
         console.log(`j = ${j}` +"  "+ heros[i][j])
    }
}