import React from 'react';
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
                </div>
			)
		})
	 }

	render() {
		let yearStr = '';
		const { product, photos } = this.state;
		const { make, model, year, name  } = product;
		if (year) yearStr = year;
		return (
			<div className="container">
				<div className="product-page">
					{ make
						? (
							<div className="product-container">
								<Carousel infiniteLoop={true} autoPlay={true} className="main-img">
				                	{ this.ProductPhotos(photos) }
					            </Carousel>
								<div className="write-up">
									<h1>{`${make} ${model} ${yearStr} ${name}`}</h1>
									<div className="content">
										<div className="car-info">
											<div><span>Make: </span>{make}</div>
											<div><span>Model: </span>{model}</div>
											<div><span>Year: </span>{yearStr}</div>
											<div><span>Name: </span>{name}</div>
										</div>
										<div className="details">Buy at discount prices with 60day warranty.</div>
										<div className="details">We also ship to your door step.</div>
										<div className="details">To Order</div>
										<div className="details">Call: <span>+2348102578257</span></div>
										<div className="details">Whatsapp: <span>+2349026586217</span></div>
									</div>
								</div>
							</div>
						)
						: ''
					}
				</div>
			</div>
		);
	}
}

export default ProductPage;
