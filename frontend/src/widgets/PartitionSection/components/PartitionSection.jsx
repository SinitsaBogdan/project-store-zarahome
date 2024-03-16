import React from 'react';

import { Link } from 'react-router-dom';

import '../style/PartitionSection.css';

// Data
import dataPartitions from '../data/index.json';

// Entities
import { Partition } from '../../../entities';

export default function PartitionSection() {
	return (
		<section className='PartitionSection'>
			<h2 className='PartitionSection__title'>Каталог товаров</h2>
			<ul className='PartitionSection__list'>
				{dataPartitions.map((item) => {
					return (
						<li key={item.id} className='PartitionSection__item'>
							<Partition {...item} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
