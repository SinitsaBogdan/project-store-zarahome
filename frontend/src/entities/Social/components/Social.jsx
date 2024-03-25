import React from 'react';

import '../style/Social.css';

export default function Social({ href, img, alt, title, description }) {
	return (
		<a className='Social' href={href}>
			<img className='Social__icon' src={img} alt={alt} />
			<h2 className='Social__title'>{title}</h2>
			<p className='Social__descriptions'>{description}</p>
		</a>
	);
}
