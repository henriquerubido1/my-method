import React from 'react';
import { mindsetBoxStyle, mindsetTitle } from '../../constants/styles';

function FinalThoughtsPt() {
	return (
		<div className={ mindsetBoxStyle }>
			<h3 className={ mindsetTitle }>Pensamentos Finais</h3>
			<p className="m-4">Agora que você chegou ao texto final, eu gostaria de lembrá-lo que esses 6 textos acima são introduções bem resumidas desses conceitos. Se você quiser se aprofundar nesses tópicos, dê uma olhada no <a href="https://www.youtube.com/c/Thelinguist" className="text-purple hover:underline">canal do Steve Kaufmann</a> e no <a href="https://www.youtube.com/c/MATTvsJapan" className="text-purple hover:underline">canal do Matt vs. Japan</a>. Esses dois foram grandes inspirações para estes textos e para meu método. Eu também recomendaria que você não siga meu método de forma tão rígida, mas use-o como inspiração para a criação do seu próprio método.</p>
		</div>
	);
}

export default FinalThoughtsPt;
