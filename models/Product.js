const db = require('./db');

//Task object constructor
var Product = function(product){
    this.make = product.make;
    this.model = product.model;
    this.year = product.year;
    this.part = product.part;
    this.description = product.description;
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

Product.getById = function (productId, result) {
    db.query("Select * from products, photos where products.id = photos.product_id and photos.product_id = ? ", productId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Product.getAll = function (result) {
    db.query("SELECT * FROM products LEFT JOIN photos ON products.id = photos.product_id", function (err, res) {
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
