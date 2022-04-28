import React, { useEffect } from 'react';
import HeaderPt from '../components/HeaderPt';

function Phase1pt() {
  const primaryDays = [...Array(15).keys()];
  const days = primaryDays.slice(1);
  const firstWeek = days.filter(day => day < 8);
  const secondWeek = days.filter(day => day > 7);
  const getFinishedDays = localStorage.getItem('finishedDays1');

  function finishDay ({ target }) {
    if (target.className !== "bg-gray-dark p-5") {
      localStorage.setItem('finishedDays1', target.innerHTML - 1)
      return target.className="bg-gray-dark p-5";
    } else {
      localStorage.setItem('finishedDays1', target.innerHTML);
      return target.className="bg-green p-5";
    }
  }

  const filterDays = firstWeek.filter((day) => day <= getFinishedDays);
  const filterDays2 = secondWeek.filter((day) => day <= getFinishedDays);
  const finishedDays = [...filterDays, ...filterDays2];

  useEffect(() => {
    finishedDays.forEach(day => document.getElementById(day).className="bg-green p-5")
  }, [finishedDays])

  return (
    <div className="text-green">
      <HeaderPt en="/" pt="/pt/phase1" />
      <h1 className="text-center p-3 text-3xl">Fase 1</h1>
      <h3 className="text-center p-3 text-2xl">Aprendendo suas primeiras palavras e estruturas gramaticais</h3>
      <p className="text-center mx-10">Nessa fase você irá usar o <a href="https://www.duolingo.com/learn" className="text-purple hover:underline">Duolingo</a> durante 2 semanas para aprender suas primeiras palavras, para que você possa passar para o <a href="https://www.lingq.com/en/" className="text-purple hover:underline">LingQ</a> futuramente. Nesta fase você irá estudar por volta de uma hora por dia utilizando o <a href="https://www.youtube.com/watch?v=qWTsFh8c37U" className="text-purple hover:underline">Método de Cascata</a> (a explicação do método começa aos 8:00 minutos, ative as legendas).</p>
      <div className="flex justify-center">
        <table className="m-8">
          <tbody>
            <tr>
              { firstWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { secondWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
          </tbody>
        </table>
      </div>
      <h5 className="text-center">Total: 14 dias(2 semanas)</h5>
    </div>
  )
}

export default Phase1pt;
