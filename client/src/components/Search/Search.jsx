import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sItems: [],
			sLength: 0,
			search: '',
			submit: false,
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.displaySearched = this.displaySearched.bind(this);
	}

	handleSearch(e) {
		const { value } = e.target;
		const vLength = value.length;
		this.setState({ sLength: vLength, search: value, submit: false });
		if(!vLength) return;
		fetch('/api/product/search?q='+value)
			.then(a => a.json())
			.then(res => this.setState({ sItems: res }));
	}

	displaySearched() {
		const { sItems, sLength } = this.state;
		return sItems.length && sLength
		? (
			<ul className="search-items">
				{ sItems.map((each, i) => {
					const { name, id } = each;
					const url = name.replace(/\s/g, '-');
					return	(
						<Link key={i} to={ '/parts/'+url+'/'+id} >
							<li>{each.q}</li>
						</Link>
					)
				}) }
			</ul>
		)
		: '';
	}

	handleSubmit(e) {
		e.preventDefault();
		const { search } = this.state;
		const { updatesHandler } = this.props;
		this.setState({ submit: true });
		if (updatesHandler) updatesHandler(search);
	}
	render() {
		const { search, submit } = this.state;
		return (
			<div className="search-container">
				{ submit && <Redirect to={"/parts/search?q="+search} /> }
				<form className="search" autoComplete="off" onSubmit={this.handleSubmit}>
					<input
						required
						onChange={this.handleSearch}
						id="srchBox"
						type="text"
						placeholder="Enter: Make Model Year Part or only Partname"
					/>
					<button id="srchBtn">Search</button>
				</form>
				{ this.displaySearched() }
			</div>
        );
	}

}

export default Search;
