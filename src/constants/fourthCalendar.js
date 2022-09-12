import { getFinishedDays } from './consts';

const days = [...Array(366).keys()].slice(181);

export const firstWeek = days.filter(day => day < 188);
export const secondWeek = days.filter(day => day > 187 && day < 195);
export const thirdWeek = days.filter(day => day > 194 && day < 202);
export const fourthWeek = days.filter(day => day > 201 && day < 209);
export const fifthWeek = days.filter(day => day > 208 && day < 216);
export const sixthWeek = days.filter(day => day > 215 && day < 223);
export const seventhWeek = days.filter(day => day > 222 && day < 230);
export const eighthWeek = days.filter(day => day > 229 && day < 237);
export const ninthWeek = days.filter(day => day > 236 && day < 244);
export const tenthWeek = days.filter(day => day > 243 && day < 251);
export const eleventhWeek = days.filter(day => day > 250 && day < 258);
export const twelfthWeek = days.filter(day => day > 257 && day < 265);
export const thirteenthWeek = days.filter(day => day > 264 && day < 272);
export const fourteenthWeek = days.filter(day => day > 271 && day < 279);
export const fifteenthWeek = days.filter(day => day > 278 && day < 286);
export const sixteenthWeek = days.filter(day => day > 285 && day < 293);
export const seventeenthWeek = days.filter(day => day > 292 && day < 300);
export const eighteenthWeek = days.filter(day => day > 299 && day < 307);
export const nineteenthWeek = days.filter(day => day > 306 && day < 314);
export const twentiethWeek = days.filter(day => day > 313 && day < 321);
export const twentyFirstWeek = days.filter(day => day > 320 && day < 328);
export const twentySecondWeek = days.filter(day => day > 327 && day < 335);
export const twentyThirdWeek = days.filter(day => day > 334 && day < 342);
export const twentyFourthWeek = days.filter(day => day > 341 && day < 349);
export const twentyFifthWeek = days.filter(day => day > 348 && day < 356);
export const twentySixthWeek = days.filter(day => day > 355 && day < 363);
export const twentySeventhWeek = days.filter(day => day > 362 && day < 366);

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

export const finishedDays = [
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
