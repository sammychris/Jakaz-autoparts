import React from 'react';
import { Link } from 'react-router-dom';


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sItems: [],
			sLength: 0,
			search: '',
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.displaySearched = this.displaySearched.bind(this);
	}

	handleSearch(e) {
		const { value } = e.target;
		const vLength = value.length;
		this.setState({ sLength: vLength, search: value });
		if(!vLength) return;
		fetch('api/product/search?q='+value)
			.then(a => a.json())
			.then(res => this.setState({ sItems: res }));
	}

	displaySearched() {
		const { sItems, sLength } = this.state;
		return sItems.length && sLength
		? (
			<ul className="search-items">
				{ sItems.map(each => {
					const { name, id } = each;
					const url = name.replace(/\s/g, '-');
					return	(
						<Link to={ '/parts/'+url+'/'+id} >
							<li>{each.q}</li>
						</Link>
					)
				}) }
			</ul>
		)
		: '';
	}

	render() {
		const { search } = this.state;
		return (
			<div className="search-container">
				<form className="search" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
					<input
						required
						onChange={this.handleSearch}
						id="srchBox"
						type="text"
						placeholder="Enter: Make Model Year Part or only Partname"
					/>
					<Link to={"/parts/search?q="+search}><button id="srchBtn" >Search</button></Link>
				</form>
				{ this.displaySearched() }
			</div>
        );
	}

}

export default Search;
