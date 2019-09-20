
require('dotenv').config();
const multer  = require('multer');
const path    = require('path');
const Category = require('../models/Category');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../client/public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})


const upload = multer({ storage }).single('photo');



module.exports = function (app) {

	app.route('/api/product/category')
		.post(upload, (req, res) => {
		 	const new_cat = {};
		  	new_cat.name = req.body.name;
			new_cat.photo = req.file.filename;

			Category.createCategory(new_cat, (err, cat) =>{
				if (err) return res.send(err);
				return res.json({ message: "Added a new category successfully!" });
			})
		})

		.get((req, res) => {
			Category.getAll((err, categories) => {
				if (err) return res.send(err);
				res.json(categories);
			})
		});


	app.route('/api/product/category/:id')
		.get((req, res) => {
			Category.getProductByCat(req.params.id, (err, product) => {
				if (err) return res.send(err);
				res.json(product);
			})
		})
}
