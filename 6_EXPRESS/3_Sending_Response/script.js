const express = require("express")
const app = express()

let port = 3000

app.listen(port , () => {
    console.log(`App is listening on port ${port}`)
})

app.use((req , res) => {
    console.log("Request has been sent")
    let html = "<h1>Fruits</h1> <ul><li>Apple</li> <li>Mango</li></ul>"
    res.send(html)
})

