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
								<div className="icons">
									<i className="fas fa-map-marker-alt"></i>
									<div>
										Block G 75 - 76 Tundas International Market,
										<br/>Bakasi Ladipo (Oshodi, Lagos).
									</div>
								</div>
								<div className="icons">
									<i className="fas fa-phone-square"></i>
									<div>+2349026586217</div>
								</div>
								<div className="icons">
									<i className="fab fa-whatsapp-square"></i>
									<div>+2348102578257</div>
								</div>
							</div>
						</div>
						<div className="holder">
							<div className="foot-navigation">
								<div className="icons">
									<i className="fas fa-search-plus"></i>
									<div>Search Inventory</div>
								</div>
								<div className="icons">
									<i className="fas fa-map-marker"></i>
									<div>Map & Direction</div>
								</div>
								<div className="icons">
									<i className="fas fa-envelope"></i>
									<div>Contact Us</div>
								</div>
							</div>
						</div>
						<div className="holder">
							<div className="social">
								<h3>Contact us</h3>
								<div className="icons">
									<i className="fab fa-facebook-square"></i>
									<div>Like us on Facebook</div>
								</div>
								<div>
									<div className="icons">
										<i className="fab fa-twitter-square"></i>
										<div>Follow us on Twitter</div>
									</div>
									<div className="icons">
										<i className="fab fa-google-plus-square"></i>
										<div>Gmail Us</div>
									</div>
									<div className="icons">
										<i className="fab fa-instagram"></i>
										<div>Follow us on Instagram</div>
									</div>
								</div>
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
