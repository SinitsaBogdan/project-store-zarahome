import React from 'react';

import { ReactComponent as LogoSVG } from '../../../assets/icon/logo.svg';

export default function Logo({ link = '/' }) {
	return (
		<a href={link}>
			<LogoSVG />
		</a>
	);
}
