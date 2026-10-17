const express = require("express")
const app = express()

let port = 8080

app.listen(port, (req, res) => {
    console.log(`App is listening on port : ${port}`)
})

app.get("/search", (req, res) => {
    let { q } = req.query

    if (!q) {
        return res.send("<h1>No Search Query</h1>")
    } else {
        let html = `<h1>The search results for query : ${q}</h1>`
        res.send(html)
    }
})
