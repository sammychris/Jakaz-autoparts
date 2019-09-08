import React from 'react';


class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="header">
				<div className="header-content">
					<div className="logo">
						<img src="/images/logo.png"/>
					</div>
					<div className="container">
						<div className="address">
							<div>Block G 75-76 Tundas<br/>International Market Bakasi</div>
							<div>Ladipo (OSHODI, LAGOS)</div>
						</div>
						<div className="contact">
							<div><span>Phone:</span> +2349026586217</div>
							<div><span>Whatsapp:</span> +2348102578257</div>
						</div>
						<div className="time">
							<div><span>Business Hours</span></div>
							<div>Mon - Sat: 8:00am - 5:00pm</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Header;
