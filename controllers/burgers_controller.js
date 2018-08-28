// require express + router
var express = require("express");

var router = express.Router();

//Import burger model for its DB functions
var burger = require("../models/burger.js");

//Create routes and set up routes logic 
router.get("/",function (req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        //console log the hbs Object
        res.render("index", hbsObject);
    });
});

//POST for router

router.post("/api/burgers/:id", function(req,res) {
    burger.create([req.body.name], function(result) {
        //Send back new ID
        res.json({id: result.insertzId});
    });
});

//DELETE for router

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if(result.affectedRows == 0) {
            //if nothing changes, then ID doesn't exist, so its an error
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export module
module.exports = router;