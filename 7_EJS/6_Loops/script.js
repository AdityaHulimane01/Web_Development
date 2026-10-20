const express = require("express")
const app = express()

const port = 8080

app.listen(port , () =>{
    console.log(`App is listening on port ${port}`)
})

app.set("view engine" , "ejs")

app.get("/ig/:username" , (req,res) => {
    const followers = ["Suraj" , "Yash" , "Ganesh" , "Gaurav" , "Pranav"]
    let {username} = req.params
    res.render("instagram.ejs" , {username , followers})
})