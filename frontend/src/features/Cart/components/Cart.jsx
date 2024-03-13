import React from 'react';

import style from '../style/Cart.css';

// UI elements
import { CartLinkUI } from '../../../shared/ui';

export default function Cart({ amount = 0 }) {
	return (
		<div className={style.root}>
			<CartLinkUI />
			<span className={style.amount}>{amount} ₽</span>
		</div>
	);
}
