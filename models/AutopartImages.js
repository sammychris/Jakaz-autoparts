const db = require('./db');

//Task object constructor
var Images = function(images){
    this.photos = images.photos;
    this.part_fk = images.part_fk;
};

Images.uploadNewImages = function (images, result) {    
    db.query("INSERT INTO image set ?", images, function (err, res) {    
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

Images.getByFK = function (partId, result) {
    db.query("Select * from image where part_fk = ? ", partId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Images.getAllImages = function (result) {
    db.query("Select * from image", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
        	console.log('parts : ', res);  
        	result(null, res);
        }
    });   
};

Images.updateById = function(id, images, result){
	db.query("UPDATE image SET ? WHERE id = ?", [images, id], function (err, res) {
		if(err) {
			console.log("error: ", err);
		    result(null, err);
		}
		else{
			result(null, res);
		}
	}); 
};

Images.remove = function(id, result){
    db.query("DELETE FROM image WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
        }
    }); 
};

module.exports = Images;