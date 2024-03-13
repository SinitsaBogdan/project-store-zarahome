import React from 'react';

// import { Link } from 'react-router-dom';

import '../style/Partition.css';

export default function Partition(props) {
	return (
		<a href={props.href} className='Partition'>
			<div class='Partition__content'>
				<h2 class='Partition__title'>Спальня</h2>
				<p class='Partition__text'>Для комфортного сна и отдыха</p>
			</div>
		</a>
	);
}
