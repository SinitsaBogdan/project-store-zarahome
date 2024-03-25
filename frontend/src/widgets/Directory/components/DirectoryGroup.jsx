import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/DirectoryGroup.css';

export default function DirectoryGroup({ title, content }) {
	const [children, setChildren] = useState(false);

	function onClickChildren() {
		setChildren(!children);
	}

	return (
		<article
			onClick={onClickChildren}
			className={`DirectoryGroup ${
				content < 1 ? 'DirectoryGroup__deactiv' : children ? 'DirectoryGroup__active' : ''
			}`}>
			<p className='DirectoryGroup__title'>{title}</p>
			<ul className='DirectoryGroup__list'>
				{content?.map((item, index) => {
					return (
						<li className='DirectoryGroup__item' key={index}>
							<Link to={item.href} className='DirectoryGroup__link'>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</article>
	);
}
