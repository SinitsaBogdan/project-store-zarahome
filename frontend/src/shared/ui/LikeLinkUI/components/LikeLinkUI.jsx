import React from 'react';

import { ReactComponent as LikeSVG } from '../../../assets/icon/like.svg';

export default function LikeLinkUI({ link = '#!' }) {
	return (
		<a href={link}>
			<LikeSVG />
		</a>
	);
}
