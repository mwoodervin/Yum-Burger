const mysql = require("mysql");

// create connection with the database
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root12345",
    database: "Yum_Burgers"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

});

module.exports = connection;