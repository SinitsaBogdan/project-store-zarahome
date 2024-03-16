import React from 'react';

import '../style/Pagination.css';

export default function Pagination({ coll }) {
	const list = Array.from(Array(coll).keys());
	return (
		<ul className='Pagination'>
			{list.map((index, n) => {
				return (
					<li
						key={index}
						className={`Paginations__item ${
							index === 0 && 'Paginations__active'
						}`}></li>
				);
			})}
		</ul>
	);
}
