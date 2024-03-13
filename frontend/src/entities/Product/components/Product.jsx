import React from 'react';

// import { Link } from 'react-router-dom';

import '../style/Product.css';
import { CartButtonUI, LikeButtonUI } from '../../../shared/ui';
import { FormSelectColor, Pagination } from '../../../features';

export default function Product({ href, img, alt, title, description, price }) {
	return (
		<article className='Product'>
			<a href={href} class='Product__link'>
				<img class='Product__image' src={img} alt={alt} />
				<Pagination />
				<LikeButtonUI />
				<FormSelectColor />
				<div class='Product__content'>
					<h2 class='Product__title'>{title}</h2>
					<p class='Product__description'>{description}</p>
					<div class='Product__price_wrapper'>
						<p class='Product__price'>
							{price}
							<span class='Product__price_kurs'>₽</span>
						</p>
						<CartButtonUI />
					</div>
				</div>
			</a>
		</article>
	);
}
