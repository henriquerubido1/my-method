import React from 'react';
import HeaderPt from '../components/HeaderPt';
import Mindset1pt from '../components/Mindset1pt';
import Mindset2pt from '../components/Mindset2pt';
import Mindset3 from '../components/Mindset3';
import Mindset4 from '../components/Mindset4';
import Mindset5 from '../components/Mindset5';
import Mindset6 from '../components/Mindset6';
import FinalThoughts from '../components/FinalThoughts';

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
  )
}

export default MindsetPt;