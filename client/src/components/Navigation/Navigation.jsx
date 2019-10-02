import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';



function Navigation() {
	return (
		<div className="navigation">
			<ResponsiveMenu
		        menuOpenButton={<i className="fas fa-bars"></i>}
		        menuCloseButton={<i className="fas fa-times"></i>}
		        changeMenuOn="500px"
		        largeMenuClassName="large-menu-classname"
		        smallMenuClassName="small-menu-classname"
		        menu={
		          	<ul>
						<Link to="/parts">
							<li>Car Parts</li>
						</Link>
						<Link to="/map&direction">
							<li>Map & Direction</li>
						</Link>
						<Link to="/contact">
							<li>Contact Us</li>
						</Link>
					</ul>
		        }
		    />
		</div>
	)
}

export default Navigation;
