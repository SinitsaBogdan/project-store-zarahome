import React from 'react';

import { Link } from 'react-router-dom';

import '../style/Catalog.css';
import { NavBar, Crumbs, Filters } from '../../../features';

// Data
import Products from '../../../entities/Product/data/index.json';
import { Product } from '../../../entities';

export default function Catalog({ sort, title }) {
	return (
		<section className='Catalog'>
			<NavBar />
			<div className='Catalog_Content'>
				<Crumbs />
				<h2 className='Catalog_Content__title'>{title}</h2>
				<Filters />
				<ul className='Catalog_Content__products'>
					{Products.filter((item) => item.tag === sort).map((item, index) => {
						return (
							<li key={index} className='Catalog_Content__item'>
								<Product {...item} />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
