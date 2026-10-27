const express = require("express");
const app = express()
const path = require("path")
const { v4: uuid } = require("uuid")

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
        id: uuid(),
        username: "Aditya",
        content: "Life is boring guys!"
    },
    {
        id: uuid(),
        username: "Suraj",
        content: "Always Give Up!"
    },
        {
        id: uuid(),
        username: "Yash",
        content: "Always Fail!"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/posts", (req, res) => {
    const { username, content } = req.body

    let id = uuid()
    posts.push({ id, username, content })
    res.redirect("/posts")             // here is the line...
})

app.get("/posts/:id" , (req , res) => {
    let {id} = req.params
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs" , {post})
})