import React from 'react';
import { Route, Link } from 'react-router-dom';

const productform = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '400px',
}

class ProductForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			make: '',
			model: '',
			year: '',
			name: '',
			description: '',
			photos: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const { make, model, year, name, description, photos } = this.state;
		console.log({ make, model, year, name, description, photos });
	}
	render() {
		const { make, model, year, name, description, photos } = this.state;
		return (
			<div className="prod" style={productform}>
				<form onSubmit={this.handleSubmit}>
					<div>Make: <input type="text" value={make} name="make" onChange={this.handleChange}/></div> <br/>
					<div>Model: <input type="text" value={model} name="model" onChange={this.handleChange}/></div> <br/>
					<div>Year: <input type="text" value={year} name="year" onChange={this.handleChange}/></div> <br/>
					<div>Part Name: <input type="text" value={name} name="name" onChange={this.handleChange}/></div> <br/>
					<div>Description: <input type="text" value={description} name="description" onChange={this.handleChange}/></div> <br/>
					<div>Photos: <input type="file" multiple value={photos} name="photos" onChange={this.handleChange}/></div> <br/>
					<div><button type="submit">Submit</button></div>
				</form>
			</div>
		);
	}
}

export default ProductForm;
