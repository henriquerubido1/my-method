import React from 'react';
import { mindsetBoxStyle, mindsetTitle } from '../../constants/styles';

function Mindset6() {
	return (
		<div className={ mindsetBoxStyle }>
			<h3 className={ mindsetTitle }>Have Fun!</h3>
			{ /* eslint-disable-next-line react/no-unescaped-entities */ }
			<p className="m-4">At school we tend to think that learning is boring and it should be something serious. However, we learn faster when we genuinely enjoy what we are learning. Here is an example: have you ever studied countless hours for a test and when you finally had to answer to the questions, you realized that you forgot EVERYTHING. On the other hand, if I asked you to talk about this week's episode of your favorite TV show, which you only watched once, days ago, you would be able to talk about it for hours! Therefore, you should always try to make your learning process fun. This way your brain will absorb everything faster and without stress. So don't forget to have fun!</p>
		</div>
	);
}

export default Mindset6;