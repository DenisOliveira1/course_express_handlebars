const mysql = require("mysql")

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"burgers_db"
})

module.exports = connection