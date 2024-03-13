import React from 'react';

import { ReactComponent as ProfileSVG } from '../../../assets/icon/profile.svg';

export default function ProfileUI({ link = '#!' }) {
	return (
		<a href={link}>
			<ProfileSVG />
		</a>
	);
}
