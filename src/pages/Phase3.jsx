import React, { useEffect } from 'react';
import Header from '../components/Header';

function Phase3() {
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

  function finishDay ({ target }) {
    if (target.className !== "bg-gray-dark p-5") {
      localStorage.setItem('finishedDays3', target.innerHTML - 1)
      return target.className="bg-gray-dark p-5";
    } else {
      localStorage.setItem('finishedDays3', target.innerHTML);
      return target.className="bg-red p-5";
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
    finishedDays.forEach(day => document.getElementById(day).className="bg-red p-5")
  }, [finishedDays]);

  return (
    <div className="text-red">
      <Header />
      <h1 className="text-center p-3 text-3xl">Phase 3</h1>
      <h3 className="text-center p-3 text-2xl">Developing your active skills</h3>
      <p className="text-center mx-10">Now you already have a basis in the language and you already understand around half of what we can call here as “real conversations”. Now is the time for you to start developing your active skills, which are speaking and writing. In order to do that, you need to start practicing them. You are still going to keep up with your <a href="https://www.lingq.com/en/" className="text-purple hover:underline">LingQ</a> daily goal. Besides that, you are going to have conversation classes with a native speaker for 30 or 45 minutes per week on <a href="https://www.italki.com" className="text-purple hover:underline">Italki</a>. You should choose a teacher/tutor that offers you writing corrections, so you can write small texts each week in order to practice writing, too. At this point, you might realize that there are some essential words you don’t know yet. For those words you can use <a href="https://apps.ankiweb.net" className="text-purple hover:underline">Anki</a> to really make those words stick to your memory. But remember you should only choose those words you wanted to say/write in your classes/writings, but you couldn’t. Those are the words you lack!</p>
      <div className="flex justify-center">
        <table className="m-8">
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
          </tbody>
        </table>
        <table className="m-8">
          <tbody>
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
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <table className="m-8">
          <tbody>
            <tr>
              { ninthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { tenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { eleventhWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { twelfthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
          </tbody>
        </table>
        <table className="m-8 h-1">
          <tbody>
            <tr>
            { thirteenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            <td className={ getFinishedDays === '180' ? "bg-red p-5" : "bg-gray-dark p-5" }></td>
            <td className={ getFinishedDays === '180' ? "bg-red p-5" : "bg-gray-dark p-5" }></td>
            <td className={ getFinishedDays === '180' ? "bg-red p-5" : "bg-gray-dark p-5" }></td>
            <td className={ getFinishedDays === '180' ? "bg-red p-5" : "bg-gray-dark p-5" }></td>
            <td className={ getFinishedDays === '180' ? "bg-red p-5" : "bg-gray-dark p-5" }></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5 className="text-center">Total: 90 days(12,5 weeks)</h5>
    </div>
  )
}

export default Phase3;
