const { faker } = require("@faker-js/faker")
const mysql = require("mysql2")
const express = require("express")
const path = require("path")
const { connect } = require("http2")

const app = express()

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "/views"))

let port = 8080

app.listen(port, (req, res) => {
    console.log(`App is running at port ${port}`)
})

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ash#1234",
    database: "temp_db"
})

app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM users"
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result)
            let count = result[0]["count(*)"]
            res.render("home.ejs" , {count})
        })
    } catch (err) {
        console.log("Error is : " + err)
    }
})