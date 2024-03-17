import React, { useState } from 'react';

import '../style/NavBar.css';

// Data
import data from '../../../app/data/CatalogNavigation.json';

export default function NavBar() {
	const [chapterActive, setСhapterActive] = useState(-1);
	const [categoryActive, setCategoryActive] = useState(-1);

	function updateActive(chapter, category) {
		if (categoryActive === chapter) {
			setСhapterActive(0);
		} else {
			setСhapterActive(chapter);
		}
		if (categoryActive === category) {
			setCategoryActive(0);
		} else {
			setCategoryActive(category);
		}
	}

	console.log(chapterActive, categoryActive);

	return (
		<aside className='NavBar'>
			<menu className='NavBar__content'>
				<p className='NavBar__title'>Каталог товаров</p>
				<ul className='NavBar__list'>
					{data.map((chapter, chapterIndex) => {
						return (
							<li
								key={chapterIndex}
								className={`Сhapter ${
									chapter.content < 1
										? 'Сhapter_Deactive'
										: chapterActive === chapterIndex + 1
										? 'Сhapter_Active'
										: ''
								}`}
								onClick={() => setСhapterActive(chapterIndex + 1)}>
								<h3 className='Сhapter__title'>{chapter.title}</h3>
								<ul className='Сhapter__list'>
									{chapter.content.map((category, categoryIndex) => {
										return (
											<li
												key={categoryIndex}
												className={`Category ${
													category.content < 1
														? 'Category_Deactive'
														: categoryActive === categoryIndex + 1
														? 'Category_Active'
														: ''
												}`}
												onClick={() =>
													updateActive(
														chapterIndex + 1,
														categoryIndex + 1
													)
												}>
												<h4 className='Category__title'>
													{category.title}
												</h4>
												<ul className='Category__list'>
													{category.content.map((group, indexGroup) => {
														return (
															<li key={indexGroup} className='Group'>
																<a
																	href={group.href}
																	className='Group__title'>
																	{group.title}
																</a>
															</li>
														);
													})}
												</ul>
											</li>
										);
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</menu>
		</aside>
	);
}
