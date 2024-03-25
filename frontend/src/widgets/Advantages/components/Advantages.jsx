import React from 'react';

import '../style/Advantages.css';
import { RatingStar, Reviews } from '../../../features';

export default function Advantages({ data }) {
	return (
		<section className='Advantages'>
			<header className='Advantages_Header'>
				<h2 className='Advantages_Header__title'>Почему выбирают нас?</h2>
				<p className='Advantages_Header__descriptions'>Наши преимущества</p>
			</header>
			<div className='Advantages__wrapper'>
				<img
					className='Advantages__image_left'
					src='../images/advantages/left.png'
					alt=''
				/>
				<img
					className='Advantages__image_right'
					src='../images/advantages/right.png'
					alt=''
				/>
				<div className='Advantages__content'>
					<div className='Advantages__content_left Advantages__content_block'>
						<h3 className='Advantages__content_title'>100% Оригинальный товар</h3>
						<p className='Advantages__content_descriptions'>
							Предоставляем чеки о покупке
						</p>
					</div>
					<div className='Advantages__content_block'>
						<h3 className='Advantages__content_title'>Удобная оплата</h3>
						<p className='Advantages__content_descriptions'>
							Работаем через платежный терминал от Тинькофф. Принимаем карты
							российских банков
						</p>
					</div>
				</div>
				<h3 className='Advantages___about_title'>О нас говорят</h3>
				<p className='Advantages__about_descriptions'>
					Наша команда всегда заботится о каждом клиенте и старается предоставить
					высококачественный сервис и максимально удобные условия сотрудничества
				</p>
				<ul className='Advantages__list'>
					<li className='Advantages__item'>
						<h4 className='Advantages__item_title'>200+</h4>
						<p className='Advantages__item_descriptions'>Доставок в этом году</p>
					</li>
					<li className='Advantages__item'>
						<h4 className='Advantages__item_title'>600</h4>
						<p className='Advantages__item_descriptions'>Отзывов на Отзовик.ru</p>
					</li>
					<li className='Advantages__item'>
						<h4 className='Advantages__item_title'>71%</h4>
						<p className='Advantages__item_descriptions'>Клиентов нас рекомендуют</p>
					</li>
				</ul>
				<RatingStar />
				<Reviews />
			</div>
		</section>
	);
}
