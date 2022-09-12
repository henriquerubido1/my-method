import { getFinishedDays } from './consts';

const days = [...Array(181).keys()].slice(91);

export const firstWeek = days.filter(day => day < 98);
export const secondWeek = days.filter(day => day > 99 && day < 107);
export const thirdWeek = days.filter(day => day > 106 && day < 114);
export const fourthWeek = days.filter(day => day > 113 && day < 121);
export const fifthWeek = days.filter(day => day > 120 && day < 128);
export const sixthWeek = days.filter(day => day > 127 && day < 135);
export const seventhWeek = days.filter(day => day > 134 && day < 142);
export const eighthWeek = days.filter(day => day > 141 && day < 149);
export const ninthWeek = days.filter(day => day > 148 && day < 156);
export const tenthWeek = days.filter(day => day > 155 && day < 163);
export const eleventhWeek = days.filter(day => day > 162 && day < 170);
export const twelfthWeek = days.filter(day => day > 169 && day < 177);
export const thirteenthWeek = days.filter(day => day > 176 && day < 184);

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
	...filterDays13
];
