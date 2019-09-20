import React from 'react';
//import { Route, Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class ProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {},
			photos: [],
		}
		this.ProductPhotos = this.ProductPhotos.bind(this);
	}

	componentDidMount() {
		const { params } = this.props.match;
		fetch('/api/product/'+params.partid)
			.then(res => res.json())
			.then(res => {
				const { product, photos } = res;
				this.setState({ product, photos });
			});
	}

	ProductPhotos(photos){
	 	return photos.map(each => {
			const { filename } = each;
			return (
				<div>
                    <img src={'/uploads/'+filename}/>
                    <p className="legend">Christopher 3</p>
                </div>
			)
		})
	 }

	render() {
		const { product, photos } = this.state;
		const { make, model, year, name  } = product;
		return make ? (
			<div className="container">
				<div className="product">
					<Carousel infiniteLoop={true} autoPlay={true} className="main-img">
		                { this.ProductPhotos(photos) }
		            </Carousel>
					<div className="write-up">
						<h1>{`${make} ${model} ${year} ${name}`}</h1>
						<div className="content">
							<p>The main purpose</p>
							<div>
								Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. 
							</div>
						</div>
					</div>
				</div>
			</div>
		): '';
	}
}

export default ProductPage;
