import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";


class Banner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// const handleOnDragStart = e => e.preventDefault()
		  // return (
		  //   <AliceCarousel mouseDragEnabled >
		  //     <img style={{ height: '600px', width: '100%'}} src="https://www.frooition.com/blog/wp-content/uploads/2018/10/iStock-927781468.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
		  //     <img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
		  //     <img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" />
		  //     <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />
		  //     <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" />
		  //   </AliceCarousel>
		  // )

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
