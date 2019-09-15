
require('dotenv').config();
const multer  = require('multer');
const path    = require('path');
const Product = require('../models/Product');
const Photos = require('../models/ProductPhotos');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../client/public/uploads'));
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
		 	const new_product = new Product(req.body);
		  	const { files }  = req;
		 	const product_id = generateId(25); // assign id

		  	// handles null error 
		  	for( let key in new_product ) {
		  		if (!new_product[key]){
		  			return res.status(400).json({ error:true, message: 'Please provide '+key });
		  		}
		  	}

		  	// handles null error for photo
		  	if (!files.length) {
		  		return res.status(400).json({ error:true, message: 'Please provide a photo'})
		  	}
		  	// assign new product an id... 
		  	new_product.id = product_id;
		  	// assign sample photo to first input file
		  	new_product.sample_photo = files[0].filename;
		  	// map through files 
		 	const uploads = files.map(a => [a.filename, product_id]);
			
		  	Product.createProduct(new_product, (err, output) => {
			    if (err) return res.send(err);
				Photos.upload(uploads, (err, result) => {
					if (err) return res.send(err);
					return res.json({ message: "Product uploaded successful!" });
				});
			});
		})

		.get((req, res) => {
			Product.getAll((err, result) => {
				res.json(result);
			})    
		});


	app.route('/api/product/:id')
		.get((req, res) => {
			Product.getById(req.params.id, (err, result) => {
				if (err) return res.send(err);
				return res.json(result)
			});
		})

		.put((req, res) => {
			Product.updateById(req.params.id, new Product(req.body), (err, result) => {
				if (err) return res.send(err);
				return res.json(result)
			});
		})

		.delete((req, res) => {
			Product.remove(req.params.id, (err, result) => {
				if (err) return res.send(err);
				return res.json(result)
			});
		})
		// app.route('/api/project')
		// 	.post(upload.single('img_url'), (req, res) => {
		// 		let { name, description, code_url, demo_url, type, skills, item } = req.body;
		// 		//skills = [ ...skills, ...item.split(',')];

		// 		let pro = new Project({
		// 			name,
		// 			description,
		// 			code_url,
		// 			demo_url,
		// 			type,
		// 			skills,
		// 		})
		// 		pro.img_url = `http://${req.headers.host}/uploads/${req.file.filename}`;
		// 		pro.save()
		// 			.then(project => res.redirect('/page'))
		// 			.catch(err => res.status(401).json({ err }));
		// 	})

		// 	.get(function (req, res) {
		// 		Project.find({})
		// 			.then(project => res.json({ project }))
		// 			.catch(err => res.status(400).json({ err }));
		// 	})

}
