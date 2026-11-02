const { faker } = require("@faker-js/faker")
const mysql = require("mysql2")
const express = require("express")
const path = require("path")
const { connect } = require("http2")
const methodOverride = require("method-override")

const app = express()

app.use(express.urlencoded({extended : true}))
app.use(methodOverride("_method"))

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

app.get("/users" , (req , res) => {
    let q = "SELECT * FROM users"
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("users.ejs" , {users})
        })
    } catch (err) {
        console.log("Error is : " + err)
    }
})

app.get("/users/:id/edit" , (req , res) => {
    let {id} = req.params
    let q = `SELECT * FROM users WHERE id = '${id}'`

    try{
        connection.query(q , (err , users) => {
            if(err) throw err;
            let user = users[0];
            res.render("edit.ejs" , {user})
        })
    } catch(err){
        res.send("Error Occured :" + err)
    }
})

app.patch("/users/:id" , (req , res) => {
    res.send("ok")
})