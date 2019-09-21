import React from 'react';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="navigation">
				<ul>
					<li>Search Inventory</li>
					<Link to="/map&direction">
						<li>Map & Direction</li>
					</Link>
					<li>Contact Us</li>
				</ul>
			</div>
		)
	}

}

export default Navigation;
