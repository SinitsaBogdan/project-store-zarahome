import React from 'react';

import { Link } from 'react-router-dom';

import '../style/Banner.css';

export default function Banner({ data }) {
	return (
		<section className='Banner'>
			<div className='Banner__image_wrapper'>
				<img className='Banner__image' src={data.image} alt={data.alt} />
			</div>
			<div className='Banner__content'>
				<h2 className='Banner__title'>{data.title}</h2>
				<p className='Banner__descriptions'>{data.descriptions}</p>
				<Link className='Banner__link' to={data.link}>
					{data.linkText}
				</Link>
			</div>
		</section>
	);
}
