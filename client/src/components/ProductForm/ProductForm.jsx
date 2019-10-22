import React from 'react';

const productform = {
	display: 'flex',
	flexDirection: 'column',
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
			catName: '',
			categories: [],
			inputFiles: [],
		}
		this.category = {};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.uploadData = this.uploadData.bind(this);
		this.listCategory = this.listCategory.bind(this);
	}

	componentDidMount(){
		this.setState({
			inputFiles: document.querySelector('input[type=file]')
		});

		fetch('/api/product/category')
			.then(res => res.json())
			.then(cats => {
				this.setState({ categories: cats });
			})
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	uploadData(data) {
		const formData = new FormData();
		for(const key in data){
			if (typeof data[key] === 'string' || typeof data[key] === 'number') {
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
		const { make, model, year, name, catName, inputFiles } = this.state;
		const category_id = this.category[catName];

		fetch("/api/product", {
		    method: 'POST',
		    body: this.uploadData({
		    	make, model, year, name, category_id, inputFiles
		    })
		})
			.then(res => res.json())
			.then(res => alert(res))
	}

	listCategory(categories) {
		return categories.map((a,i) => {
			this.category[a.name] = a.id;
			return <option key={i}>{a.name}</option>
		});
	}

	render() {
		const { make, model, year, name, catName, categories } = this.state;
		return (
			<div className="contact-page" style={productform}>
				<h2>Add Product</h2>
				<form onSubmit={this.handleSubmit} encType="multipart/form-data">
					<div className="row1">
						<input placeholder="Enter Make (required)" type="text" required value={make} name="make" onChange={this.handleChange}/>
						<input placeholder="Enter Model (required)" type="text" required value={model} name="model" onChange={this.handleChange}/>
					</div>
					<div className="row1">
						<input placeholder="Enter Year" type="text" value={year} name="year" onChange={this.handleChange}/>
						<input placeholder="Enter Part Name (required)" type="text" required value={name} name="name" onChange={this.handleChange}/>
					</div>
					<div className="row3">
						<select value={catName} required name="catName" onChange={this.handleChange}>
							<option value="">select a Category</option>
							{ this.listCategory(categories) }
						</select>
					</div>
					<div className="row2">
						Photos: <input type="file" multiple placeholder="required"/>
					</div>
					<div className="row3">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default ProductForm;
