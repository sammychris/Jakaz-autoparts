import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ProductForm } from '../components';


class AdminPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<ProductForm />
			</div>
		);
	}
}

export default AdminPage;
