import React from 'react';
import { Link } from 'react-router-dom';


function ListProduct (props) {
	const { items, linkPath } = props;
	const ListItems = items.map(each => {
		const { name, photo, id } = each;
		const url = name.replace(/\s/g, '-');
		return (
			<li>
				<Link to={'/parts/'+url} onClick={this.handle_Id(id)}>
					<img src={'/uploads/'+photo} />
					<span>{name}</span>
				</Link>
			</li>
		);
	})
	return (
		<ul>
			{ items[0] && this.ListItems(items) }
			<div className="seemore-container">
				<a href="/parts" className="seemore-container_link">See All Parts</a>
			</div>
		</ul>
	)

}

export default ListProduct;
