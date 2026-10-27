const express = require("express");
const app = express()
const path = require("path")
const { v4: uuid } = require("uuid")
const methodOverride = require("method-override")



const port = 8080

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride("_method"))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


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

app.get("/posts/:id/edit" , (req , res) => {
     let {id} = req.params
     let post = posts.find((p) => id === p.id)
     res.render("edit.ejs" , {post})
})

app.patch("/posts/:id" , (req , res) => {
    let {id} = req.params
    let newContent = req.body.content
    let post = posts.find((p) => id === p.id)
    post.content = newContent
    res.redirect("/posts")
})

app.delete("/posts/:id" , (req , res) => {
    let {id} = req.params
    posts = posts.filter((p) => id !== p.id)
    res.redirect("/posts")
})
