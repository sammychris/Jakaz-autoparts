import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../components';


class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		}
		this.ListItems = this.ListItems.bind(this);
	}

	componentDidMount() {
		const { search } = this.props.location;
		fetch('/api/product/search'+search)
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
			const { make, model, year, name, id } = each;
			return (
				<li>
					<Link to={`/parts/${name}/${id}`}>
						<img alt="" src={'/uploads/'+each.sample_photo} />
						<span>{`${make} ${model} ${year} ${name}`}</span>
					</Link>
				</li>
			)
		})
		: '';

	}

	render() {
		const { search } = this.props.location;
		const title = search.replace(/.+=/, '');
		const { items } = this.state;
		return (
			<div className="list-product-page">
				<div className="list-product">
					<div className="handle-search">
						<Search />
					</div>
					<div className="title"><h1>Search Result: {title}</h1></div>
					{ !items[0]
						?(
							<div className="title">
								<h2>No result found? Call:  <span style={{color: '#23407e'}}>+2348102578257</span></h2>
							</div>
						)
						:(
							<div className="items">
								<div id="title">We have any part of any Vehicle</div>
								<ul>
									{ this.ListItems(items) }
									<div className="seemore-container">
										<a href="/parts" className="seemore-container_link">See More Parts</a>
									</div>
								</ul>
							</div>
						)
					}
				</div>
			</div>
		)
	}

}

export default SearchPage;
