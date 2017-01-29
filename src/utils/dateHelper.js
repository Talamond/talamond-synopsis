import moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD';
export function createDate(date) {
  return moment(date, DATE_FORMAT);
}

export function toString(date) {
  return date.format(DATE_FORMAT);
}
