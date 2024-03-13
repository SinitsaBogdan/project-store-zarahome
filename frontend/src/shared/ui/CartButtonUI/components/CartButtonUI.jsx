import React from 'react';

import { ReactComponent as CartSVG } from '../../../assets/icon/cart.svg';

import '../style/CartButtonUI.css';

export default function CartButtonUI({ link = '#!' }) {
	return (
		<button type='buttom' className='CartButtonUI'>
			<span className='CartButtonUI__title'>В корзину</span>
			<CartSVG />
		</button>
	);
}
