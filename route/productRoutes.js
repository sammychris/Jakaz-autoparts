
require('dotenv').config();
const multer  = require('multer');
const path    = require('path');
const Product = require('../models/Product');
const Photos = require('../models/Photos');
const Category = require('../models/Category');


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
			const category = {};
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
		  	const product_id = `${make}-${model}-${name}-${generateId(5)}`; // assign id
		  	new_prod.id = product_id;
		  	new_prod.sample_photo = files[0].filename;
		  	new_prod.data = `${make} ${model} ${year} ${name}`;

		  	// push the name nd photo to category
		  	category.name = name;
		  	category.photo = new_prod.sample_photo;

		  	// map through files 
		 	const uploads = files.map(a => [a.filename, product_id]); 

		  	Product.createProduct(new_prod, (err, output) => {
			    if (err) return res.send(err);
				Photos.upload(uploads, (err, result) => {
					if (err) return res.send(err);
					Category.createCategory(category, (err, cat) =>{
						if (err) return res.send(err);
						return res.json({ message: "Product uploaded successful!" });
					})
				});
			});
		})

		.get((req, res) => {
			Product.getAll(req.query.name, (err, product) => {
				if (err) return res.send(err);
				res.json(product);
			})    
		});
	app.route('/api/product/cat')
		.get((req, res) =>{
			Category.getAll((err, categories) => {
				if (err) return res.send(err);
				res.json(categories);
			})
		});
	app.route('/api/product/search')
		.get((req, res) =>{
			Product.search(req.query.data, (err, product) => {
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
