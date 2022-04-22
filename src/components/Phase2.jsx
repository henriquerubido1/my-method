import React, { useState, useEffect } from 'react';

function Phase2() {
  const [display, setDisplay] = useState(false);
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
  const getFinishedDays = localStorage.getItem('finishedDays2');

  function displaySection () {
    setDisplay(!display);
  }

  function finishDay ({ target }) {
    if (target.className !== "bg-gray-dark p-5") {
      localStorage.setItem('finishedDays2', target.innerHTML - 1)
      return target.className="bg-gray-dark p-5";
    } else {
      localStorage.setItem('finishedDays2', target.innerHTML);
      return target.className="bg-blue p-5";
    }
  }

  const filterDays = firstWeek.filter((day) => day <= getFinishedDays);
  const filterDays2 = secondWeek.filter((day) => day <= getFinishedDays);
  const filterDays3 = thirdWeek.filter((day) => day <= getFinishedDays);
  const filterDays4 = fourthWeek.filter((day) => day <= getFinishedDays);
  const filterDays5 = fifthWeek.filter((day) => day <= getFinishedDays);
  const filterDays6 = sixthWeek.filter((day) => day <= getFinishedDays);
  const filterDays7 = seventhWeek.filter((day) => day <= getFinishedDays);
  const filterDays8 = eighthWeek.filter((day) => day <= getFinishedDays);
  const filterDays9 = ninthWeek.filter((day) => day <= getFinishedDays);
  const filterDays10 = tenthWeek.filter((day) => day <= getFinishedDays);
  const filterDays11 = eleventhWeek.filter((day) => day <= getFinishedDays);
  const finishedDays = [
    ...filterDays,
    ...filterDays2,
    ...filterDays3,
    ...filterDays4,
    ...filterDays5,
    ...filterDays6,
    ...filterDays7,
    ...filterDays8,
    ...filterDays9,
    ...filterDays10,
    ...filterDays11
  ];

  useEffect(() => {
    if (display === true) {
      finishedDays.forEach(day => document.getElementById(day).className="bg-blue p-5")
    }
  }, [finishedDays])

  return (
    <div className="text-blue w-3/6">
      <h2 className="bg-gray-dark text-center" onClick={ displaySection }>Phase 2</h2>
      { display && (
      <>
        <h3 className="text-center p-3">Building your basis in the foreign language</h3>
        <p className="text-center">From now on, you will start using <a href="https://www.lingq.com/en/" className="text-purple hover:underline">LingQ</a> every single day during your way to C1 level. In this phase, your goal is to earn 1500 coins (30x streak) a day. “Coins earned” is the best way to measure how much contact with the language you are having, because this number is not as easy to manipulate as “time spent with the language” or “the number of words you know”.</p>
        <table className={ getFinishedDays === '90' ? "bg-blue" : "bg-gray-dark"}>
          <tbody>
            <tr>
              { firstWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { secondWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { thirdWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { fourthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { fifthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { sixthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { seventhWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { eighthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { ninthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { tenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { eleventhWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
          </tbody>
        </table>
        <h5 className="text-center">Total: 76 days(10,8 weeks)</h5>
      </>
      )}
    </div>
  )
}

export default Phase2;
