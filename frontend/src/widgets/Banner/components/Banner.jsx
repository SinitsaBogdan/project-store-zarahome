import React from 'react';

import { Link } from 'react-router-dom';

import '../style/Banner.css';

export default function Banner({ data }) {
	return (
		<section className='Banner'>
			<div class='Banner__image_wrapper'>
				<img class='Banner__image' src={data.image} alt={data.alt} />
			</div>
			<div class='Banner__content'>
				<h2 class='Banner__title'>{data.title}</h2>
				<p class='Banner__descriptions'>{data.descriptions}</p>
				<Link class='Banner__link' to={data.link}>
					{data.linkText}
				</Link>
			</div>
		</section>
	);
}
