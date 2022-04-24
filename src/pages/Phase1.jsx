import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

function Phase1() {
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
      <Header />
      <h1 className="text-center p-3 text-3xl">Phase 1</h1>
      <h3 className="text-center p-3 text-2xl">Learning your very first words and sentence structures</h3>
      <p className="text-center mx-10">In this phase you are going to use <a href="https://www.duolingo.com/learn" className="text-purple hover:underline">Duolingo</a> for 2 weeks in order to learn your first words, so you can move on to <a href="https://www.lingq.com/en/" className="text-purple hover:underline">LingQ</a>. In this phase you are going to study for around an hour a day using the <a href="https://www.youtube.com/watch?v=qWTsFh8c37U" className="text-purple hover:underline">Cascading Method</a> (the explanation of the method starts at 8:00 minutes).</p>
      <div className="flex justify-center">
        <table className="bg-gray-dark m-8">
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
      <h5 className="text-center">Total: 14 days(2 weeks)</h5>
    </div>
  )
}

export default Phase1;
