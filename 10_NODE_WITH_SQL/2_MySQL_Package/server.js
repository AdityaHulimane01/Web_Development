const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "temp_db",
    password: "Ash#1234"
});

connection.query("SHOW TABLES", (err, result) => {
    if (err) {
        console.log("Database Error:", err.message);
        return;
    }

    console.log(result);
    connection.end();
});