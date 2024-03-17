import React from 'react';

import '../style/DirectoryCategory.css';
import DirectoryGroup from './DirectoryGroup';

export default function DirectoryCategory({ title, content }) {
	return (
		<article className='DirectoryCategory'>
			<h2 className='DirectoryCategory__title'>{title}</h2>
			<ul className='DirectoryCategory__list'>
				{content?.map((item, index) => {
					return (
						<li className='DirectoryCategory__item' key={index}>
							<DirectoryGroup {...item} />
						</li>
					);
				})}
			</ul>
		</article>
	);
}
