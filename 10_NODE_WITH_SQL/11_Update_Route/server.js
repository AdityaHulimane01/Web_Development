const { faker } = require("@faker-js/faker")
const mysql = require("mysql2")
const express = require("express")
const path = require("path")
const { connect } = require("http2")
const methodOverride = require("method-override")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

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

    connection.query(q, (err, result) => {
        if (err) {
            return res.send("Error Occured : " + err)
        } else {
            console.log(result)
            let count = result[0]["count(*)"]
            res.render("home.ejs", { count })
        }
    })
})

app.get("/users", (req, res) => {
    let q = "SELECT * FROM users"

    connection.query(q, (err, users) => {
        if (err) {
            return res.send("Error Occured : " + err)
        } else {
            res.render("users.ejs", { users })
        }
    })
})

app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params
    let q = `SELECT * FROM users WHERE id = '${id}'`

    connection.query(q, (err, users) => {
        if (err) {
            return res.send("Error Occured : " + err)
        } else {
            let user = users[0];
            res.render("edit.ejs", { user })
        }
    })
})

app.patch("/users/:id", (req, res) => {
    let { id } = req.params
    let { password: formPass, username: newUsername } = req.body
    let q = `SELECT * FROM users WHERE id = '${id}'`

    connection.query(q, (err, result) => {
        if (err) {
            return res.send("Error Occured : " + err)
        } else {
            let user = result[0]

            if (formPass != user.password) {
                res.send("Wrong Password")
            } else {
                let q2 = `UPDATE users SET username = '${newUsername}' WHERE id = '${id}'`

                connection.query(q2, (err, result) => {
                    if (err) {
                        return res.send("Error Occured : " + err)
                    } else {
                        res.redirect("/users")
                    }
                })
            }
        }
    })
})

app.get("/users/:id/delete", (req, res) => {
    let { id } = req.params
    let q = `SELECT * FROM users WHERE id = '${id}'`

    connection.query(q, (err, users) => {
        if (err) {
            return res.send("Error Occured" + err)
        } else {
            let user = users[0];
            res.render("delete.ejs", { user })
        }
    })
})

app.delete("/users/:id", (req, res) => {
    let { id } = req.params
    let { password: formPass } = req.body
    let q = `SELECT * FROM users WHERE id = '${id}'`

    connection.query(q, (err, result) => {
        if (err) {
            return res.send("Error Occured : " + err)
        }
        let user = result[0]

        if (!user) {
            return res.send("User Not Exists")
        }

        if (formPass != user.password) {
            return res.send("Wrong Password")
        } else {
            let q2 = `DELETE FROM users WHERE id = '${id}'`

            connection.query(q2, (err, result) => {
                if (err) {
                    return res.send("Error Occured : " + err)
                } else {
                    res.redirect("/users")
                }
            })
        }
    })
})

app.get("/users/new" , (req , res) => {
   res.render("new.ejs")
})

app.post("/users" , (req , res) => {
    
    let {id , username , email , password} = req.body

    let q = `INSERT INTO users VALUES ('${id}' , '${username}' , '${email}' , '${password}')`

    connection.query(q , (err , result) => {
        if(err){
            return res.send("Error Occured : " + err)
        } else{
            res.redirect("/users")
        }
    })
})