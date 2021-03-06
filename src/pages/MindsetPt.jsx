import React from 'react';
import HeaderPt from '../components/HeaderPt';
import Mindset1pt from '../components/Mindset1pt';
import Mindset2pt from '../components/Mindset2pt';
import Mindset3pt from '../components/Mindset3pt';
import Mindset4pt from '../components/Mindset4pt';
import Mindset5pt from '../components/Mindset5pt';
import Mindset6pt from '../components/Mindset6pt';
import FinalThoughtsPt from '../components/FinalThoughtsPt';

function MindsetPt() {
	return (
		<div className="text-blue text-center">
			<HeaderPt en="/mindset" pt="pt/mindset" />
			<h1 className="m-8 text-3xl">Mentalidade do Estudante de Idiomas</h1>
			<div className="flex justify-center mb-10">
				<Mindset1pt />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset2pt />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset3pt />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset4pt />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset5pt />
			</div>
			<div className="flex justify-center mb-10">
				<Mindset6pt />
			</div>
			<div className="flex justify-center mb-10">
				<FinalThoughtsPt />
			</div>
		</div>
	);
}

export default MindsetPt;
