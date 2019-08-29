import React from 'react';
import { Header, Navigation, Banner, About, Footer } from '../components';


class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Navigation />
				<div className="container">
					<Banner />
					<div id="mid-call">
						In Need of Any Car Parts? Please Call Us to Get Prices!
					</div>
					<About />
					<div id="btm-call">
						We are proud of our works.
					</div>
					<Footer />
				</div>
			</div>
		)
	}

}

export default HomePage;
