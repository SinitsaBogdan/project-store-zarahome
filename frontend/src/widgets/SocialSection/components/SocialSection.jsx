import React from 'react';

// Data
import dataSocials from '../../../entities/Social/data/index.json';

import '../style/SocialSection.css';
import { Social } from '../../../entities';

export default function SocialSection() {
	return (
		<section className='SocialSection'>
			<header className='SocialSection__header'>
				<h2 className='SocialSection__header_title'>Не нашли ответ на свой вопрос?</h2>
				<p className='SocialSection__header_descriptions'>
					Мы всегда готовы прийти на помощь
				</p>
			</header>
			<ul className='SocialSection__list'>
				{dataSocials.map((item, index) => {
					return (
						<li key={index} className='SocialSection__item'>
							<Social {...item} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
