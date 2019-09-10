
require('dotenv').config();
const multer  = require('multer');
const path    = require('path');
const Autoparts = require('../models/Autoparts');
const Image = require('../models/AutopartImages');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../client/public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})


const upload = multer({ storage }).array('photos');

module.exports = function (app) {

app.route('/api/part')
	.post(upload, (req, res) => {
	  	const new_part = new Autoparts(req.body);
	  	const { part_fk } = req.body;
	  	const { files }  = req;

	  	//handles null error 
	  	for( let key in new_part ) {
	  		if (!new_part[key]){
	  			return res.status(400).send({ error:true, message: 'Please provide '+key });
	  		}
	  	}
	  	// handles null error for photo
	  	if (!files.length || !part_fk) {
	  		return res.status(400).send({ error:true, message: 'Please provide a photo'})
	  	}
		  
	  	Autoparts.uploadNewPart(new_part, (err, output) => {
		    if (err) return res.send(err);
		    req.files.forEach( each => {
				const { filename } = each;
				Image.uploadNewImages({ filename, part_fk }, (err, result) => {
					if (err) return res.send(err);
					return res.json(result);
				});
			});
		  });
	})

	.get((req, res) => {
		const fetchProduct = new Promise((resolve, reject) => {
			Autoparts.getAllParts((err, result) => {
				resolve(result);
			})
		});

		fetchProduct.then(a => res.json(a));

		// async function fetchProduct() {
		// 	const resii = await Autoparts.getAllParts((err, result) => {
		// 		me =  await result;
		// 	});

		// 	console.log(me)

		// 	return resii;
		// 	// result.map(each => {
		// 	// 		await Image.getByFK(each.id, (err, output) => {
		// 	// 			each.photos = output;
		// 	// 		});
		// 	// 		return each;
		// 	// 		//setTimeout(() => console.log(each), 4000)
		// 	// 	})
		// 	// 		//return res.json(new_res);
		// }  
		// fetchProduct().then(a => console.log(a));      
	});


app.route('/api/part/:id')
	.get((req, res) => {
		Autoparts.getPartById(req.params.id, (err, result) => {
			if (err) return res.send(err);
			return res.json(result)
		});
	})

	.put((req, res) => {
		Autoparts.updateById(req.params.id, new Autoparts(req.body), (err, result) => {
			if (err) return res.send(err);
			return res.json(result)
		});
	})

	.delete((req, res) => {
		Autoparts.remove(req.params.id, (err, result) => {
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
