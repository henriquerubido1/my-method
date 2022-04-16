import React, { useState, useEffect } from 'react';

function Phase1() {
  const [display, setDisplay] = useState(true);
  const primaryDays = [...Array(15).keys()];
  const days = primaryDays.slice(1);
  const firstWeek = days.filter(day => day < 8);
  const secondWeek = days.filter(day => day > 7);
  const getFinishedDays = localStorage.getItem('finishedDays1');

  function displaySection () {
    setDisplay(!display);
  }

  function finishDay ({ target }) {
    if (target.className !== "table-background") {
      localStorage.setItem('finishedDays1', target.innerHTML - 1)
      return target.className="table-background";
    } else {
      localStorage.setItem('finishedDays1', target.innerHTML);
      return target.className="green-background";
    }
  }

  const filterDays = firstWeek.filter((day) => day <= getFinishedDays);
  const filterDays2 = secondWeek.filter((day) => day <= getFinishedDays);
  const finishedDays = [...filterDays, ...filterDays2];

  useEffect(() => {
    if (display === true) {
      finishedDays.forEach(day => document.getElementById(day).className="green-background")
    }
  }, [finishedDays])

  return (
    <div className='green'>
      <h2 className="table-background" onClick={ displaySection }>Phase 1</h2>
      { display && (
      <>
        <h3>Learning your very first words and sentence structures:</h3>
        <p>In this phase you are going to use <a href="https://www.duolingo.com/learn">Duolingo</a> for 2 weeks in order to learn your first words, so you can move on to <a href="https://www.lingq.com/en/">LingQ</a>. In this phase you are going to study for around an hour a day using the <a href="https://www.youtube.com/watch?v=qWTsFh8c37U">Cascading Method</a> (the explanation of the method starts at 8:00 minutes).</p>
        <table className={ getFinishedDays === '14' ? "green-background" : "table-background"}>
          <tbody>
            <tr>
              { firstWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { secondWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
          </tbody>
        </table>
        <h5>Total: 14 days(2 weeks).</h5>
      </>
      )}
    </div>
  )
}

export default Phase1;
