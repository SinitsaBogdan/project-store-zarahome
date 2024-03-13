import React from 'react';

// UI elements
import { LogoUI, ProfileUI, LikeLinkUI } from '../../../shared/ui';

// styles
import '../style/Header.css';

// features
import { Cart, Navigation } from '../../../features';

export default function Header() {
	return (
		<header className='Header'>
			<div className='Header__content'>
				<div>
					<a className='Header__phone' href='tel:+78000008000'>
						8 (800) 000 80 00
					</a>
					<p className='Header__schedule'>Работаем сегодня с 9:00 до 20:00</p>
				</div>
				<LogoUI />
				<div className='Header__features'>
					<ProfileUI />
					<LikeLinkUI />
					<Cart />
				</div>
			</div>
			<Navigation />
		</header>
	);
}
