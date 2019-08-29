import React from 'react';


class Navigation extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="navigation">
				<ul>
					<li>Search Inventory</li>
					<li>Map & Direction</li>
				</ul>
			</div>
		)
	}

}

export default Navigation;
