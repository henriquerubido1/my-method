import React, { useEffect } from 'react';
import HeaderPt from '../../components/pt/HeaderPt';
import {
	checkedStyle,
	uncheckedStyle,
	emptyTdCheckedStyle,
	emptyTdUncheckedStyle,
} from '../../constants/styles';
import { lingQPt, italkiPt, anki } from '../../constants/links';
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

function Phase3pt() {

	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className=checkedStyle);
	}, []);

	return (
		<div className="text-light-gray">
			<HeaderPt en="/phase3" pt="pt/phase3" />
			<h1 className="text-center p-3 text-3xl">Fase 3</h1>
			<h3 className="text-center p-3 text-2xl">Desenvolvendo suas habilidades ativas</h3>
			<p className="text-center mx-10">Agora que você tem uma base no idioma, é hora de começar a desenvolver as suas habilidades ativas. Elas são a fala e a escrita, e para desenvolvê-las , é necessário começar a praticá-las. Você ainda manterá a sua meta diária no <a href={ lingQPt } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">LingQ</a>. Além disso, você começará a ter aulas de conversação com um nativo por 30 ou 45 minutos por semana no <a href={ italkiPt } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Italki</a>. Você deve escolher um professor/tutor que oferece correções de escrita, para que você possa escrever pequenos textos toda semana para praticar a escrita também. Neste ponto, talvez você perceba que existem palavras essenciais que você ainda não sabe. Para estas palavras, você pode utilizar o <a href={ anki } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Anki</a> para finalmente aprender essas palavras. Mas lembre-se de que você deve escolher apenas aquelas palavras que você precisava ter dito ou escrito nas suas aulas e textos, mas você ainda não sabia estas palavras. Estas são as palavras que estão faltando!</p>
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
			<h5 className="text-center mt-5">Total: 90 dias(12,5 semanas)</h5>
		</div>
	);
}

export default Phase3pt;
