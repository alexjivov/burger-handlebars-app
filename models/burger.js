// ORM Import
var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.allOrder("burgers","data,id",function(res) {
            cb(res);
    
    });
},
create: function(vals,cb) {
    orm.create("burgers", ['burger_name'],vals, function(res) {
        cb(res);
    });
},
update:function(vals,cb) {
    objColVals.date = new Date().toISOString().slice(0,19).replace('T','');
    orm.update("burgers",objColVals,condition,function(res) {
        cb(res);
    });
},
delete:function(condition,cb) {
    orm.delete("burgers",condition,function(res) {
        cb(res);
    });
}
};

//Export DB functions for the controller
module.exports = burger;