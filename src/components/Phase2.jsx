import React from 'react';

function Phase2() {
  const primaryDays = [...Array(91).keys()];
  const days = primaryDays.slice(15);
  const firstWeek = days.filter(day => day < 22);
  const secondWeek = days.filter(day => day > 21 && day < 29);
  const thirdWeek = days.filter(day => day > 28 && day < 36);
  const fourthWeek = days.filter(day => day > 35 && day < 43);
  const fifthWeek = days.filter(day => day > 42 && day < 50);
  const sixthWeek = days.filter(day => day > 49 && day < 57);
  const seventhWeek = days.filter(day => day > 56 && day < 64);
  const eighthWeek = days.filter(day => day > 63 && day < 71);
  const ninthWeek = days.filter(day => day > 70 && day < 78);
  const tenthWeek = days.filter(day => day > 77 && day < 85);
  const eleventhWeek = days.filter(day => day > 84 && day < 91);
  return (
    <div className='cyan'>
      <h3>Phase 2 - Building your basis in the foreign language:</h3>
      <p>From now on, you will start using <a href="https://www.lingq.com/en/">LingQ</a> every single day during your way to B2 level. In this phase, your goal is to earn 1500 coins (30x streak) a day. “Coins earned” is the best way to measure how much contact with the language you are having, because this number is not as easy to manipulate as “time spent with the language” or “the number of words you know”.</p>
      <table className="table-background">
        <tbody>
          <tr>
            { firstWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { secondWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { thirdWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { fourthWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { fifthWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { sixthWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { seventhWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { eighthWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { ninthWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { tenthWeek.map(day => <td>{ day }</td>) }
          </tr>
          <tr>
            { eleventhWeek.map(day => <td>{ day }</td>) }
          </tr>
        </tbody>
      </table>
      <h5>Total: 76 days(10,8 weeks).</h5>
    </div>
  )
}

export default Phase2;
