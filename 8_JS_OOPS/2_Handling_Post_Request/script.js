const express = require("express")
const app = express()

const port = 8080

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.listen(port , () => {
    console.log(`App is listening on port ${port}`)
})

app.get("/register" , (req,res) => {
    let {name , pass} = req.query
    res.send(`Standerd GET Response , Welcome ${name}`)
})

app.post("/register" , (req,res) => {
    let {name , pass} = req.body
    res.send(`Standerd POST Response , Welcome ${name}`)   // Now this will also work 
})

