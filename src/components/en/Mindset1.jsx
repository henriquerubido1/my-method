import React from 'react';
import { mindsetBoxStyle, mindsetTitle } from '../../constants/styles';

function Mindset1() {
	return (
		<div className={ mindsetBoxStyle }>
			<h3 className={ mindsetTitle }>Motivation</h3>
			{ /* eslint-disable-next-line react/no-unescaped-entities */ }
			<p className="m-4">Motivation might be the greatest cliché not only in the language learning community, but also in many other areas. However, it is not easy to realize the importance of it in this process before you fail, due to the lack of the motivation itself. The role of the motivation comes only when you do not want to study and you need a reason to convince yourself to do so. If you find yourself in a situation, where you ask yourself "why am I doing this?" and you get no answer, YOU WILL GIVE UP. The motivation is there only to make sure that you stick to your routine and you do not give up.</p>
		</div>
	);
}

export default Mindset1;