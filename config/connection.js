// mySQL connection
var mysql = require("mysql");

var connection;

//set up mySQL
if(process.env.JASWDB_URL) {
    connection = mysql.createConnection(process.env.JASWDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,    
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

//Make the connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Export for ORM
module.exports = connection; 