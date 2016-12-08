import * as TimelineActionTypes from './timelineActionTypes.js';
import moment from 'moment';
import _ from 'lodash';

const format = 'YYYY-MM-DD';
const displayedMonths = 3;

const sampleTimelineElements = [
  {
    id: 1,
    startDate: createDate('2006-09-01'),
    endDate: createDate('2011-04-30'),
    content: 'Bachelor of Computer Science/Software Engineering Option - Co-operative Program, University of Waterloo',
  },
  {
    id: 2,
    startDate: createDate('2007-01-01'),
    endDate: createDate('2007-04-30'),
    content: 'First coop term, Quality Assurance Functional Analyst at Parlay Entertainment.'
  },
  {
    id: 3,
    startDate: createDate('2007-09-01'),
    endDate: createDate('2007-12-31'),
    content: 'Second coop term, Java Programmer at Ministry of Education.'
  },
  {
    id: 4,
    startDate: createDate('2008-05-01'),
    endDate: createDate('2008-08-31'),
    content: 'Third coop term, Java Programmer at SQL Power Group Inc.'
  },
  {
    id: 5,
    startDate: createDate('2009-01-01'),
    endDate: createDate('2009-04-30'),
    content: 'Forth coop term, Java Programmer at N8Identity.'
  },
  {
    id: 6,
    startDate: createDate('2009-09-01'),
    endDate: createDate('2009-12-31'),
    content: 'Fifth coop term, Java Programmer at N8Identity.'
  },
  {
    id: 7,
    startDate: createDate('2010-05-01'),
    endDate: createDate('2010-08-31'),
    content: 'Sixth coop term, Java Programmer at N8Identity.'
  },
  {
    id: 8,
    startDate: createDate('2011-05-01'),
    endDate: createDate('2012-12-15'),
    content: 'Full time position, Java Programmer at N8Identity.'
  },
  {
    id: 9,
    startDate: createDate('2013-01-01'),
    endDate: createDate('2017-01-01'),   // todo get current date and use that
    content: 'Full time position, IBM.'
  },
];

function findTimelineRows(elems) {
  // TODO sort elements
  const newElems = [];
  const spans = [];
  _.forEach(elems, (elem, i) => {
    newElems.push(elem);
    if (spans.length === 0) {
      spans.push([{startDate: elem.startDate, endDate: elem.endDate}]);
      newElems[i].row = 0;
    } else {
      let found = false;
      for (let x = 0; x < spans.length; x++) {
        if (moment(spans[x][spans[x].length - 1].endDate).isBefore(elem.startDate)) { // TODO is this syntax right?
          spans[x].push({startDate: elem.startDate, endDate: elem.endDate}); // overwrite this span
          newElems[i].row = x;
          found = true;
          break;
        }
      }
      if (!found) {
        spans.push([{startDate: elem.startDate, endDate: elem.endDate}]);
        newElems[i].row = spans.length - 1;
      }
    }
  });
  return {newElems, timelineSpans: spans};
}

function createDate(date) {
  return moment(date, format);
}

export function getInitialState() {
  const now = moment().format(format);
  const then = moment().subtract(displayedMonths, 'months').format(format);
  const rowsObj = findTimelineRows(sampleTimelineElements);
  return {
    displayStartDate: then,
    displayEndDate: now,
    timelineElements: sampleTimelineElements,
    timelineRows: rowsObj.newElems,
    timelineSpans: rowsObj.timelineSpans
  };
};

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
	const actionTypes = TimelineActionTypes.createActionTypes(prefix);
	const handlers = {};

	handlers[actionTypes.CLICK_ELEM] = (newState, payload) => {
		// put up a spinner or something
    const elem = _.find(newState.timelineElements, (timelineElement) => {
      return timelineElement.id === payload.timelineElem.id;
    });
    if (elem) {
      elem.expanded = !elem.expanded;
    }
		return newState;
	};

	return handlers;
};
