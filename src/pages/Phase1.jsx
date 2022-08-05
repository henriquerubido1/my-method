import React, { useEffect } from 'react';
import Header from '../components/Header';

function Phase1() {
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
			<Header en="/" pt="/pt/phase1" />
			<h1 className="text-center p-3 text-3xl">Phase 1</h1>
			<h3 className="text-center p-3 text-2xl">Learning your very first words and sentence structures</h3>
			<p className="text-center mx-10">In this phase you are going to use <a href="https://www.duolingo.com/learn" className="text-violet hover:underline">Duolingo</a> for 2 weeks in order to learn your first words, so you can move on to <a href="https://www.lingq.com/en/" className="text-violet hover:underline">LingQ</a>. In this phase you are going to study for around an hour a day using the <a href="https://www.youtube.com/watch?v=qWTsFh8c37U" className="text-violet hover:underline">Cascading Method</a> (the explanation of the method starts at 8:00 minutes).</p>
			<p className="text-center mx-10 opacity-75">tip: <a href="https://www.lingodeer.com/home" className="text-violet hover:underline">Lingodeer</a> tend to be better than <a href="https://www.duolingo.com/learn" className="text-violet hover:underline">Duolingo</a> for asian languages</p>
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
			<h5 className="text-center">Total: 14 days(2 weeks)</h5>
			{/* <p className="text-center opacity-75 text-sm">tip: you can click with the right button and double click to mark class days and days of writing, respectively</p> */}
		</div>
	);
}

export default Phase1;
