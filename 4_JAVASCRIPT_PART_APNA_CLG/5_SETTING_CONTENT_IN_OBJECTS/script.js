// ===============================
// 🔹 SELECT ELEMENT
// ===============================

var element = document.querySelector("#idName");
// selects FIRST matching element


// ===============================
// 🔹 innerText
// ===============================
element.innerText = "Hello";
// changes only visible text


// ===============================
// 🔹 textContent
// ===============================
element.textContent = "Hello";
// changes all text (including hidden text)


// ===============================
// 🔹 innerHTML
// ===============================
element.innerHTML = "<b>Hello</b>";
// changes content and supports HTML tags


// ===============================
// 🔹 QUICK NOTES
// ===============================
// querySelector() → first matching element
// use # for id → "#idName"
// use . for class → ".className"
// use tag → "p", "h1"

// innerText → visible text
// textContent → all text
// innerHTML → HTML + text