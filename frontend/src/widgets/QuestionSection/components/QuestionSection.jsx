import React from 'react';

// Data
import dataQuestion from '../../../entities/Question/data/index.json';

import '../style/QuestionSection.css';
import { Question } from '../../../entities';

export default function QuestionSection({ data }) {
	return (
		<section className='QuestionSection'>
			<header className='QuestionSection__header'>
				<h2 className='QuestionSection__header_title'>Часто задаваемые вопросы</h2>
				<p className='QuestionSection__header_descriptions'>
					Скорее всего тут уже есть ответ и на ваш
				</p>
			</header>
			<ul className='QuestionSection__list'>
				{dataQuestion.map((question, index) => {
					return (
						<li key={index} className='QuestionSection__item'>
							<Question {...question} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
