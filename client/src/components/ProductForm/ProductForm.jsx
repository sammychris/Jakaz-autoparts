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
			inputFiles: [],
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.uploadData = this.uploadData.bind(this);
	}

	componentDidMount(){
		this.setState({
			inputFiles: document.querySelector('input[type=file]')
		});
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	uploadData(data) {
		const formData = new FormData();
		for(const key in data){
			if (typeof data[key] === 'string') {
				formData.append(key, data[key]);
			}
			else {
				const items = data[key].files;
				for (const item of items) {
					formData.append('photos',  new Blob([item]));
				}
			}
		}
		return formData;
	};

	handleSubmit(e) {
		e.preventDefault();
		const { make, model, year, name, description, inputFiles } = this.state;
		fetch("/api/product", {
		    method: 'POST',
		    body: this.uploadData({
		    	make, model, year, name, description, inputFiles
		    })
		})
			.then(res => res.json())
			.then(res => console.log(res))
	}
	render() {
		const { make, model, year, name, description } = this.state;
		return (
			<div className="prod" style={productform}>
				<form onSubmit={this.handleSubmit} encType="multipart/form-data">
					<div>Make: <input type="text" value={make} name="make" onChange={this.handleChange}/></div> <br/>
					<div>Model: <input type="text" value={model} name="model" onChange={this.handleChange}/></div> <br/>
					<div>Year: <input type="text" value={year} name="year" onChange={this.handleChange}/></div> <br/>
					<div>Part Name: <input type="text" value={name} name="name" onChange={this.handleChange}/></div> <br/>
					<div>Description: <input type="text" value={description} name="description" onChange={this.handleChange}/></div> <br/>
					<div>Photos: <input type="file" multiple/></div> <br/>
					<div><button type="submit">Submit</button></div>
				</form>
			</div>
		);
	}
}

export default ProductForm;
