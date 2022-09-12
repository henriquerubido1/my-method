import React, { useEffect } from 'react';
import HeaderPt from '../../components/pt/HeaderPt';
import {
	checkedStyle,
	uncheckedStyle,
	emptyTdCheckedStyle,
	emptyTdUncheckedStyle,
} from '../../constants/styles';
import { lingQPt, italkiPt } from '../../constants/links';
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
	fourteenthWeek,
	fifteenthWeek,
	sixteenthWeek,
	seventeenthWeek,
	eighteenthWeek,
	nineteenthWeek,
	twentiethWeek,
	twentyFirstWeek,
	twentySecondWeek,
	twentyThirdWeek,
	twentyFourthWeek,
	twentyFifthWeek,
	twentySixthWeek,
	twentySeventhWeek,
	finishedDays,
} from '../../constants/fourthCalendar';

function Phase4pt() {

	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className=checkedStyle);
	}, [finishedDays]);

	return (
		<div className="text-light-gray">
			<HeaderPt en="/phase4" pt="pt/phase4" />
			<h1 className="text-center p-3 text-3xl">Fase 4</h1>
			<h3 className="text-center p-3 text-2xl">Livrando-se das suas falhas</h3>
			<p className="text-center mx-10">É hora de expandir seus horizontes! Agora você já consegue falar sobre diferentes tópicos sem muito esforço, mas seu vocabulário ainda é limitado ao que você estrou em contato e você ainda erra com alguma frequência. Para alcançar níveis mais altos, sua abordagem passará a ser bem diferente do que era no começo. Seu novo foco será ter contato com tópicos que você não teve antes, melhorar sua fala, escrita e pronúncia. Além disso, parar de cometer erros que nativos não cometem. Agora é uma boa hora para pensar sobre trocar de tutor no <a href={ italkiPt } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Italki</a> e escolher um professor que faça preparatórios para testes. A sua meta não é se preparar para um teste, mas professores deste tipo tendem a ser bem meticulosos com cada um dos seus erros, o que é fundamental para esta fase.</p>
			<br />
			<p  className="text-center mx-10">Sua meta diária no <a href={ lingQPt } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">LingQ</a> continua sendo a mesma, mas agora você deve escolher lições com novos tópicos e uma linguagem mais avançada. Além disso, sua tarefa de escrita semanal é escrever uma ou duas redações sobre esses tópicos novos e enviá-las para seu professor corrigi-las. Você também deve assistir alguns vídeos no YouTube sobre erros comuns de pronúncia na língua que você está aprendendo e tentar corrigí-los, especialmente durante suas aulas de 45 minutos, duas vezes por semana. Não se esqueça de sempre tentar absorver o feedback dado por seu professor, essa é uma das partes mais importantes das suas aulas.</p>
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
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ thirteenthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fourteenthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fifteenthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ sixteenthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex justify-center">
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ seventeenthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ eighteenthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ nineteenthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twentiethWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twentyFirstWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twentySecondWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twentyThirdWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twentyFourthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex justify-center">
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twentyFifthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twentySixthWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twentySeventhWeek.map(day => <td id={ day } className={ uncheckedStyle } onClick={ finishDay }>{ day }</td>) }
							<td className={ getFinishedDays >= 365 ? emptyTdCheckedStyle : emptyTdUncheckedStyle }></td>
							<td className={ getFinishedDays >= 365 ? emptyTdCheckedStyle : emptyTdUncheckedStyle }></td>
							<td className={ getFinishedDays >= 365 ? emptyTdCheckedStyle : emptyTdUncheckedStyle }></td>
							<td className={ getFinishedDays >= 365 ? emptyTdCheckedStyle : emptyTdUncheckedStyle }></td>
						</tr>
					</tbody>
				</table>
			</div>
			<hr className='mx-auto w-3/5' />
			<h5 className="text-center my-5">Total: 185 dias(26,4 semanas)</h5>
		</div>
	);
}

export default Phase4pt;
