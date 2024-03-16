import React from 'react';

import '../style/Advantages.css';
import { RatingStar, Reviews } from '../../../features';

export default function Advantages({ data }) {
	return (
		<section className='Advantages'>
			<header class='Advantages_Header'>
				<h2 class='Advantages_Header__title'>Почему выбирают нас?</h2>
				<p class='Advantages_Header__descriptions'>Наши преимущества</p>
			</header>
			<div class='Advantages__wrapper'>
				<img class='Advantages__image_left' src='../images/advantages/left.png' alt='' />
				<img class='Advantages__image_right' src='../images/advantages/right.png' alt='' />
				<div class='Advantages__content'>
					<div class='Advantages__content_left Advantages__content_block'>
						<h3 class='Advantages__content_title'>100% Оригинальный товар</h3>
						<p class='Advantages__content_descriptions'>Предоставляем чеки о покупке</p>
					</div>
					<div class='Advantages__content_block'>
						<h3 class='Advantages__content_title'>Удобная оплата</h3>
						<p class='Advantages__content_descriptions'>
							Работаем через платежный терминал от Тинькофф. Принимаем карты
							российских банков
						</p>
					</div>
				</div>
				<h3 class='Advantages___about_title'>О нас говорят</h3>
				<p class='Advantages__about_descriptions'>
					Наша команда всегда заботится о каждом клиенте и старается предоставить
					высококачественный сервис и максимально удобные условия сотрудничества
				</p>
				<ul class='Advantages__list'>
					<li class='Advantages__item'>
						<h4 class='Advantages__item_title'>200+</h4>
						<p class='Advantages__item_descriptions'>Доставок в этом году</p>
					</li>
					<li class='Advantages__item'>
						<h4 class='Advantages__item_title'>600</h4>
						<p class='Advantages__item_descriptions'>Отзывов на Отзовик.ru</p>
					</li>
					<li class='Advantages__item'>
						<h4 class='Advantages__item_title'>71%</h4>
						<p class='Advantages__item_descriptions'>Клиентов нас рекомендуют</p>
					</li>
				</ul>
				<RatingStar />
				<Reviews />
			</div>
		</section>
	);
}
