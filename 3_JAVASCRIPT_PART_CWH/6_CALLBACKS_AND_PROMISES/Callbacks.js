// ======================================================PART == 2 (CALLBACKS)============================================================

// This concept is bit same as the recursion but here you can pass the one function as an argument to the another function
//  and can define the actual work of the first function in that second function and can call recursively to multiple functions
//  in the form of (chaincall)
const fn = () => {
     console.log("Nothing");
 }

 const callback = (arg , fn) => {
    console.log(arg);
    fn();
 }

 const loadscript = (src , callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Harry" , fn)
    document.head.append(sc)
 }

 loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback);  //Actual Chaincall starts from here
 //loadscript() calls the callback() and callback() calls the fn() This is how it works in reverse format