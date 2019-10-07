import React from 'react';
import { Link } from 'react-router-dom';
import LoadIcon from '../LoadIcon';


class About extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [],
		}
		this.ListItems = this.ListItems.bind(this);
		this.handle_Id = this.handle_Id.bind(this);
	}

	componentDidMount() {
		fetch('/api/product/category')
			.then(res => res.json())
			.then(res => {
				this.setState({
					items: res,
				});
			});
	}

	handle_Id(id) {
		return () => localStorage.category_id = id;
	}

	ListItems(items) {
		return items.map((each, i) => {
			const { name, photo, id } = each;
			const url = name.replace(/\s/g, '-');
			return (
				<li key={i}>
					<Link to={'/parts/'+url} onClick={this.handle_Id(id)}>
						<img alt="" src={'/uploads/'+photo} />
						<span>{name}</span>
					</Link>
				</li>
			);
		})
	}

	render() {
		const { items } = this.state;
		return (
			<div className="about">
				<div className="about-us">
					<h1>The Home of Quality Parts at Affordable Price!</h1>
					<div className="about-writeup">
						<p>
							Thanks for choosing Jakaz Auto Parts for your automotive needs. We specialize 
							in late model vehicles 2000 and newer models, including foreign and domestics 
							makes of cars, trucks, SUVs and Jeeps.
							All parts are thoroughly inspected prior to sale, and we back all parts with 
							a quality 2 months standard warranty! Extended warranties are also available, 
							including 6 months, 1-year and labour warranties.
						</p>
						<p>
							We do our best to provide fast and friendly service, to you our loyal customers.
						</p>
						<p id="foot">Thanks for choosing Jakaz.</p>
					</div>
				</div>
				<div className="items">
					<div id="title">We have any part of any Vehicle</div>
					<ul>
						{ items[0]
							? this.ListItems(items)
							: <LoadIcon />
						}
						<div className="seemore-container">
							<a href="/parts" className="seemore-container_link">See All Parts</a>
						</div>
					</ul>

				</div>
			</div>
		)
	}

}

export default About;
