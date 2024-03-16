import React from 'react';

import { Link } from 'react-router-dom';

import '../style/Reviews.css';

export default function Reviews() {
	return (
		<article class='Reviews'>
			<Link to='/reviews' class='Reviews__link'>
				Смотреть все отзывы
			</Link>
		</article>
	);
}
