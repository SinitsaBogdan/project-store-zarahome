import React from 'react';

import { ReactComponent as LikeSVG } from '../../../assets/icon/like.svg';

import '../style/LikeButtonUI.css';

export default function LikeButtonUI({ link = '#!' }) {
	return (
		<button type='buttom' className='LikeButtonUI'>
			<LikeSVG />
		</button>
	);
}
