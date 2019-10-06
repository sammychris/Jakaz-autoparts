import React from 'react';
import { Link } from 'react-router-dom';
import { Search, LoadIcon } from '../components';


class ListProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		}
		this.ListItems = this.ListItems.bind(this);
	}

	componentDidMount() {
		const { params } = this.props.match;
		let cat_id = '';
		if (params.pname) 
			cat_id = '/category/'+localStorage.getItem("category_id");
		fetch('/api/product' + cat_id)
			.then(res => res.json())
			.then(res => {
				this.setState({
					items: res,
				});
			});
	}

	ListItems(items) {
		return items.length
		? items.map(each => {
			let yearStr = '';
			const { make, model, year, name, id } = each;
			if (year) yearStr = year;
			return (
				<li>
					<Link to={`/parts/${name}/${id}`}>
						<img alt="" src={'/uploads/'+each.sample_photo} />
						<span>{`${make} ${model} ${yearStr} ${name}`}</span>
					</Link>
				</li>
			)
		})
		: <LoadIcon />;

	}

	render() {
		const { items } = this.state;
		const { params } = this.props.match;
		let message = 'All Car Parts';
		if (params.pname)
			message = 'All '+params.pname;
		
		return (
			<div className="list-product-page">
				<div className="handle-search">
					<Search />
				</div>
				<div className="list-product">
					<div className="title"><h1>{ message }</h1></div>
					<div className="items">
						<div id="title">We have any part of any Vehicle</div>
						<ul>
							{ this.ListItems(items) }
							<div className="seemore-container">
								<Link to="/parts" className="seemore-container_link">See More Parts</Link>
							</div>
						</ul>

					</div>
				</div>
			</div>
		)
	}

}

export default ListProductPage;
