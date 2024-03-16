import React, { useState } from 'react';

import '../style/Question.css';

export default function Question({ title, descriptions }) {
	const [active, setActive] = useState(false);

	function onClickActive() {
		setActive(!active);
	}

	return (
		<button
			type='button'
			onClick={onClickActive}
			className={`Question ${active ? 'Question__active' : ''}`}>
			<span className='Question__arrow'></span>
			<span className='Question__title'>{title}</span>
			<p className='Question__descriptions'>{descriptions}</p>
		</button>
	);
}
