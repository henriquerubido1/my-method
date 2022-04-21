import React, { useState, useEffect } from 'react';

function Phase3() {
  const [display, setDisplay] = useState(false);
  const primaryDays = [...Array(181).keys()];
  const days = primaryDays.slice(91);
  const firstWeek = days.filter(day => day < 98);
  const secondWeek = days.filter(day => day > 99 && day < 107);
  const thirdWeek = days.filter(day => day > 106 && day < 114);
  const fourthWeek = days.filter(day => day > 113 && day < 121);
  const fifthWeek = days.filter(day => day > 120 && day < 128);
  const sixthWeek = days.filter(day => day > 127 && day < 135);
  const seventhWeek = days.filter(day => day > 134 && day < 142);
  const eighthWeek = days.filter(day => day > 141 && day < 149);
  const ninthWeek = days.filter(day => day > 148 && day < 156);
  const tenthWeek = days.filter(day => day > 155 && day < 163);
  const eleventhWeek = days.filter(day => day > 162 && day < 170);
  const twelfthWeek = days.filter(day => day > 169 && day < 177);
  const thirteenthWeek = days.filter(day => day > 176 && day < 184);
  const getFinishedDays = localStorage.getItem('finishedDays3');

  function displaySection () {
    setDisplay(!display);
  }

  function finishDay ({ target }) {
    if (target.className !== "table-background") {
      localStorage.setItem('finishedDays3', target.innerHTML - 1)
      return target.className="table-background";
    } else {
      localStorage.setItem('finishedDays3', target.innerHTML);
      return target.className="pink-background";
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
  const filterDays12 = twelfthWeek.filter((day) => day <= getFinishedDays);
  const filterDays13 = thirteenthWeek.filter((day) => day <= getFinishedDays);
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
    ...filterDays11,
    ...filterDays12,
    ...filterDays13
  ];

  useEffect(() => {
    if (display === true) {
      finishedDays.forEach(day => document.getElementById(day).className="pink-background")
    }
  }, [finishedDays])

  return (
    <div className='pink'>
      <h2 className="table-background" onClick={ displaySection }>Phase 3</h2>
      { display &&(
      <>
        <h3>Developing your active skills:</h3>
        <p>Now you already have a basis in the language and you already understand around half of what we can call here as “real conversations”. Now is the time for you to start developing your active skills, which are speaking and writing. In order to do that, you need to start practicing them. You are still going to keep up with your <a href="https://www.lingq.com/en/">LingQ</a> daily goal. Besides that, you are going to have conversation classes with a native speaker for 30 or 45 minutes per week on <a href="https://www.italki.com">Italki</a>. You should choose a teacher/tutor that offers you writing corrections, so you can write small texts each week in order to practice writing, too. At this point, you might realize that there are some essential words you don’t know yet. For those words you can use <a href="https://apps.ankiweb.net">Anki</a> to really make those words stick to your memory. But remember you should only choose those words you wanted to say/write in your classes/writings, but you couldn’t. Those are the words you lack!</p>
        <table className={ getFinishedDays === '180' ? "pink-background" : "table-background"}>
          <tbody>
            <tr>
              { firstWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { secondWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { thirdWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { fourthWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { fifthWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { sixthWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { seventhWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { eighthWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { ninthWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { tenthWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { eleventhWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { twelfthWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { thirteenthWeek.map(day => <td id={ day } className="table-background" onClick={ finishDay }>{ day }</td>) }
            </tr>
          </tbody>
        </table>
        <h5>Total: 90 days(12,5 weeks).</h5>
      </>
      )}
    </div>
  )
}

export default Phase3;
