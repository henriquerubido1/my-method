import React from 'react';

function Phase1() {
  const primaryDays = [...Array(15).keys()];
  const days = primaryDays.slice(1);
  const firstWeek = days.filter(day => day < 8);
  const secondWeek = days.filter(day => day > 7);

  function finishDay ({ target }) {
    if (target.className !== "table-background") {
      return target.className="table-background";
    } else {
      return target.className="green-background";
    }
  }

  return (
    <div className='green'>
      <h3>Phase 1 - Learning your very first words and sentence structures:</h3>
      <p>In this phase you are going to use <a href="https://www.duolingo.com/learn">Duolingo</a> for 2 weeks in order to learn your first words, so you can move on to <a href="https://www.lingq.com/en/">LingQ</a>. In this phase you are going to study for around an hour a day using the <a href="https://www.youtube.com/watch?v=qWTsFh8c37U">Cascading Method</a> (the explanation of the method starts at 8:00 minutes).</p>
      <table className="table-background">
        <tbody>
          <tr>
            { firstWeek.map(day => <td className="table-background" onClick={ finishDay }>{ day }</td>) }
          </tr>
          <tr>
            { secondWeek.map(day => <td className="table-background" onClick={ finishDay }>{ day }</td>) }
          </tr>
        </tbody>
      </table>
      <h5>Total: 14 days(2 weeks).</h5>
    </div>
  )
}

export default Phase1;
