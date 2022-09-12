import React, { useEffect } from 'react';
import HeaderPt from '../../components/pt/HeaderPt';
import {
	checkedStyle,
	uncheckedStyle,
	emptyTdCheckedStyle,
	emptyTdUncheckedStyle,
} from '../../constants/styles';
import { lingQPt } from '../../constants/links';
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

function Phase2pt() {

	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className=checkedStyle);
	}, []);

	return (
		<div className="text-light-gray">
			<HeaderPt en="/phase2" pt="/pt/phase2" />
			<h1 className="text-center p-3 text-3xl">Fase 2</h1>
			<h3 className="text-center p-3 text-2xl">Construindo sua base na língua</h3>
			<p className="text-center mx-auto w-5/6">De agora em diante, você utilizará o <a href={ lingQPt } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">LingQ</a> todos os dias durante a sua jornada para o nível C1. Nesta fase, a sua meta é ganhar 1500 moedas(30x meta diária) por dia. "Moedas recebidas”  é a melhor forma de medir quanto contato com a lígua nós estamos tendo, porque este número não é tão fácil de manipular quanto "tempo gasto com a língua” ou "número de palavras conhecidas”.</p>
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
				<table className='m-8'>
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
							<td className={ getFinishedDays >= 90 ? emptyTdCheckedStyle : emptyTdUncheckedStyle }></td>
						</tr>
					</tbody>
				</table>
			</div>
			<hr className='mx-auto w-3/5' />
			<h5 className="text-center my-5">Total: 76 dias(10,8 semanas)</h5>
		</div>
	);
}

export default Phase2pt;
