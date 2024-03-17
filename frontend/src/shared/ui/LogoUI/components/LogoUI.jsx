import React from 'react';

import { ReactComponent as LogoSVG } from '../../../assets/icon/logo.svg';
import { Link } from 'react-router-dom';

export default function Logo({ link = '/' }) {
	return (
		<Link className='Logo' to={link}>
			<LogoSVG className='Logo__svg' />
		</Link>
	);
}
