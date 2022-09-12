import React, { useEffect } from 'react';
import Header from '../../components/en/Header';
import {
	checkedStyle,
	uncheckedStyle,
	emptyTdCheckedStyle,
	emptyTdUncheckedStyle,
} from '../../constants/styles';
import { lingQ, italki, anki } from '../../constants/links';
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
	twelfthWeek,
	thirteenthWeek,
	finishedDays,
} from '../../constants/thirdCalendar';

function Phase3() {

	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className=checkedStyle);
	}, []);

	return (
		<div className="text-light-gray">
			<Header en="/phase3" pt="pt/phase3" />
			<h1 className="text-center p-3 text-3xl">Phase 3</h1>
			<h3 className="text-center p-3 text-2xl">Developing your active skills</h3>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<p className="text-center mx-10">Now you have a base in the language, so it's time for you to start developing your active skills. Those are speaking and writing, and in order to do that, you need to start practicing them. You are still going to keep up with your <a href={ lingQ } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">LingQ</a> daily goal. Besides that, you are going to have conversation classes with a native speaker for 30 or 45 minutes per week on <a href={ italki } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Italki</a>. You should choose a teacher/tutor that offers you writing corrections, so you can write small texts each week in order to practice writing, too. At this point, you might realize that there are some essential words you don’t know yet. For those words you can use <a href={ anki } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Anki</a> to really make those words stick to your memory. But remember you should only choose those words you wanted to say or write in your classes and writings, but you couldn’t. Those are the words you lack!</p>
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
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ thirdWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fourthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fifthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ sixthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ seventhWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ eighthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex justify-center">
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ ninthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ tenthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ eleventhWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twelfthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
				<table className="m-8 h-1">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ thirteenthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
							<td className={ getFinishedDays >= 180 ? emptyTdCheckedStyle : emptyTdUncheckedStyle }></td>
							<td className={ getFinishedDays >= 180 ? emptyTdCheckedStyle : emptyTdUncheckedStyle }></td>
							<td className={ getFinishedDays >= 180 ? emptyTdCheckedStyle : emptyTdUncheckedStyle }></td>
						</tr>
					</tbody>
				</table>
			</div>
			<hr className='mx-auto w-3/5' />
			<h5 className="text-center mt-5">Total: 90 days(12,5 weeks)</h5>
		</div>
	);
}

export default Phase3;
