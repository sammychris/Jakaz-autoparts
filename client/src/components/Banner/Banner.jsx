import React from 'react';


class Banner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="hero">
				<div className="top">
					<div className="srchBtn">
						<a href="">
							<button>SEARCH OUR INVENTORY</button>
						</a>
					</div>
					<div className="wrnty">
						<div id="day">60 day</div>
						<div id="warranty">WARRANTY</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Banner;
