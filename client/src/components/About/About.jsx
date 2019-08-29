import React from 'react';


class About extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="about">
				<div id="about-us">
					<h1>The Home of Quality Parts at Affordable Price!</h1>
					<p>
						Thanks for choosing Jakaz Auto Parts for your automotive needs. We specialize 
						in late model vehicles 2000 and newer models, including foreign and domestics 
						makes of cars, trucks, SUVs and Jeeps.
					</p>
					<p>
						All parts are thoroughly inspected prior to sale, and we back all parts with 
						a quality 2 months standard warranty! Extended warranties are also available, 
						including 6 months, 1-year and labour warranties.
					</p>
					<p>
						We do our best to provide fand and friendly service, to you our loyal customers.
					</p>
				</div>
				<div className="slider">
					Image Sliders
				</div>
			</div>
		)
	}

}

export default About;
