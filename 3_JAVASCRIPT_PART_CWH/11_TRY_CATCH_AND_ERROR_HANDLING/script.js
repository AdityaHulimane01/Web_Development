// ✅ Why we use try...catch (must-know only)

// Prevent program crash
// → Error aaye toh program band nahi hota
// Handle runtime errors safely
// → Risky code (API, input, JSON) handle karne ke liye
// Show custom/user-friendly messages
// → Default error ke instead clean message
// Control what happens after error
// → Retry / skip / fallback decide kar sakte ho
// Debugging (error object milta hai)
// → catch(error) se exact problem pata chalta hai
// Use with finally for cleanup
// → Always run (file close, loader stop, etc.)

// ================== INPUT ==================

// prompt() → always returns STRING
let a = prompt("Enter the first number")
let b = prompt("Enter the second number")


// ================== VALIDATION ==================

// isNaN() → checks if value is NOT a number
// If user enters text → throw custom error
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Only numbers are allowed bro!")
}


// ================== CONVERSION ==================

// Convert string → integer
// Without this: "2" + "3" = "23" (string concat ❌)
let sum = parseInt(a) + parseInt(b)


// ================== ERROR HANDLING ==================

let x = 1   // change it to undefined to trigger error

function main() {

    try {
        // Code that may fail
        console.log("The sum is", sum * x)

        return true   // exits function immediately

    } catch (error) {

        // Runs if error occurs
        console.log("Error handled! Something went wrong.")
        // error object contains details if needed

        return false
    }

    // ❌ This will NEVER run (because of return above)
    console.log("This will not execute")

    // finally block (if used) ALWAYS runs
    // even if return is used above
    /*
    finally {
        console.log("Files are being closed")
    }
    */
   
}


// Call function
main()