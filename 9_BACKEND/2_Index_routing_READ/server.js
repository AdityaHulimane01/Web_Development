const express = require("express");
const app = express()
const path = require("path")

const port = 8080

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

let posts = [
    {
        username: "Aditya",
        content: "Life is boring guys!"
    },
    {
        username: "Aditya",
        content: "Life is boring guys!"
    },
        {
        username: "Aditya",
        content: "Life is boring guys!"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})