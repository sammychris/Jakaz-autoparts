import React from 'react';


class Banner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="hero">
				<div className="top-call">
					<a href="#">
						<button id="srchBtn">
							SEARCH OUR INVENTORY
						</button>
					</a>
					<div className="wrnty">
						<div id="day">60 day</div>
						<div id="warranty">WARRANTY</div>
					</div>
				</div>
				<div className="mid-call">
					<h1>In Need of Any Car Parts? Please Call Us to Get Prices!</h1>
				</div>
			</div>
		)
	}

}

export default Banner;
