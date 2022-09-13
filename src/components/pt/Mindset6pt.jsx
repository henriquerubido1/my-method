import React from 'react';
import { mindsetBoxStyle, mindsetTitle } from '../../constants/styles';

function Mindset6pt() {
	return (
		<div className={ mindsetBoxStyle }>
			<h3 className={ mindsetTitle }>Divirta-se!</h3>
			{ /* eslint-disable-next-line react/no-unescaped-entities */ }
			<p className="m-4">Na escola nós temos a tendência de pensar que estudar é chato e deveria ser algo sério. Porém, nós aprendemos mais facilmente quando nós genuinamente gostamos do que estamos aprendendo. Eis um exemplo: você estudou por inúmeras horas para uma prova e quando finalmente chega a hora, você percebe que se esqueceu de TUDO. Por outro lado, se eu te perguntasse sobre o episódio dessa semana da sua série favorita, que você assistiu apenas uma vez, dias atrás, você seria capaz de falar sobre ele durante horas! Por isso você deve sempre tentar tornar seu processo divertido. Desta forma seu cérebro irá absorver tudo de forma mais rápida e sem estresse, então não esqueça de se divertir!</p>
		</div>
	);
}

export default Mindset6pt;