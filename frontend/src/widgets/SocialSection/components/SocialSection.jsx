import React from 'react';

// Data
import dataSocials from '../../../entities/Social/data/index.json';

import '../style/SocialSection.css';
import { Social } from '../../../entities';

export default function SocialSection() {
	return (
		<section class='SocialSection'>
			<header class='SocialSection__header'>
				<h2 class='SocialSection__header_title'>Не нашли ответ на свой вопрос?</h2>
				<p class='SocialSection__header_descriptions'>Мы всегда готовы прийти на помощь</p>
			</header>
			<ul class='SocialSection__list'>
				{dataSocials.map((item, index) => {
					return (
						<li key={index} class='SocialSection__item'>
							<Social {...item} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
