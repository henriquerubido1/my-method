import React from 'react';
import Header from '../components/Header';
import Mindset1 from '../components/Mindset1';
import Mindset2 from '../components/Mindset2';
import Mindset3 from '../components/Mindset3';
import Mindset4 from '../components/Mindset4';
import Mindset5 from '../components/Mindset5';
import Mindset6 from '../components/Mindset6';
import FinalThoughts from '../components/FinalThoughts';

function Mindset() {
	return (
		<div className="text-blue text-center">
			<Header en="/mindset" pt="pt/mindset" />
			<h1 className="m-8 text-3xl">Mindset of the Language Learner</h1>
			<div className="flex justify-center mb-10">
				<Mindset1 />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset2 />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset3 />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset4 />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset5 />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset6 />
			</div>
			<div className="flex justify-center mb-10">
				<FinalThoughts />
			</div>
		</div>
	);
}

export default Mindset;
