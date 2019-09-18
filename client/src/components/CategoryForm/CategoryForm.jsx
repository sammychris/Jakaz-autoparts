import React from 'react';
import { Route, Link } from 'react-router-dom';

const productform = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '400px',
}

class CategoryForm extends React.Component {
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
				<h2>Add new category</h2>
				<form onSubmit={this.handleSubmit} encType="multipart/form-data">
					<div>Name: <input type="text" value={name} name="name" onChange={this.handleChange}/></div> <br/>
					<div>Sample photo: <input type="file"/></div> <br/>
					<div><button type="submit">Submit</button></div>
				</form>
			</div>
		);
	}
}

export default CategoryForm;
