import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Search from '../Search';


function Banner () {
	return (
		<div className="banner">
			<div className="hero">
				<div className="float-search">
					<Search />
				</div>
			</div>
			<div className="hero">
				<div className="wrnty">
					<div id="day">60 day</div>
					<div id="warranty">WARRANTY</div>
				</div>
			</div>
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
            	<div className="banner-slide">
                    <img src="/images/banner.jpg" />
                    <p className="legend">In Need of Any Car Parts? Please Call Us to Get Prices!</p>
                </div>
                <div className="banner-slide">
                    <img src="/images/banner1.jpg" />
                    <p className="legend">We also deliver to your door step</p>
                </div>
                <div className="banner-slide">
                    <img src="/images/banner2.jpg" />
                    <p className="legend">We also deliver to your door step</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
