import React from 'react';

import { ReactComponent as CartSVG } from '../../../assets/icon/cart.svg';

export default function CartLinkUI({ link = '#!' }) {
	return (
		<a href={link}>
			<CartSVG />
		</a>
	);
}
