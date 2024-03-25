import React from 'react';

// Data
import Products from '../../../entities/Product/data/index.json';

import '../style/Search.css';
import ProductSmall from '../../../entities/Product/components/ProductSmall';

export default function Search({ value = 'кожан' }) {
	return (
		<article className='Search'>
			<input
				className='Search__input'
				type='text'
				placeholder='Что хотите найти?'
				value='кожан'
			/>
			<ul className='Search__list'>
				{Products.map((item, index) => {
					if (index <= 3) {
						return (
							<li key={index} className='Search__item'>
								<ProductSmall {...item} />
							</li>
						);
					} else {
						return null;
					}
				})}
			</ul>
		</article>
	);
}
