import React from 'react';
import HeaderPt from '../../components/pt/HeaderPt';
import { mindsetA } from '../../constants/styles';
import Mindset1pt from '../../components/pt/Mindset1pt';
import Mindset2pt from '../../components/pt/Mindset2pt';
import Mindset3pt from '../../components/pt/Mindset3pt';
import Mindset4pt from '../../components/pt/Mindset4pt';
import Mindset5pt from '../../components/pt/Mindset5pt';
import Mindset6pt from '../../components/pt/Mindset6pt';
import FinalThoughtsPt from '../../components/pt/FinalThoughtsPt';

function MindsetPt() {
	return (
		<div className="text-light-gray text-center">
			<HeaderPt en="/mindset" pt="pt/mindset" />
			<h1 className="m-8 text-3xl">Mentalidade do Estudante de Idiomas</h1>
			<nav className="text-xs mb-10">
				<a className={ mindsetA } href="#mindset1">Motivação</a>
				<a className={ mindsetA } href="#mindset2">Esforço e Consistência</a>
				<a className={ mindsetA } href="#mindset3">Crença</a>
				<a className={ mindsetA } href="#mindset4">Autodidatismo</a>
				<a className={ mindsetA } href="#mindset5">Habilidades X Conhecimento</a>
				<a className={ mindsetA } href="#mindset6">Divirta-se!</a>
				<a className={ mindsetA } href="#final-thoughts">Considerações Finais</a>
			</nav>
			<div id="mindset1" className="flex justify-center mb-10">
				<Mindset1pt />
			</div>
			<div id="mindset2" className="flex justify-center mb-10">
				<Mindset2pt />
			</div>
			<div id="mindset3" className="flex justify-center mb-10">
				<Mindset3pt />
			</div>
			<div id="mindset4" className="flex justify-center mb-10">
				<Mindset4pt />
			</div>
			<div id="mindset5" className="flex justify-center mb-10">
				<Mindset5pt />
			</div>
			<div id="mindset6" className="flex justify-center mb-10">
				<Mindset6pt />
			</div>
			<div id="final-thoughts" className="flex justify-center mb-10">
				<FinalThoughtsPt />
			</div>
		</div>
	);
}

export default MindsetPt;
