import React from 'react';
import { mindsetBoxStyle, mindsetTitle } from '../../constants/styles';

function FinalThoughts() {
	return (
		<div className={ mindsetBoxStyle }>
			<h3 className={ mindsetTitle }>Final Thoughts</h3>
			<p className="m-4">Now that you came to the final text, I would like to remind you that the 6 texts above are short introductions to those concepts. If you want to go in depth with those topics, check out <a href="https://www.youtube.com/c/Thelinguist" className="text-purple hover:underline">Steve Kaufmann's</a> and <a href="https://www.youtube.com/c/MATTvsJapan" className="text-purple hover:underline">Matt vs. Japan's</a> YouTube channels. Those two were great inspirations for these texts and for my method. I would also recommend that you do not follow my method strictly, but use it as an inspiration for the creation of your own method.</p>
		</div>
	);
}

export default FinalThoughts;
