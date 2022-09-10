import React, { useEffect } from 'react';
import Header from '../../components/en/Header';
import { firstWeek, secondWeek, finishedDays } from '../../constants/consts';
import { checkedStyle, uncheckedStyle } from '../../constants/styles';
import { duolingo, lingQPt, lingodeer } from '../../constants/links';
import { finishDay } from '../../functions/funcs';

function Phase1() {

	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className=checkedStyle);
	}, []);

	return (
		<div className="text-light-gray">
			<Header en="/" pt="/pt/phase1" />
			<h1 className="text-center p-3 text-3xl">Phase 1</h1>
			<h3 className="text-center p-3 text-2xl">Learning your very first words and sentence structures</h3>
			<p className="text-center mx-auto w-5/6">In this phase you are going to use <a href={ duolingo } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Duolingo</a> for 2 weeks in order to learn your first words, so you can move on to <a href={ lingQPt } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">LingQ</a>. In this phase you are going to study for around an hour a day using the <a href="https://www.youtube.com/watch?v=qWTsFh8c37U" target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Cascading Method</a> (the explanation of the method starts at 8:00 minutes).</p>
			<div className="flex justify-center">
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ firstWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ secondWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
			</div>
			<hr className='mx-auto w-3/5' />
			<h5 className="text-center mt-5">Total: 14 days(2 weeks)</h5>
			<p className="text-center mx-10 opacity-75">tip: <a href={ lingodeer } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Lingodeer</a> tend to be better than <a href={ duolingo } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Duolingo</a> for asian languages</p>
		</div>
	);
}

export default Phase1;
