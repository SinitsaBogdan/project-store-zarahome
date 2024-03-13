import React from 'react';

import '../style/Pagination.css';

export default function Pagination({ coll }) {
	const list = Array.from(Array(coll).keys());
	return (
		<ul class='Pagination'>
			{list.map((index, n) => {
				return (
					<li
						key={index}
						class={`Paginations__item ${index === 0 && 'Paginations__active'}`}></li>
				);
			})}
		</ul>
	);
}
