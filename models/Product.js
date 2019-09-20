const db = require('./db');

//Task object constructor
var Product = function(product){
    this.make = product.make;
    this.model = product.model;
    this.year = product.year;
    this.category_id = product.category_id;
    this.name = product.name;
};

Product.createProduct = function (newProduct, result) {    
    db.query("INSERT INTO products set ?", newProduct, function (err, res) {    
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

Product.getAll = function (cat_id, result) {
    const sql = cat_id
        ? "select * from `products` where `category_id` = '"+cat_id+"'"
        : "SELECT * FROM products";

    db.query(sql, function (err, res) {
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

Product.search = function (search, result) {
    db.query("select * from `products` where `data` like '%"+search+"%'", function (err, res) {
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

Product.getById = function (productId, result) {
    db.query("Select * from products where id = ? ", productId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Product.updateById = function(id, product, result){
    db.query("UPDATE products SET ? WHERE id = ?", [product, id], function (err, res) {
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
