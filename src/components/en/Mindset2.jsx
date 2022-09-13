import React from 'react';
import { mindsetBoxStyle, mindsetTitle } from '../../constants/styles';

function Mindset2() {
	return (
		<div className={ mindsetBoxStyle }>
			<h3 className={ mindsetTitle }>Effort & Consistency</h3>
			<p className="m-4">This one is quite simple: the more effort you put into it, the faster the results will come. Basically, if you study two hours a day, you will get to the point you want faster than someone who is dedicating only one hour a day. On the other hand, cosistency punishes the inconsistent, because we forget what we do not review. In other words, if you do not study every single day, you will forget a great percentage of what you have just learned. Please, do not missunderstand me, we all forget some of what we learn, but if you skip many days, you will forget a ton of things and you will be basically wasting most of your time! So if you do want to learn faster, remember that commitment pays dividends!</p>
		</div>
	);
}

export default Mindset2;