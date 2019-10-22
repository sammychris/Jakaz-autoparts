import React from 'react';

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
			name: '',
			photo: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.setState({
			photo: document.querySelector('input[type=file]')
		});
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		const { name, photo } = this.state;

		formData.append('name', name);
		formData.append('photo', photo.files[0]);

		fetch("/api/product/category", {
		    method: 'POST',
		    body: formData
		})
			.then(res => res.json())
			.then(res => alert(res))
	}


	render() {
		const { name } = this.state;
		return (
			<div className="contact-page" style={productform}>
				<h2>Add New Category</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="row1">
						<input required placeholder="Name of Category (required)" type="text" value={name} name="name" onChange={this.handleChange}/>
						<input required type="file"  placeholder="Sample Photo for category"/>
					</div>
					<br/>
					<div className="row3">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CategoryForm;
