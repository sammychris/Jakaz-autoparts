import React from 'react';
import { ProductForm } from '../components';
import { CategoryForm } from '../components';


class AdminPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pform: true,
			prodMessage: "Add a product",
			catMessage: "Add new category",
		}
		this.controlForm = this.controlForm.bind(this);
	}

	controlForm() {
		this.setState({ pform: !this.state.pform });
	}

	render() {
		const { pform, prodMessage, catMessage } = this.state;
		return (
			<div className="container">
				<div className="admin-section">
					<div>
						<button onClick={this.controlForm}>
							{ pform ? catMessage: prodMessage }
						</button>
					</div>
					{ pform
						? <ProductForm />
						: <CategoryForm />
					}
				</div>
			</div>
		);
	}
}

export default AdminPage;
