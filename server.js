// dependencies 
var express = require("express");
var bodyParser = require("body-parser");

//specifying port
var PORT = process.env.PORT || 3000;

//initializing app
var app = express();

// static content for the app from the directory - public -> app directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

//Handlebars dependencies
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//ROUTES import
var routes = require("./controllers/burgers_controller");

app.use("/", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  