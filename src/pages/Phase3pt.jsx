import React, { useEffect } from 'react';
import HeaderPt from '../components/HeaderPt';

function Phase3pt() {
	const primaryDays = [...Array(181).keys()];
	const days = primaryDays.slice(91);
	const firstWeek = days.filter(day => day < 98);
	const secondWeek = days.filter(day => day > 99 && day < 107);
	const thirdWeek = days.filter(day => day > 106 && day < 114);
	const fourthWeek = days.filter(day => day > 113 && day < 121);
	const fifthWeek = days.filter(day => day > 120 && day < 128);
	const sixthWeek = days.filter(day => day > 127 && day < 135);
	const seventhWeek = days.filter(day => day > 134 && day < 142);
	const eighthWeek = days.filter(day => day > 141 && day < 149);
	const ninthWeek = days.filter(day => day > 148 && day < 156);
	const tenthWeek = days.filter(day => day > 155 && day < 163);
	const eleventhWeek = days.filter(day => day > 162 && day < 170);
	const twelfthWeek = days.filter(day => day > 169 && day < 177);
	const thirteenthWeek = days.filter(day => day > 176 && day < 184);
	const getFinishedDays = localStorage.getItem('finishedDays');
	const getClassDays = localStorage.getItem('finishedClasses');
	const getWritingDays = localStorage.getItem('finishedWritings');
	let checkClassDays = typeof JSON.parse(getClassDays) === 'number' ? JSON.parse(getClassDays) : 0;
	let checkWritingDays = typeof JSON.parse(getWritingDays) === 'number' ? JSON.parse(getWritingDays) : 0;

	function finishDay ({ target }) {
		if (target.className === 'bg-indigo p-5') {
			localStorage.setItem('finishedClasses', checkClassDays += 1);
			localStorage.setItem('finishedDays', target.innerHTML);
			return target.className='bg-red p-5';
		} else if (target.className === 'bg-violet p-5') {
			localStorage.setItem('finishedWritings', checkWritingDays += 1);
			localStorage.setItem('finishedDays', target.innerHTML);
			return target.className='bg-red p-5';
		} else if (target.className !== 'bg-gray-dark p-5') {
			localStorage.setItem('finishedDays', target.innerHTML - 1);
			return target.className='bg-gray-dark p-5';
		}  else {
			localStorage.setItem('finishedDays', target.innerHTML);
			return target.className='bg-red p-5';
		}
	}

	function setClassDay ({ target }) {
		target.className='bg-indigo p-5';
	}

	function setWritingDay ({ target }) {
		target.className='bg-violet p-5';
	}

	const filterDays = firstWeek.filter((day) => day <= getFinishedDays);
	const filterDays2 = secondWeek.filter((day) => day <= getFinishedDays);
	const filterDays3 = thirdWeek.filter((day) => day <= getFinishedDays);
	const filterDays4 = fourthWeek.filter((day) => day <= getFinishedDays);
	const filterDays5 = fifthWeek.filter((day) => day <= getFinishedDays);
	const filterDays6 = sixthWeek.filter((day) => day <= getFinishedDays);
	const filterDays7 = seventhWeek.filter((day) => day <= getFinishedDays);
	const filterDays8 = eighthWeek.filter((day) => day <= getFinishedDays);
	const filterDays9 = ninthWeek.filter((day) => day <= getFinishedDays);
	const filterDays10 = tenthWeek.filter((day) => day <= getFinishedDays);
	const filterDays11 = eleventhWeek.filter((day) => day <= getFinishedDays);
	const filterDays12 = twelfthWeek.filter((day) => day <= getFinishedDays);
	const filterDays13 = thirteenthWeek.filter((day) => day <= getFinishedDays);
	const finishedDays = [
		...filterDays,
		...filterDays2,
		...filterDays3,
		...filterDays4,
		...filterDays5,
		...filterDays6,
		...filterDays7,
		...filterDays8,
		...filterDays9,
		...filterDays10,
		...filterDays11,
		...filterDays12,
		...filterDays13
	];

	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className='bg-red p-5');
	}, [finishedDays]);

	return (
		<div className="text-red">
			<HeaderPt en="/phase3" pt="pt/phase3" />
			<h1 className="text-center p-3 text-3xl">Fase 3</h1>
			<h3 className="text-center p-3 text-2xl">Desenvolvendo suas habilidades ativas</h3>
			<p className="text-center mx-10">Agora que você tem uma base no idioma, é hora de começar a desenvolver as suas habilidades ativas. Elas são a fala e a escrita, e para desenvolvê-las , é necessário começar a praticá-las. Você ainda manterá a sua meta diária no <a href="https://www.lingq.com/en/" className="text-purple hover:underline">LingQ</a>. Além disso, você começará a ter aulas de conversação com um nativo por 30 ou 45 minutos por semana no <a href="https://www.italki.com" className="text-purple hover:underline">Italki</a>. Você deve escolher um professor/tutor que oferece correções de escrita, para que você possa escrever pequenos textos toda semana para praticar a escrita também. Neste ponto, talvez você perceba que existem palavras essenciais que você ainda não sabe. Para estas palavras, você pode utilizar o <a href="https://apps.ankiweb.net" className="text-purple hover:underline">Anki</a> para finalmente aprender essas palavras. Mas lembre-se de que você deve escolher apenas aquelas palavras que você precisava ter dito ou escrito nas suas aulas e textos, mas você ainda não sabia estas palavras. Estas são as palavras que estão faltando!</p>
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
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ thirdWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fourthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fifthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ sixthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ seventhWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ eighthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex justify-center">
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ ninthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ tenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ eleventhWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ twelfthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
				<table className="m-8 h-1">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ thirteenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay } onAuxClick={ setClassDay } onDoubleClick={ setWritingDay }>{ day }</td>) }
							<td className={ getFinishedDays >= 180 ? 'bg-red p-5' : 'bg-gray-dark p-5' }></td>
							<td className={ getFinishedDays >= 180 ? 'bg-red p-5' : 'bg-gray-dark p-5' }></td>
							<td className={ getFinishedDays >= 180 ? 'bg-red p-5' : 'bg-gray-dark p-5' }></td>
							<td className={ getFinishedDays >= 180 ? 'bg-red p-5' : 'bg-gray-dark p-5' }></td>
							<td className={ getFinishedDays >= 180 ? 'bg-red p-5' : 'bg-gray-dark p-5' }></td>
						</tr>
					</tbody>
				</table>
			</div>
			<h5 className="text-center">Total: 90 dias(12,5 semanas)</h5>
			{/* <p className="text-center opacity-75 text-sm">dica: você pode clicar com o botão direito e dar um clique duplo para marcar os dias em que você teve aula e os dias em que você escreveu redações, respectivamente</p> */}
		</div>
	);
}

export default Phase3pt;
