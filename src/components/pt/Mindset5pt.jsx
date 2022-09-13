import React from 'react';
import { mindsetBoxStyle, mindsetTitle } from '../../constants/styles';

function Mindset5() {
	return (
		<div className={ mindsetBoxStyle }>
			<h3 className={ mindsetTitle }>Habilidades X Conhecimento</h3>
			{ /* eslint-disable-next-line react/no-unescaped-entities */ }
			<p className="m-4">Agora que nós já cobrimos o tópico "Autodidatismo", nós podemos entender o que faz uma ferramenta boa. Para escolher ótimas ferramentas para o seu aprendizado, você deve entender a diferença entre habilidades e conhecimento. Habilidades são competências que só podem ser aprendidas através da prática, andar de bicicleta, por exemplo. Você pode ler milhares de livros sobre como andar de bicicleta, mas você não vai aprender a andar de bicicleta até você realmente subir em uma e tentar andar nela. É claro, livros podem te dar dicas muito úteis, mas o ponto é: PARA ADQUIRIR UMA HABILIDADE, VOCÊ PRECISA PRATICÁ-LA. As habilidades que você precisa praticar para aprender uma língua são: leitura, escrita, escuta e fala. Gramática também é uma habilidade, mas você vai acabar aprendendo a maior parte dela através da prática das outras habilidades, por isso não há necessidade de praticá-la separadamente. Já o conhecimento pode ser descrito como informação e pode ser adquirido através do estudo. Geografia, por exemplo, é uma forma conhecimento. Você pode adquirir conhecimento lendo um livro ou estudando de outras formas também. Vocabulário é conhecimento no aprendizado de línguas.</p>
		</div>
	);
}

export default Mindset5;