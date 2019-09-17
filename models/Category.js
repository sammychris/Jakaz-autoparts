const db = require('./db');

//Task object constructor
var Category = function(cat){
    this.name = cat.name;
    this.photo = cat.photo;
};

Category.createCategory = function (cat, result) {    
    db.query("INSERT INTO category set ?", cat, function (err, res) {    
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

Category.getAll = function (result) {
    //const sql = cat ? "select * from `products` where `name` = ? ": "SELECT * FROM products";
    db.query("SELECT * FROM category", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            //console.log('product : ', res);  
            result(null, res);
        }
    });   
};

Category.getById = function (catId, result) {
    db.query("Select * from category where id = ? ", catId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Category.updateById = function(id, cat, result){
    db.query("UPDATE category SET ? WHERE id = ?", [cat, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

Category.remove = function(id, result){
    db.query("DELETE FROM category WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
        }
    }); 
};

module.exports = Category;
