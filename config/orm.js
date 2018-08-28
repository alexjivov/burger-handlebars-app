//mySQL connection - imported
var connection = require("./connection.js");

//Array of question marks for passing values into a mySQL query
// Loops through and creates them as values are passed in
function questionMarks(num) {
    //creates the array
    var arr = [];
    //pushes the question marks in
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    //returns array as a string
    return arr.toString();
}

//Syntax adjustment function
//object key/value pairs converted to SQL syntax - hopefully?
function objectSql(ob) {
    var arr = [];

    //loops through keys and pushes K/V pairs as a string arr
    for (var key in ob) {
        var value = ob[key];
        //skips hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf("") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(ley + "=" + value);
        }
    }

    // translate array of strings to a single string separated by commas
    return arr.toString();
}

//Object for SQL statement functions
var orm = {
    all: function (table, cb) {
        var queryString = "SELECT * FROM" + table;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    allOrder: function (table, orderCol, cb) {
        var queryString = "SELECT * FROM" + table + " ORDER BY " + orderCol;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    allOrderDesc: function (table, orderCol, cb) {
        var queryString = "SELECT * FROM " + table + "ORDER BY " + orderCol + "DESC";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, results) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objectSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    delete: function(table,condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

//Module export
module.exports = orm;