// ================== PART 1: BASIC DOM METHODS ==================

// Select first element with class "box"
document.querySelector(".box")

document.getElementById("3")

// Get HTML inside element (includes tags)
document.querySelector(".box").innerHTML

// Get only visible text (ignores hidden elements)
document.querySelector(".box").innerText

// Get full element including its own tag
document.querySelector(".box").outerHTML


// Tag name (ONLY for element nodes)
document.querySelector(".box").tagName   // e.g., DIV

// Node name (works for text + element nodes)
document.querySelector(".box").nodeName


// Get all text inside container (ignores tags completely)
document.querySelector(".container").textContent


// Hide entire element (like display: none)
// document.querySelector(".container").hidden = true


// Change content inside element
// document.querySelector(".box").innerHTML = "Hey i am adi"


// ================== ATTRIBUTES ==================

// Check if attribute exists
document.querySelector(".box").hasAttribute("style")

// Get attribute value
document.querySelector(".box").getAttribute("style")

// Set / update attribute
document.querySelector(".box").setAttribute("style" , "display: inline")

// Get all attributes
document.querySelector(".box").attributes

// Remove attribute
document.querySelector(".box").removeAttribute("style")


// Enable editing entire webpage (for fun/debugging)
// document.designMode = "on"


// ================== PART 2: CREATE & INSERT ELEMENT ==================

// Create new element
let div = document.createElement("div")

// Add content (HTML allowed)
div.innerHTML = "Hey i am inserted by <b> Adi </b>"

// Add class
div.setAttribute("class" , "Inserted")

// Append inside container (at the end)
document.querySelector(".container").append(div)


// ================== INSERT ADJACENT HTML ==================

let cont = document.querySelector(".container")

// Insert HTML relative to element
cont.insertAdjacentHTML("afterend" , "<b> i am here </b>")

/*
Positions:
beforebegin → before element
afterbegin  → inside (start)
beforeend   → inside (end)
afterend    → after element
*/


// ================== CLASS LIST ==================

// Add class
document.querySelector(".container").classList.add("class1")

// Remove class
document.querySelector(".container").classList.remove("class1")

// Toggle class (add if not present, remove if present)
document.querySelector(".container").classList.toggle("red")