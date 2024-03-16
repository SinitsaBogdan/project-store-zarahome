import React from 'react';

import '../style/Social.css';

export default function Social({ href, img, alt, title, description }) {
	return (
		<a class='Social' href={href}>
			<img class='Social__icon' src={img} alt={alt} />
			<h2 class='Social__title'>{title}</h2>
			<p class='Social__descriptions'>{description}</p>
		</a>
	);
}
