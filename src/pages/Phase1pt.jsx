import React, { useEffect } from 'react';
import HeaderPt from '../components/HeaderPt';

function Phase1pt() {
	const primaryDays = [...Array(15).keys()];
	const days = primaryDays.slice(1);
	const firstWeek = days.filter(day => day < 8);
	const secondWeek = days.filter(day => day > 7);
	const getFinishedDays = localStorage.getItem('finishedDays');
	const getClassDays = localStorage.getItem('finishedClasses');
	const getWritingDays = localStorage.getItem('finishedWritings');
	let checkClassDays = typeof JSON.parse(getClassDays) === 'number' ? JSON.parse(getClassDays) : 0;
	let checkWritingDays = typeof JSON.parse(getWritingDays) === 'number' ? JSON.parse(getWritingDays) : 0;

	function finishDay ({ target }) {
		if (target.className === 'bg-indigo p-5') {
			localStorage.setItem('finishedClasses', checkClassDays += 1);
			localStorage.setItem('finishedDays', target.innerHTML);
			return target.className='bg-green p-5';
		} else if (target.className === 'bg-rose p-5') {
			localStorage.setItem('finishedWritings', checkWritingDays += 1);
			localStorage.setItem('finishedDays', target.innerHTML);
			return target.className='bg-green p-5';
		} else if (target.className !== 'bg-gray-dark p-5') {
			localStorage.setItem('finishedDays', target.innerHTML - 1);
			return target.className='bg-gray-dark p-5';
		}  else {
			localStorage.setItem('finishedDays', target.innerHTML);
			return target.className='bg-green p-5';
		}
	}

	function setClassDay ({ target }) {
		target.className='bg-indigo p-5';
	}

	function setWritingDay ({ target }) {
		target.className='bg-rose p-5';
	}

	const filterDays = firstWeek.filter((day) => day <= getFinishedDays);
	const filterDays2 = secondWeek.filter((day) => day <= getFinishedDays);
	const finishedDays = [...filterDays, ...filterDays2];

	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className='bg-green p-5');
	}, [finishedDays]);

	return (
		<div className="text-green">
			<HeaderPt en="/" pt="/pt/phase1" />
			<h1 className="text-center p-3 text-3xl">Fase 1</h1>
			<h3 className="text-center p-3 text-2xl">Aprendendo suas primeiras palavras e estruturas gramaticais</h3>
			<p className="text-center mx-10">Nessa fase voc?? ir?? usar o <a href="https://www.duolingo.com/learn" className="text-purple hover:underline">Duolingo</a> durante 2 semanas para aprender suas primeiras palavras, para que voc?? possa passar para o <a href="https://www.lingq.com/en/" className="text-purple hover:underline">LingQ</a> futuramente. Nesta fase voc?? ir?? estudar por volta de uma hora por dia utilizando o <a href="https://www.youtube.com/watch?v=qWTsFh8c37U" className="text-purple hover:underline">M??todo de Cascata</a> (a explica????o do m??todo come??a aos 8:00 minutos, ative as legendas).</p>
			<div className="flex justify-center">
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ firstWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ secondWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
			</div>
			<h5 className="text-center">Total: 14 dias(2 semanas)</h5>
			{/* <p className="text-center opacity-75 text-sm">dica: voc?? pode clicar com o bot??o direito e dar um clique duplo para marcar os dias em que voc?? teve aula e os dias em que voc?? escreveu reda????es, respectivamente</p> */}
		</div>
	);
}

export default Phase1pt;
