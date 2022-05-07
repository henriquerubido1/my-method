import React, { useEffect } from 'react';
import HeaderPt from '../components/HeaderPt';

function Phase2pt() {
	const primaryDays = [...Array(91).keys()];
	const days = primaryDays.slice(15);
	const firstWeek = days.filter(day => day < 22);
	const secondWeek = days.filter(day => day > 21 && day < 29);
	const thirdWeek = days.filter(day => day > 28 && day < 36);
	const fourthWeek = days.filter(day => day > 35 && day < 43);
	const fifthWeek = days.filter(day => day > 42 && day < 50);
	const sixthWeek = days.filter(day => day > 49 && day < 57);
	const seventhWeek = days.filter(day => day > 56 && day < 64);
	const eighthWeek = days.filter(day => day > 63 && day < 71);
	const ninthWeek = days.filter(day => day > 70 && day < 78);
	const tenthWeek = days.filter(day => day > 77 && day < 85);
	const eleventhWeek = days.filter(day => day > 84 && day < 91);
	const getFinishedDays = localStorage.getItem('finishedDays2');

	function finishDay ({ target }) {
		if (target.className !== 'bg-gray-dark p-5') {
			localStorage.setItem('finishedDays2', target.innerHTML - 1);
			return target.className='bg-gray-dark p-5';
		} else {
			localStorage.setItem('finishedDays2', target.innerHTML);
			return target.className='bg-blue p-5';
		}
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
		...filterDays11
	];

	useEffect(() => {
		finishedDays.forEach(day => document.getElementById(day).className='bg-blue p-5');
	}, [finishedDays]);

	return (
		<div className="text-blue">
			<HeaderPt en="/phase2" pt="/pt/phase2" />
			<h1 className="text-center p-3 text-3xl">Fase 2</h1>
			<h3 className="text-center p-3 text-2xl">Construindo sua base na língua</h3>
			{ /* eslint-disable-next-line react/no-unescaped-entities */ }
			<p className="text-center mx-10">De agora em diante, você utilizará o <a href="https://www.lingq.com/en/" className="text-purple hover:underline">LingQ</a> todos os dias durante a sua jornada para o nível C1. Nesta fase, a sua meta é ganhar 1500 moedas(30x meta diária) por dia. "Moedas recebidas”  é a melhor forma de medir quanto contato com a lígua nós estamos tendo, porque este número não é tão fácil de manipular quanto "tempo gasto com a língua” ou "número de palavras conhecidas”.</p>
			<div className="flex justify-center">
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ firstWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ secondWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ thirdWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fourthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
				<table className="m-8">
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ fifthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ sixthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ seventhWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ eighthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex justify-center">
				<table className={ getFinishedDays === '90' ? 'bg-blue m-8' : 'bg-gray-dark m-8'}>
					<tbody>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ ninthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ tenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
						<tr>
							{ /* eslint-disable-next-line react/jsx-key */ }
							{ eleventhWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
						</tr>
					</tbody>
				</table>
			</div>
			<h5 className="text-center">Total: 76 dias(10,8 semanas)</h5>
		</div>
	);
}

export default Phase2pt;
