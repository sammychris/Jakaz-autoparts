import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Header, Navigation, Banner, About, Footer } from '../components';


class ProductPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="product">
					<div className="main-img">
						<img src="https://ae01.alicdn.com/kf/HTB1b6SeXoLrK1Rjy0Fjq6zYXFXaf/1-5-rc-baja-parts-Rovan-baja-rc-car-parts-BAJA-double-exhaust-pipe-with-muffler.jpg"/>
					</div>
					<div className="write-up">
						<h1>Product title</h1>
						<div className="content">
							<p>The main purpose</p>
							<div>
								Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. 
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductPage;
