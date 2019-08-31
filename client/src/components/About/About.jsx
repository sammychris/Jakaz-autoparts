import React from 'react';


class About extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="about">
				<div className="about-us">
					<h1>The Home of Quality Parts at Affordable Price!</h1>
					<div className="about-writeup">
						<p>
							Thanks for choosing Jakaz Auto Parts for your automotive needs. We specialize 
							in late model vehicles 2000 and newer models, including foreign and domestics 
							makes of cars, trucks, SUVs and Jeeps.
							All parts are thoroughly inspected prior to sale, and we back all parts with 
							a quality 2 months standard warranty! Extended warranties are also available, 
							including 6 months, 1-year and labour warranties.
						</p>
						<p>
							We do our best to provide fast and friendly service, to you our loyal customers.
						</p>
						<h3>Thanks for choosing Jakaz</h3>
					</div>
				</div>
				<div className="slider">
					<div id="title">We have any part of any Vehicle</div>
					<div className="first">
						<img src="https://img-new.cgtrader.com/items/311842/570494614a/photorealistic-car-tire-3d-model-max-obj-fbx.jpg"/>
						<img src="https://www.goodyear.com/images/tireImages/goodyear/media/Ultra_Grip_Ice_WRT_CT_Side_2179.jpg"/>
						<img src="https://cdn.shopify.com/s/files/1/0152/0585/products/FA142_FA812_Front_1024x1024.jpg?v=1527514008"/>
					</div>
					<div className="second">
						<img src="https://cdn.shopify.com/s/files/1/0699/6735/products/JET_f31b6c3e-c488-45c0-b990-5c86c62470fa_x700.png?v=1547058005" />
						<img src="https://cdn.shopify.com/s/files/1/0699/6735/products/Drifting_33_blue_7db8b2bf-ca9a-4a49-87ea-8ae39e7090c7_x700.png?v=1547058042" />
						<img src="https://blog.automart.co.za/wp-content/uploads/2016/04/corvette-engine.jpg" />
					</div>
				</div>
			</div>
		)
	}

}

export default About;
