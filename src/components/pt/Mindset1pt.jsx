import React from 'react';
import { mindsetBoxStyle, mindsetTitle } from '../../constants/styles';

function Mindset1pt() {
	return (
		<div className={ mindsetBoxStyle }>
			<h3 className={ mindsetTitle }>Motivação</h3>
			{ /* eslint-disable-next-line react/no-unescaped-entities */ }
			<p className="m-4">Motivação pode ser o maior clichê não só da comunidade poliglota, mas também de várias outras áreas. Porém, é difícil entender a importancia dela no seu processo antes de você falhar, dado a própria falta de motivação. O papel da motivação vem principalmente quando você não quer estudar e você precisa de um motivo para se convencer a fazer isso. Se você estiver em uma situação, onde você se pergunta "por que eu estou fazendo isso?" e você não tiver uma boa resposta, VOCÊ VAI DESISTIR! A motivação está lá apenas para garantir que você se mantenha na sua rotina e não desista.</p>
		</div>
	);
}

export default Mindset1pt;