import { getFinishedDays } from './consts';

const days = [...Array(15).keys()].slice(1);

export const firstWeek = days.filter(day => day < 8);
export const secondWeek = days.filter(day => day > 7);

const filterDays = firstWeek.filter((day) => day <= getFinishedDays);
const filterDays2 = secondWeek.filter((day) => day <= getFinishedDays);

export const finishedDays = [...filterDays, ...filterDays2];
