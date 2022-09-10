import React, { useEffect } from 'react';
import HeaderPt from '../../components/pt/HeaderPt';
import { firstWeek, secondWeek, finishedDays } from '../../constants/consts';
import { checkedStyle, uncheckedStyle } from '../../constants/styles';
import { duolingo, lingQ, lingodeer } from '../../constants/links';
import { finishDay } from '../../functions/funcs';


function Phase1pt() {

	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className=checkedStyle);
	}, []);

	return (
		<div className="text-light-gray">
			<HeaderPt en="/" pt="/pt/phase1" />
			<h1 className="text-center p-3 text-3xl">Fase 1</h1>
			<h3 className="text-center p-3 text-2xl">Aprendendo suas primeiras palavras e estruturas gramaticais</h3>
			<p className="text-center mx-auto w-5/6">Nessa fase você irá usar o <a href={ duolingo } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Duolingo</a> durante 2 semanas para aprender suas primeiras palavras, para que você possa passar para o <a href={ lingQ } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">LingQ</a> futuramente. Nesta fase você irá estudar por volta de uma hora por dia utilizando o <a href="https://www.youtube.com/watch?v=qWTsFh8c37U" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline">Método de Cascata</a> (a explicação do método começa aos 8:00 minutos, ative as legendas).</p>
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
			<h5 className="text-center mt-5">Total: 14 dias(2 semanas)</h5>
			<p className="text-center mx-10 opacity-75">dica: <a href={ lingodeer } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Lingodeer</a> tende a ser melhor que o <a href={ duolingo } target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">Duolingo</a> para línguas asiáticas</p>
		</div>
	);
}

export default Phase1pt;
