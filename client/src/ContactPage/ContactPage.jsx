import React from 'react';


class ContactPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mailSent: false,
			name: '',
			email: '',
			location: '',
			message: '',
			phone: '',
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		const { name, email, phone, location, message } = this.state;
		fetch('/api/contact', {
			method: 'POST',
			headers: {
		      'Content-Type': 'application/json'
		    },
			body: JSON.stringify({ name, email, phone, location, message })
		}).then(res => res.json())
			.then(res => {
				console.log(res.message);
				this.setState({ mailSent: res.success});
			});
		setTimeout(() => this.setState({ mailSent: false }), 10000);
	}

	render() {
		const { name, email, location, message, phone } = this.state;
		return (
			<div className="container">
				<div className="contact-page">
					<h1>Get In Touch</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="row1">
							<input
								name="name"
								value={ name }
								placeholder="Your Name (Eg: Samuel Okanume)"
								type="text"
								required
								onChange={this.handleChange}
							/>
							<input
								name="email"
								value={ email }
								placeholder="Your E-mail (To help us get back to you)"
								type="email"
								required
								onChange={this.handleChange}
							/>
						</div>
						<div className="row2">
							<input
								name="phone"
								value={ phone }
								placeholder="Your Phone no (To help us get back to you)"
								type="number"
								required
								onChange={this.handleChange}
							/>
						</div>
						<div className="row2">
							<input
								name="location"
								value={ location }
								placeholder="Your Address, State (required)"
								type="address"
								required
								onChange={this.handleChange}
							/>
						</div>
						<div className="row3">
							<textarea
								name="message"
								value={ message }
								placeholder="Message"
								type="text"
								required
								onChange={this.handleChange}
							/>
						</div>
						<div className="row3">
							<button>Submit</button>
						</div>
						<div style={{ color: '#2164f3', fontWeight: 'bolder'}}>
						  {this.state.mailSent &&
						    <div>Thank you for contacting us...</div>
						  }
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default ContactPage;
