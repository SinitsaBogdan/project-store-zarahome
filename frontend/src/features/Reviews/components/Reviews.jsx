import React from 'react';

import { Link } from 'react-router-dom';

import '../style/Reviews.css';

export default function Reviews() {
	return (
		<article className='Reviews'>
			<Link to='/reviews' className='Reviews__link'>
				Смотреть все отзывы
			</Link>
		</article>
	);
}
