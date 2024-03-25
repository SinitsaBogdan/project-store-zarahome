import React from 'react';

import { Link } from 'react-router-dom';

import '../style/Product.css';
import { CartButtonUI, LikeButtonUI } from '../../../shared/ui';
import { FormSelectColor, Pagination } from '../../../features';

export default function Product({id, href, img, alt, title, description, price }) {
	return (
		<article className='Product'>
			<Link to={href + id} className='Product__link'>
				<img className='Product__image' src={img} alt={alt} />
				<Pagination />
				<LikeButtonUI />
				<FormSelectColor />
				<div className='Product__content'>
					<h2 className='Product__title'>{title}</h2>
					<p className='Product__description'>{description}</p>
					<div className='Product__price_wrapper'>
						<p className='Product__price'>
							{price}
							<span className='Product__price_kurs'>₽</span>
						</p>
						<CartButtonUI />
					</div>
				</div>
			</Link>
		</article>
	);
}
