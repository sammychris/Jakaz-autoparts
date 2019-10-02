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
			.then(res => console.log(res))
	}


	render() {
		const { name } = this.state;
		return (
			<div className="prod" style={productform}>
				<h2>Add new category</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						Name: <input required type="text" value={name} name="name" onChange={this.handleChange}/>
					</div>
					<br/>
					<div>
						Sample photo: <input required type="file" />
					</div>
					<br/>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CategoryForm;
