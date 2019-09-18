import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Header, Navigation, Banner, About, Footer } from '../components';
import { ProductPage } from '../ProductPage';


class ListProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [{}],
		}
		this.ListItems = this.ListItems.bind(this);
	}

	componentDidMount() {
		const { params } = this.props.match;
		let query = '';
		if (params.partsname) query = '?name='+params.partsname;
		fetch('/api/product' + query)
			.then(res => res.json())
			.then(res => {
				this.setState({
					items: res,
				});
			});
	}

	ListItems(items) {
		return items.map(each => {
			const { name, id } = each;
			return (
				<li>
					<Link to={`/parts/${name}/${id}`}>
						<img src={'/uploads/'+each.sample_photo} />
						<span>{each.name}</span>
					</Link>
				</li>
			)
		});
	}

	render() {
		const { items } = this.state;
		return (
			<div className="container">
				<h1>List all project</h1>
				<div className="items">
					<div id="title">We have any part of any Vehicle</div>
					<ul>
						{ this.ListItems(items) }
						<div className="seemore-container">
							<a href="/parts" class="seemore-container_link">See More Parts</a>
						</div>
					</ul>

				</div>
			</div>
		)
	}

}

export default ListProductPage;
