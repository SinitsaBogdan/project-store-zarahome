import React from 'react';

// import { Link } from 'react-router-dom';

import '../style/Partition.css';

export default function Partition(props) {
	return (
		<a href={props.href} className='Partition'>
			<div className='Partition__img_wrapper'>
				<img src={props.img} alt={props.alt} className='Partition__img' />
			</div>
			<div className='Partition__content'>
				<h2 className='Partition__title'>{props.title}</h2>
				<p className='Partition__text'>{props.description}</p>
			</div>
		</a>
	);
}
