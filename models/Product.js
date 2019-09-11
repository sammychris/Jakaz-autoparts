const db = require('./db');

//Task object constructor
var Product = function(parts){
    this.make = parts.make;
    this.model = parts.model;
    this.year = parts.year;
    this.part = parts.part;
    this.description = parts.description;
};

Product.createProduct = function (newPart, result) {    
    db.query("INSERT INTO products set ?", newPart, function (err, res) {    
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

Product.getPartById = function (partId, result) {
    db.query("Select * from products, photos where products.id = photos.product_id and photos.product_id = ? ", partId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Product.getAllProduct = function (result) {
    db.query("SELECT * FROM products LEFT JOIN photos ON products.id = photos.product_id", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            //console.log('parts : ', res);  
            result(null, res);
        }
    });   
};

Parts.updateById = function(id, part, result){
    db.query("UPDATE products SET ? WHERE id = ?", [part, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

Product.remove = function(id, result){
    db.query("DELETE FROM products WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
        }
    }); 
};

module.exports = Product;
