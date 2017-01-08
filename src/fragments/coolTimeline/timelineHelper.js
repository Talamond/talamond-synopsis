const TIMELINE_START = 1157083200000;
const MS_IN_DAY = 86400000;

export function calculateLeft(date) {
  // date to millisecond
  const ms = date.valueOf();
  const days = (ms - TIMELINE_START) / MS_IN_DAY;
  return days * 1;  // the 1 is number is pixels per day, you can make it bigger or smaller! TODO parma this?
}

export function calculateLength(startDate, endDate) {
  const startPos = calculateLeft(startDate);
  const endPos = calculateLeft(endDate);
  return endPos - startPos;
}

export function getTagCloudPrefix(prefix, id) {
  return `${prefix}_TagCloud_${id}_`;
}
