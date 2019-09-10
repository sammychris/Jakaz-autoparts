
require('dotenv').config();
const multer  = require('multer');
const path    = require('path');
const Image = require('../models/AutopartImages');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../client/public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
//var upload = multer({ dest: 'uploads/' })
const upload = multer({ storage }).array('photos');


module.exports = function (app) {

app.route('/api/upload')
	.post(upload, (req, res) => {
		console.log(req.files)
		const { part_fk } = req.body;
		///const new_image = new Image(req.body);

	  	//handles null error 
	  	// for( let key in new_part ) {
	  	// 	if (!new_part[key]){
	  	// 		return res.status(400).send({ error:true, message: 'Please provide '+key });
	  	// 	}
	  	// }
		for (let i = 0; i < req.files.length; i++) {
			const { filename } = req.files[i];
			Image.uploadNewImages({ filename, part_fk }, (err, result) => {
				if (err) return res.send(err);
				return res.json(result);
			})
		}
	})

// 	.get((req, res) => {
// 		Autoparts.getAllParts((err, result) => {
// 			return res.json(result);
// 		})
// 	});


// app.route('/api/part/:id')
// 	.get((req, res) => {
// 		Autoparts.getPartById(req.params.id, (err, result) => {
// 			if (err) return res.send(err);
// 			return res.json(result)
// 		});
// 	})

// 	.put((req, res) => {
// 		Autoparts.updateById(req.params.id, new Autoparts(req.body), (err, result) => {
// 			if (err) return res.send(err);
// 			return res.json(result)
// 		});
// 	})

// 	.delete((req, res) => {
// 		Autoparts.remove(req.params.id, (err, result) => {
// 			if (err) return res.send(err);
// 			return res.json(result)
// 		});
// 	})
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
