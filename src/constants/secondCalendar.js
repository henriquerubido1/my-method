import { getFinishedDays } from './consts';

const days = [...Array(91).keys()].slice(15);

export const firstWeek = days.filter(day => day < 22);
export const secondWeek = days.filter(day => day > 21 && day < 29);
export const thirdWeek = days.filter(day => day > 28 && day < 36);
export const fourthWeek = days.filter(day => day > 35 && day < 43);
export const fifthWeek = days.filter(day => day > 42 && day < 50);
export const sixthWeek = days.filter(day => day > 49 && day < 57);
export const seventhWeek = days.filter(day => day > 56 && day < 64);
export const eighthWeek = days.filter(day => day > 63 && day < 71);
export const ninthWeek = days.filter(day => day > 70 && day < 78);
export const tenthWeek = days.filter(day => day > 77 && day < 85);
export const eleventhWeek = days.filter(day => day > 84 && day < 91);

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
	...filterDays11
];