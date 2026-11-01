const { faker } = require("@faker-js/faker")
const mysql = require("mysql2")
const express = require("express")

const app = express()

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
            res.send(result[0]["count(*)"])
        })
    } catch (err) {
        console.log("Error is : " + err)
    }
})