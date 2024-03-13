import React from 'react';

import { Link } from 'react-router-dom';

import '../style/PartitionSection.css';

// Data
import Partitions from '../data/index.json';

// Entities
import { Partition } from '../../../entities';

export default function PartitionSection() {
	return (
		<section className='PartitionSection'>
			<h2 class='PartitionSection__title'>Каталог товаров</h2>
			<ul class='PartitionSection__list'>
				<li class='PartitionSection__item'>
					<Partition data />
					<a class='Partition' href='#!'>
						<div class='Partition__image_wrapper'>
							<img
								class='Partition__image'
								src='../images/catalog/item_1.png'
								alt=''
							/>
						</div>
						<div class='Partition__wrapper'>
							<h2 class='Partition__title'>Спальня</h2>
							<p class='Partition__text'>Для комфортного сна и отдыха</p>
						</div>
					</a>
				</li>
			</ul>
		</section>
	);
}
