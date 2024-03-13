import React from 'react';
import { Link } from 'react-router-dom';

import json from '../data/index.json';

import '../style/Navigation.css';

export default function Navigation() {
	return (
		<nav className='Navigation'>
			<ul className='Navigation__nav'>
				{json.map((item, index) => {
					return (
						<li key={index} className='Navigation__navItem'>
							<Link to={`${item.url}`} className='Navigation__navLink'>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
