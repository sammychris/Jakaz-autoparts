import React from 'react';


class Footer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="footer">
				<div className="container">
					<div className="footer-cont">
						<div className="holder">
							<div className="address">
								<div>
									Block G 75 - 76 Tundas International Market,
									<br/>Bakasi Ladipo (Oshodi, Lagos).
								</div>
								<div>
									+2349026586217
								</div>
								<div>
									+2348102578257
								</div>
							</div>
						</div>
						<div className="holder">
							<div className="foot-navigation">
								<div>Search Inventory</div>
								<div>Map & Direction</div>
								<div>Contact Us</div>
							</div>
						</div>
						<div className="holder">
							<div className="social">
								<h3>Contact us</h3>
								<div>Like us on Facebook</div>
								<div>Gmail us</div>
							</div>
						</div>
					</div>
					<p>@2019 Jakaz Auto Parts - All Right Reserved</p>
				</div>
			</div>
		)
	}

}

export default Footer;
