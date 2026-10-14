const express = require("express")
const app = express()

let port = 8080

app.listen(port , () => {
    console.log(`App is listening on port ${port}`)
})

//  These are the diffrenet paths to request with request type (get)
app.get("/" , (req , res) => {
    res.send("You requested get methode for the Main Path")
})
app.get("/home" , (req , res) => {
    res.send("You requested get methode for the Home Path")
})
app.get("/help" , (req , res) => {
    res.send("You requested get methode for the Help Path")
})

//  These are the diffrenet paths to request with request type (post)
app.post("/home" , (req , res) => {
    res.send("You requested post methode for the Home Path")
})

// // default error 
app.get("/{*path}", (req, res) => {
    res.send("Error 404. Page not Exists");
});