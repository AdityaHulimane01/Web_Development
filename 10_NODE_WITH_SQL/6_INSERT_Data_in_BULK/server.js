const mysql = require("mysql2")
const {faker} = require("@faker-js/faker")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ash#1234",
    database: "temp_db"
})

let getRandomUsers = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
}

let q = "INSERT INTO users (id , username , email , password) VALUES  ?"
let data = []

for(let i = 1 ; i <= 100 ; i++){
    data.push(getRandomUsers())
}

connection.query(q , [data] , (err, result) => {
    if(err) throw err;
    console.log(result)
    connection.end()
})