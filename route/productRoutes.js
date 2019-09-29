
require('dotenv').config();
const multer  = require('multer');
const path    = require('path');
const Product = require('../models/Product');
const Photos = require('../models/Photos');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})


const upload = multer({ storage }).array('photos');

// To generate Id for new product
const generateId = (index) => {
	let new_id = '', key = 'abcdef';
	for (let i = 0; i < index; i++) {
		const r = Math.floor(Math.random() * 15);
		if (r > 9) new_id += key[Math.floor(Math.random()*key.length)];
		else new_id += r;
	}
	return new_id;
}



module.exports = function (app) {

	app.route('/api/product')
		.post(upload, (req, res) => {
		 	const new_prod = new Product(req.body);
		  	const { files }  = req;

		  	// // handles null error 
		  	// for( let key in new_prod ) {
		  	// 	if (!new_prod[key]){
		  	// 		return res.status(400).json({ error:true, message: 'Please provide '+key });
		  	// 	}
		  	// }

		  	// // handles null error for photo
		  	// if (!files.length) {
		  	// 	return res.status(400).json({ error:true, message: 'Please provide a photo'})
		  	// }

		  	// assign new product an id... 
		  	const { make, model, year, name } = new_prod;

		  	new_prod.id = `${make}-${model}-${name}-${generateId(5)}`; // assign id
		  	new_prod.sample_photo = files[0].filename;
		  	new_prod.q = `${make} ${model} ${year} ${name}`;

		  	// map through files 
		 	const uploads = files.map(a => [a.filename, new_prod.id]); 

		  	Product.createProduct(new_prod, (err, output) => {
			    if (err) return res.send(err);
				Photos.upload(uploads, (err, result) => {
					if (err) return res.send(err);
					return res.json({ message: "Product uploaded successful!" });
				});
			});
		})

		.get((req, res) => {
			Product.getAll(req.query.category_id, (err, product) => {
				if (err) return res.send(err);
				res.json(product);
			})    
		});


	app.route('/api/product/search')
		.get((req, res) =>{
			Product.search(req.query.q, (err, product) => {
				if (err) return res.send(err);
				res.json(product);
			})
		});

	app.route('/api/product/:id')
		.get((req, res) => {
			Product.getById(req.params.id, (err, product) => {
				if (err) return res.send(err);
				product = product[0];
				Photos.getByProductId(req.params.id, (error, photos) => {
					if (error)  return res.send(error);
					return res.json({product, photos});
				})
			});
		})

		.put((req, res) => {
			Product.updateById(req.params.id, new Product(req.body), (err, product) => {
				if (err) return res.send(err);
				return res.json(product)
			});
		})

		.delete((req, res) => {
			Product.remove(req.params.id, (err, product) => {
				if (err) return res.send(err);
				return res.json(product)
			});
		})
}
