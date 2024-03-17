import React from 'react';

// import { Link } from 'react-router-dom';

import '../style/ProductSmall.css';

export default function ProductSmall({ href, img, alt, title, description, price }) {
	return (
		<article class='ProductSmall'>
			<a href={href} class='ProductSmall__link'>
				<img class='ProductSmall__image' src={img} alt={alt} />
				<div class='ProductSmall__content'>
					<h2 class='ProductSmall__title'>{title}</h2>
					<p class='ProductSmall__descriptions'>{description}</p>
					<p class='ProductSmall__price'>
						{price} <span>₽</span>
					</p>
				</div>
			</a>
		</article>
	);
}
