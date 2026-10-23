const express = require("express")
const app = express()

const port = 8080

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

app.set("view engine", "ejs")

app.get("/ig/:username", (req, res) => {
    let { username } = req.params
    const instaData = require("./data.json")
    const data = instaData[username]

    if (data) {
        res.render("instagram.ejs", { data })
    } else {
        res.render("error.ejs")
    }

})