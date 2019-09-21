import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const search = {
	display: 'block',
	height: '100vh',
	zIndex: '1',
}

class Banner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// return (
		// 	<div className="hero">
		// 		<div className="top-call">
		// 			<a href="#">
		// 				<button id="srchBtn">
		// 					SEARCH OUR INVENTORY
		// 				</button>
		// 			</a>
		// 			<div className="wrnty">
		// 				<div id="day">60 day</div>
		// 				<div id="warranty">WARRANTY</div>
		// 			</div>
		// 		</div>
		// 		<div className="mid-call">
		// 			<h1>In Need of Any Car Parts? Please Call Us to Get Prices!</h1>
		// 		</div>
		// 	</div>
		// )

		return (
			<div className="banner">

				{
					// <div className="hero">
					// 				<div className="top-call">
					// 					<a href="#">
					// 						<button id="srchBtn">
					// 							SEARCH OUR INVENTORY
					// 						</button>
					// 					</a>
					// 					<div className="wrnty">
					// 						<div id="day">60 day</div>
					// 						<div id="warranty">WARRANTY</div>
					// 					</div>
					// 				</div>
					// 				<div className="mid-call">
					// 					<h1>In Need of Any Car Parts? Please Call Us to Get Prices!</h1>
					// 				</div>
					// 			</div>
							}
				<div className="outside">
					<div className="inside">orange</div>
				</div>
	            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} >
	                <div className="banner-slide">
	                    <img src="/images/banner2.jpg" />
	                    <p className="legend">In Need of Any Car Parts? Please Call Us to Get Prices!</p>
	                </div>
	                <div className="banner-slide">
	                    <img src="/images/banner3.jpg" />
	                    <p className="legend mid-call">engines</p>
	                </div>
	            </Carousel>
            </div>
        );
	}

}

export default Banner;
