import React, { useEffect } from 'react';
import Header from '../../components/en/Header';
import { checkedStyle, uncheckedStyle } from '../../constants/styles';
import { lingQ } from '../../constants/links';
import { finishDay } from '../../functions/funcs';
import { getFinishedDays } from '../../constants/consts';
import {
	firstWeek,
	secondWeek,
	thirdWeek,
	fourthWeek,
	fifthWeek,
	sixthWeek,
	seventhWeek,
	eighthWeek,
	ninthWeek,
	tenthWeek,
	eleventhWeek,
	finishedDays,
} from '../../constants/secondCalendar';

function Phase2() {


	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className=checkedStyle);
	}, [finishedDays]);

	return (
		<div className="text-light-gray">
			<Header en="/phase2" pt="pt/phase2" />
			<h1 className="text-center p-3 text-3xl">Phase 2</h1>
			<h3 className="text-center p-3 text-2xl">Building your basis in the foreign language</h3>
			<p className="text-center mx-auto w-5/6">From now on, you will start using <a href={ lingQ } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">LingQ</a> every single day during your way to C1 level. In this phase, your goal is to earn 1500 coins(30x daily goal) a day. “Coins earned” is the best way to measure how much contact with the language you are having, because this number is not as easy to manipulate as “time spent with the language” or “the number of words you know”.</p>
			<div className="flex justify-center">
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ firstWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ secondWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ thirdWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fourthWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fifthWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ sixthWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ seventhWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ eighthWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex justify-center">
				<table className='m-8'>
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ ninthWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ tenthWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ eleventhWeek.map(day => <td id={ day } className={uncheckedStyle} onClick={ finishDay }>{ day }</td>) }
							<td className={ getFinishedDays >= 90 ? checkedStyle : uncheckedStyle }></td>
						</tr>
					</tbody>
				</table>
			</div>
			<hr className='mx-auto w-3/5' />
			<h5 className="text-center mt-5">Total: 76 days(10,8 weeks)</h5>
		</div>
	);
}

export default Phase2;
