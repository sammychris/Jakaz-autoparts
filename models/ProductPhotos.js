const db = require('./db');

//Task object constructor
var Photos = function(photo){
    this.filename = photo.filename;
    this.product_id = photo.product_id;
    this.ismain = photo.ismain
};

Photos.upload = function (photos, result) {    
    db.query("insert into `photos` (`filename`, `product_id`) values ?", [photos], function (err, res) {    
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

Photos.getByProductId = function (product_id, result) {
    db.query("Select * from photos where product_id = ? ", product_id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Photos.getAll = function (result) {
    db.query("Select * from photos", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
        	console.log('photos : ', res);  
        	result(null, res);
        }
    });   
};

Photos.updateById = function(id, Photos, result){
	db.query("UPDATE photos SET ? WHERE id = ?", [Photos, id], function (err, res) {
		if(err) {
			console.log("error: ", err);
		    result(null, err);
		}
		else{
			result(null, res);
		}
	}); 
};

Photos.remove = function(id, result){
    db.query("DELETE FROM photos WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
        }
    }); 
};

module.exports = Photos;
