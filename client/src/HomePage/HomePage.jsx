import React from 'react';
import { Header, Navigation } from '../components';


class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Navigation />
			</div>
		)
	}

}

export default HomePage;
