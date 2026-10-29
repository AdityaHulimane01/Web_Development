const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ash#1234",
    database: "temp_db"
})

let q = "INSERT INTO users (id , username , email) VALUES  ?"
let users = [
    ['1' , 'Aditya' , 'abc@gmail.com'],
    ['2' , 'Rohit' , 'def@gmail.com'],
    ['3' , 'Sahil' , 'ghi@gmail.com']
]

connection.query(q , [users] , (err, result) => {
    if(err) throw err;
    console.log(result)
    connection.end()
})