const db = require('./db');

//Task object constructor
var Parts = function(parts){
    this.make = parts.make;
    this.model = parts.model;
    this.year = parts.year;
    this.part = parts.part;
    this.description = parts.description;
};

Parts.uploadNewPart = function (newPart, result) {    
    db.query("INSERT INTO autoparts set ?", newPart, function (err, res) {    
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

Parts.getPartById = function (partId, result) {
    db.query("Select * from autoparts, image where autoparts.id = image.part_fk and image.part_fk = ? ", partId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Parts.getAllParts = function (result) {
    db.query("SELECT * FROM autoparts LEFT JOIN image ON autoparts.id = image.part_fk", function (err, res) {
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
	db.query("UPDATE autoparts SET ? WHERE id = ?", [part, id], function (err, res) {
		if(err) {
			console.log("error: ", err);
		    result(null, err);
		}
		else{
			result(null, res);
		}
	}); 
};

Parts.remove = function(id, result){
    db.query("DELETE FROM autoparts WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
        }
    }); 
};

module.exports = Parts;