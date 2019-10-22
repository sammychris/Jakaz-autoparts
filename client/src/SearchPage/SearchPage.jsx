import React from 'react';
import { Link } from 'react-router-dom';
import { Search, LoadIcon } from '../components';



const HandleDisplay = (props) => {
	const { D, it } = props
	const Display = it? <D items={it}/>: <D />
	return (
		<div className="items">
			<div id="title">We have any part of any Vehicle</div>
			<ul>
				{ Display }
				<div className="seemore-container">
					<Link to="/parts" className="seemore-container_link">See More Parts</Link>
				</div>
			</ul>
		</div>
	)
}



const ListItems = (props) => {
	let yearStr = '';
	const { items } = props;
	return items.map(each => {
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
}




class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: undefined,
		}
		this.updatesHandler = this.updatesHandler.bind(this);
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

	updatesHandler(search) {
		this.setState({ items: undefined }); // reinitially state items to undefined
		fetch('/api/product/search?q='+search)
			.then(res => res.json())
			.then(res => {
				this.setState({
					items: res,
				});
			});
	}

	render() {
		const { search } = this.props.location;
		const title = search.replace(/.+=/, '');
		const { items } = this.state;
		return (
			<div className="list-product-page">
				<div className="list-product">
					<div className="handle-search">
						<Search updatesHandler={this.updatesHandler}/>
					</div>
					<div className="title"><h1>Search Result: {title}</h1></div>
					{
						!items 
						? <HandleDisplay D={LoadIcon} />
						: items[0]
							? <HandleDisplay it={items} D={ListItems} />
							: (
								<div className="title">
									<h2>No result found? Call:  <span style={{color: '#23407e'}}>+2348102578257</span></h2>
								</div>
								)
					}
				
				</div>
			</div>
		)
	}

}

export default SearchPage;
