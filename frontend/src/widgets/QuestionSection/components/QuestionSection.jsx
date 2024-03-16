import React from 'react';

// Data
import dataQuestion from '../../../entities/Question/data/index.json';

import '../style/QuestionSection.css';
import { Question } from '../../../entities';

export default function QuestionSection({ data }) {
	return (
		<section class='QuestionSection'>
			<header class='QuestionSection__header'>
				<h2 class='QuestionSection__header_title'>Часто задаваемые вопросы</h2>
				<p class='QuestionSection__header_descriptions'>
					Скорее всего тут уже есть ответ и на ваш
				</p>
			</header>
			<ul class='QuestionSection__list'>
				{dataQuestion.map((question, index) => {
					return (
						<li key={index} class='QuestionSection__item'>
							<Question {...question} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
