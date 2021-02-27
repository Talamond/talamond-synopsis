import * as moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const OUTPUT_FORMAT = 'MMM Do YYYY';
export const OUTPUT_MONTH_FORMAT = 'MMM YYYY';

export function createDate(date: string) {
  return moment(date, DATE_FORMAT);
}

export function momentToString(date: moment.Moment) {
  return date.format(OUTPUT_FORMAT);
}

export function momentToMonthString(date: moment.Moment) {
  return date.format(OUTPUT_MONTH_FORMAT);
}
