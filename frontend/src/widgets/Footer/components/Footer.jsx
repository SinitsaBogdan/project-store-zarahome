import React from 'react';

import '../style/Footer.css';

import json from '../data/index.json';

// UI elements
import { LogoUI } from '../../../shared/ui';

export default function Footer() {
	return (
		<footer className='Footer'>
			<nav className='Footer__nav'>
				<div className='Footer__section'>
					<h2 className='Footer__title'>Магазин</h2>
					<div className='Footer__row_wrapper'>
						<ul className='Footer__list'>
							{json[0].store.first.map((item, index) => {
								return (
									<li key={index} className='Footer__navItem'>
										<a href={item.url} className='Footer__navLink'>
											{item.title}
										</a>
									</li>
								);
							})}
						</ul>
						<ul className='Footer__list'>
							{json[0].store.last.map((item, index) => {
								return (
									<li key={index} className='Footer__navItem'>
										<a href={item.url} className='Footer__navLink'>
											{item.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className='Footer__section'>
					<h2 className='Footer__title'>Помощь</h2>
					<ul className='Footer__list'>
						{json[0].helpers.map((item, index) => {
							return (
								<li key={index} className='Footer__navItem'>
									<a href={item.url} className='Footer__navLink'>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='Footer__section'>
					<h2 className='Footer__title'>Контакты</h2>
					{json[0].contacts.map((item, index) => {
						return (
							<li key={index} className='Footer__navItem'>
								<a href={item.url} className='Footer__navLink'>
									{item.title}
								</a>
							</li>
						);
					})}
					<LogoUI />
				</div>
			</nav>
			<p className='Footer__descriptions'>
				Содержание этого сайта защищено авторским правом и является собственностью ZARAHOME.
				ZARAHOME стремится к доступности.
			</p>
			<p className='Footer__rights'>© 2023 ZARAHOME. Все права защищены.</p>
		</footer>
	);
}
