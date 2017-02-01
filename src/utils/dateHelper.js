import moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const OUTPUT_FORMAT = 'MMM Do YYYY';
export function createDate(date) {
  return moment(date, DATE_FORMAT);
}

export function toString(date) {
  return date.format(OUTPUT_FORMAT);
}
