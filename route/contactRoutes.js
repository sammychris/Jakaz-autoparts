const nodemailer = require('nodemailer')


module.exports = function (app) {
	app.route('/api/contact')
		.post((req, res) => {
		    
			const { name, phone, email, location, message } = req.body;
			
			// Instantiate the SMTP server
			const smtpTrans = nodemailer.createTransport({
				host: 'mail.jakazautoparts.com',
				port: 465,
				secure: true,
				auth: {
					user: 'info@jakazautoparts.com',
					pass: 'info@jakazautoparts.com', 
				}
			});

			// Specify what the email will look like
			const mailOpts = {
			    from: 'contactpage@jakazautoparts.com', 
			    to: 'ebusameric@gmail.com, info@jakazautoparts.com, sammychrise@gmail.com, jakazautoparts@gmail.com',
			    subject: 'client from Jakazautoparts',
			    text: `Name: ${name} \n\nPhone no: (${phone}) \n\nEmail: (${email}) \n\nLocation: ${location} \n\nMessage: ${message}`
			}

			 // Attempt to send the email
			smtpTrans.sendMail(mailOpts, (error, response) => {
	    		if (error) {
	    			console.log(error)
	      			res.json({ message:'contact-failure', success: false }) // Show a page indicating failure
	    		}
	    		else {
	    		    console.log('Sent Message')
	     			res.json({ message:'contact-success', success: true });
	    		}
	  		});

		})
}