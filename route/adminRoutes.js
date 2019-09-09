const Admin = require('../models/Admin');


module.exports = function (app) {
	app.route('/api/admin')
		.post((req, res) => {
			const new_admin = new Admin(req.body);
			for (let key in new_admin) {
				if (!new_admin[key]) 
					return res.status(400).json({error:true, message: 'Please provide '+key});
			}

			Admin.createUser(new_admin, (err, result) => {
				if (err) return res.send(err);
		    	return res.json(result);
			});
		})
}