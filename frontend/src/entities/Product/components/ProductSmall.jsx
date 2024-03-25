import React from 'react';

// import { Link } from 'react-router-dom';

import '../style/ProductSmall.css';

export default function ProductSmall({ href, img, alt, title, description, price }) {
	return (
		<article className='ProductSmall'>
			<a href={href} className='ProductSmall__link'>
				<img className='ProductSmall__image' src={img} alt={alt} />
				<div className='ProductSmall__content'>
					<h2 className='ProductSmall__title'>{title}</h2>
					<p className='ProductSmall__descriptions'>{description}</p>
					<p className='ProductSmall__price'>
						{price} <span>₽</span>
					</p>
				</div>
			</a>
		</article>
	);
}
