import React from 'react';

// import { Link } from 'react-router-dom';

import '../style/PreviewCatalog.css';

// Data
import Products from '../../../entities/Product/data/index.json';

// Entity
import { Product } from '../../../entities';

export default function PreviewCatalog({ sort = 'new' }) {
	return (
		<section className='PreviewCatalog'>
			<ul className='PreviewCatalog__list'>
				{Products.filter((item) => item.tag === sort).map((item, index) => {
					if (index > 3) return null;
					return (
						<li key={index} className='Footer__navItem'>
							<Product {...item} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
