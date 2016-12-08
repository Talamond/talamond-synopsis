const TIMELINE_START = 1157083200000;
const MS_IN_DAY = 86400000;

export function calculateLeft(date) {
  // date to millisecond
  const ms = date.valueOf();
  const days = (ms - TIMELINE_START) / MS_IN_DAY;
  return days * 1;
}

export function calculateLength(startDate, endDate) {
  console.log(startDate);
  console.log(endDate);
  const startPos = calculateLeft(startDate);
  const endPos = calculateLeft(endDate);
  console.log(startPos);
  console.log(endPos);
  return endPos - startPos;
}
