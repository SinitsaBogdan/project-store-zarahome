import React from 'react';

// Data
import data from '../../../app/data/CatalogNavigation.json';

import '../style/Directory.css';
import DirectoryCategory from './DirectoryCategory';

export default function Directory() {
	return (
		<ul className='Directory'>
			{data.map((item, index) => {
				return (
					<li key={index} className='Directory_item'>
						<DirectoryCategory {...item} />
					</li>
				);
			})}
		</ul>
	);
}
