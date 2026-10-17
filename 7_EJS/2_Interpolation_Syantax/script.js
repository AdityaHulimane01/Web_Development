const express = require("express")
const app = express()
const path = require("path")

const port = 8080

app.listen(port , () => {
    console.log(`App is listening on port ${port}`)
})

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "/views"))

app.get("/" , (req , res) => {
    res.render("home.ejs")
})

app.get("/Hello" , (req , res) => {
    res.send("Hello")
})
