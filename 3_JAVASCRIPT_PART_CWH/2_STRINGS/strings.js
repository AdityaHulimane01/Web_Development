
let Name = "Aditya";
let friend = "Yash";
let Demo = "   Hii    "
let msg = " I Love Coding"
console.log(Name);

// by these methode we can acces the perticular alphabet of the string even foe printing
// console.log(Name[0]);
// console.log(Name[1]);
// console.log(Name[2]);
// console.log(Name[3]);
// console.log(Name[4]);
// console.log(Name[5]);

// these are two methods of printing 
console.log("My name is " + Name + " and my friends name is " + friend);
console.log(`My name is ${Name} and my friends name is ${friend}`);     // This is called templet literals == `${}`

console.log(Name.length);

console.log(Name.toUpperCase());
console.log(Name.toLocaleLowerCase());

// This syntax only temporary changes the string not original string is affected couse the string are immutable 
// for example original string also printed down side of replaced sring
console.log(friend.replace("Yash" , "Suraj"));
console.log(friend);
// we can aslo replace some alphabets of the string
console.log(Name.replace("Adi" , "123"));

// These joins the two strings even can add the new string with the single space in between them
// we can also do these things by (+) operator but inbuild functions are easier to use
console.log(Name.concat(friend) , "Suraj");

// This function slices the string we just need to provide the indexes of the string in between we want to slice it
// console.log(Name.slice(start index , end index+1));
console.log(friend.slice(1 , 5));
console.log(Name.slice(0 , 3));

console.log(Demo.trim()) // Trims the extra spaces that are only at the start and end of message not in between
console.log(Demo.toUpperCase().trim())  // This is called the methode chaining.

console.log(msg.indexOf("Love"))  // Returns the index first letter occurance of the word in the message

console.log(msg.repeat(3))  // Repeats msg 3 times
// There are more inbuild functions for strings can find out on internate 