import React, { useEffect } from 'react';
import Header from '../components/Header';

function Phase4() {
  const primaryDays = [...Array(366).keys()];
  const days = primaryDays.slice(181);
  const firstWeek = days.filter(day => day < 188);
  const secondWeek = days.filter(day => day > 187 && day < 195);
  const thirdWeek = days.filter(day => day > 194 && day < 202);
  const fourthWeek = days.filter(day => day > 201 && day < 209);
  const fifthWeek = days.filter(day => day > 208 && day < 216);
  const sixthWeek = days.filter(day => day > 215 && day < 223);
  const seventhWeek = days.filter(day => day > 222 && day < 230);
  const eighthWeek = days.filter(day => day > 229 && day < 237);
  const ninthWeek = days.filter(day => day > 236 && day < 244);
  const tenthWeek = days.filter(day => day > 243 && day < 251);
  const eleventhWeek = days.filter(day => day > 250 && day < 258);
  const twelfthWeek = days.filter(day => day > 257 && day < 265);
  const thirteenthWeek = days.filter(day => day > 264 && day < 272);
  const fourteenthWeek = days.filter(day => day > 271 && day < 279);
  const fifteenthWeek = days.filter(day => day > 278 && day < 286);
  const sixteenthWeek = days.filter(day => day > 285 && day < 293);
  const seventeenthWeek = days.filter(day => day > 292 && day < 300);
  const eighteenthWeek = days.filter(day => day > 299 && day < 307);
  const nineteenthWeek = days.filter(day => day > 306 && day < 314);
  const twentiethWeek = days.filter(day => day > 313 && day < 321);
  const twentyFirstWeek = days.filter(day => day > 320 && day < 328);
  const twentySecondWeek = days.filter(day => day > 327 && day < 335);
  const twentyThirdWeek = days.filter(day => day > 334 && day < 342);
  const twentyFourthWeek = days.filter(day => day > 341 && day < 349);
  const twentyFifthWeek = days.filter(day => day > 348 && day < 356);
  const twentySixthWeek = days.filter(day => day > 355 && day < 363);
  const twentySeventhWeek = days.filter(day => day > 362 && day < 366);
  const getFinishedDays = localStorage.getItem('finishedDays4');

  function finishDay ({ target }) {
    if (target.className !== "bg-gray-dark p-5") {
      localStorage.setItem('finishedDays4', target.innerHTML - 1)
      return target.className="bg-gray-dark p-5";
    } else {
      localStorage.setItem('finishedDays4', target.innerHTML);
      return target.className="bg-gray-light p-5";
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
  const filterDays14 = fourteenthWeek.filter((day) => day <= getFinishedDays);
  const filterDays15 = fifteenthWeek.filter((day) => day <= getFinishedDays);
  const filterDays16 = sixteenthWeek.filter((day) => day <= getFinishedDays);
  const filterDays17 = seventeenthWeek.filter((day) => day <= getFinishedDays);
  const filterDays18 = eighteenthWeek.filter((day) => day <= getFinishedDays);
  const filterDays19 = nineteenthWeek.filter((day) => day <= getFinishedDays);
  const filterDays20 = twentiethWeek.filter((day) => day <= getFinishedDays);
  const filterDays21 = twentyFirstWeek.filter((day) => day <= getFinishedDays);
  const filterDays22 = twentySecondWeek.filter((day) => day <= getFinishedDays);
  const filterDays23 = twentyThirdWeek.filter((day) => day <= getFinishedDays);
  const filterDays24 = twentyFourthWeek.filter((day) => day <= getFinishedDays);
  const filterDays25 = twentyFifthWeek.filter((day) => day <= getFinishedDays);
  const filterDays26 = twentySixthWeek.filter((day) => day <= getFinishedDays);
  const filterDays27 = twentySeventhWeek.filter((day) => day <= getFinishedDays);
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
    ...filterDays13,
    ...filterDays14,
    ...filterDays15,
    ...filterDays16,
    ...filterDays17,
    ...filterDays18,
    ...filterDays19,
    ...filterDays20,
    ...filterDays21,
    ...filterDays22,
    ...filterDays23,
    ...filterDays24,
    ...filterDays25,
    ...filterDays26,
    ...filterDays27
  ];

  useEffect(() => {
    finishedDays.forEach(day => document.getElementById(day).className="bg-gray-light  p-5")
  }, [finishedDays])

  return (
    <div className="text-gray-light">
      <Header />
      <h1 className="text-center p-3 text-3xl">Phase 4</h1>
      <h3 className="text-center p-3 text-2xl">Getting rid of your flaws:</h3>
      <p className="text-center mx-10">It's time to broaden your horizons! Now you can already talk about different topics effortlesly, but your vocabulary is still limited to what you got in contact with and you still make a fair amount of mistakes. In order to reach higher levels, your approach is going to be quite different from the beginning. Your new focus is going to be on getting in contact with topics you haven't before, improving your speech, writing and pronunciation and stop making mistakes that native speakers wouldn't do. Now is a good time to think about changing tutors on <a href="https://www.italki.com/" className="text-purple hover:underline">Italki</a> and choosing a teacher who can do test preparations. Your goal is not to prepare for any test, but those teachers tend to be very picky with all of your mistakes, which is fundamental for this phase.</p>
      <br />
      <p  className="text-center mx-10">Your daily task on <a href="https://www.lingq.com/en/" className="text-purple hover:underline">LingQ</a> is going to be the same, but now you need to choose lessons with new topics and advanced language. Besides that, your weekly writing task is to write one or two essays about those new topics. You should also watch a couple of YouTube videos about common pronunciation mistakes and try to fix them in your 45-minute classes twice a week.</p>
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
        <table className="m-8">
          <tbody>
            <tr>
              { thirteenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { fourteenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { fifteenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { sixteenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <table className="m-8">
          <tbody>
            <tr>
              { seventeenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { eighteenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { nineteenthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { twentiethWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
          </tbody>
        </table>
        <table className="m-8">
          <tbody>
            <tr>
              { twentyFirstWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { twentySecondWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { twentyThirdWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { twentyFourthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <table className="m-8">
          <tbody>
            <tr>
              { twentyFifthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { twentySixthWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
            </tr>
            <tr>
              { twentySeventhWeek.map(day => <td id={ day } className="bg-gray-dark p-5" onClick={ finishDay }>{ day }</td>) }
              <td className={ getFinishedDays === '365' ? "bg-gray-light p-5" : "bg-gray-dark p-5" }></td>
              <td className={ getFinishedDays === '365' ? "bg-gray-light p-5" : "bg-gray-dark p-5" }></td>
              <td className={ getFinishedDays === '365' ? "bg-gray-light p-5" : "bg-gray-dark p-5" }></td>
              <td className={ getFinishedDays === '365' ? "bg-gray-light p-5" : "bg-gray-dark p-5" }></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5 className="text-center">Total: 185 days(26,4 weeks)</h5>
    </div>
  )
}

export default Phase4;
