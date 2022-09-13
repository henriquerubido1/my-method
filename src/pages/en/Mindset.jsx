import React from 'react';
import Header from '../../components/en/Header';
import { mindsetA } from '../../constants/styles';
import Mindset1 from '../../components/en/Mindset1';
import Mindset2 from '../../components/en/Mindset2';
import Mindset3 from '../../components/en/Mindset3';
import Mindset4 from '../../components/en/Mindset4';
import Mindset5 from '../../components/en/Mindset5';
import Mindset6 from '../../components/en/Mindset6';
import FinalThoughts from '../../components/en/FinalThoughts';

function Mindset() {
	return (
		<div className="text-light-gray text-center">
			<Header en="/mindset" pt="pt/mindset" />
			<h1 className="m-8 text-3xl">Mindset of the Language Learner</h1>
			<nav className="text-xs mb-10">
				<a className={ mindsetA } href="#mindset1">Motivation</a>
				<a className={ mindsetA } href="#mindset2">Effort & Consistency</a>
				<a className={ mindsetA } href="#mindset3">Belief</a>
				<a className={ mindsetA } href="#mindset4">Autodidactism</a>
				<a className={ mindsetA } href="#mindset5">Abilities X Knowledge</a>
				<a className={ mindsetA } href="#mindset6">Have Fun!</a>
				<a className={ mindsetA } href="#final-thoughts">Final Thoughts</a>
			</nav>
			<div id="mindset1" className="flex justify-center mb-10">
				<Mindset1 />
			</div>
			<div id="mindset2" className="flex justify-center mb-10">
				<Mindset2 />
			</div>
			<div id="mindset3" className="flex justify-center mb-10">
				<Mindset3 />
			</div>
			<div id="mindset4" className="flex justify-center mb-10">
				<Mindset4 />
			</div>
			<div id="mindset5" className="flex justify-center mb-10">
				<Mindset5 />
			</div>
			<div id="mindset6" className="flex justify-center mb-10">
				<Mindset6 />
			</div>
			<div id="final-thoughts" className="flex justify-center mb-10">
				<FinalThoughts />
			</div>
		</div>
	);
}

export default Mindset;
